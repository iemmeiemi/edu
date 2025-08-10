package com.app.edu.Services.Auth;


import com.app.edu.Models.Account;
import com.app.edu.Models.Role;
import com.app.edu.Models.Student;
import com.app.edu.Models.Teacher;
import com.app.edu.Repositories.AccountRepository;
import com.app.edu.Repositories.RoleRepository;
import com.app.edu.Repositories.StudentRepository;
import com.app.edu.Repositories.TeacherRepository;
import com.app.edu.dtos.Auth.*;
import com.app.edu.mapper.RegisterAccountMapper;
import com.app.edu.sercurity.HashUtil;
import com.app.edu.sercurity.JwtUtils;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class AuthService {
    private final JwtUtils jwtUtil;
    private final AccountRepository accountRepository;
    private final RoleRepository roleRepository;
    private final StudentRepository studentRepository;
    private final TeacherRepository teacherRepository;
    private final HashUtil passwordEncoder;
    private final RegisterAccountMapper registerAccountMapper;

    public AuthService(JwtUtils jwtUtil, AccountRepository accountRepository, RoleRepository roleRepository, StudentRepository studentRepository, TeacherRepository teacherRepository, HashUtil passwordEncoder, RegisterAccountMapper registerAccountMapper) {
        this.jwtUtil = jwtUtil;
        this.accountRepository = accountRepository;
        this.roleRepository = roleRepository;
        this.studentRepository = studentRepository;
        this.teacherRepository = teacherRepository;
        this.passwordEncoder = passwordEncoder;
        this.registerAccountMapper = registerAccountMapper;
    }

    @Transactional //dùng để rollback nếu throw Exception
    public UUID createAccountService(CreateAccountRequest request) throws Exception {
        if (accountRepository.existsByEmail(request.getEmail())) {
            throw new Exception("The email is already exist.");
        }

        // Lấy roles từ DB hoặc tạo mới
        Set<Role> roles = request.getRoles().stream()
                .map(roleName -> roleRepository.findByName(roleName)
                        .orElseGet(() -> roleRepository.save(new Role(roleName))))
                .collect(Collectors.toSet());

        // Tạo entity Account từ mapper
        Account account = registerAccountMapper.toEntity(request);
        account.setPass(passwordEncoder.hash(request.getPass()));
        account.setRoles(roles);

        // Lưu Account
        UUID accountId = accountRepository.save(account).getAccId();

        // Tạo Student/Teacher tương ứng
        for (String role : request.getRoles()) {
            switch (role.toUpperCase()) {
                case "STUDENT":
                    studentRepository.save(new Student(accountId, request.getEmail()));
                    break;
                case "TEACHER":
                    teacherRepository.save(new Teacher(accountId, request.getEmail()));
                    break;
            }
        }

        return accountId;
    }


    public LoginAccountResponse loginWithEmail(LoginEmailRequest request) throws Exception {
        Account acc = accountRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new Exception("Wrong email or password"));
        if(!passwordEncoder.verify(request.getPass(), acc.getPass())) {
            throw new Exception("Wrong email or password");
        }
        String accessToken = jwtUtil.generateToken(acc.getEmail(), acc.getRoles().stream().map(Role::getName)    // lấy tên role từ object Role
                .collect(Collectors.toSet()));
        String refreshToken = jwtUtil.generateRefreshToken(acc.getEmail());
        acc.setRefreshToken(refreshToken);

        LoginAccountResponse res = new LoginAccountResponse(accessToken, refreshToken);
        return res;
    }


    public LoginAccountResponse refreshAccessToken(RefreshAccessTokenRequest request) throws Exception {
        if (!jwtUtil.isTokenValid(request.getRefreshToken())) {
            throw new Exception("Invalid refresh token");
        }

        Account account = accountRepository.findByEmail(jwtUtil.extractEmail(request.getRefreshToken()))
                .orElseThrow(() -> new Exception("Invalid refresh token: User not found"));

        if (!account.getRefreshToken().equals(request.getRefreshToken())) {
            throw new Exception("Invalid refresh token");
        }

        String accessToken = jwtUtil.generateToken(account.getEmail(), account.getRoles().stream().map(Role::getName)    // lấy tên role từ object Role
                .collect(Collectors.toSet()));
        String refreshToken = jwtUtil.generateRefreshToken(account.getEmail());
        account.setRefreshToken(refreshToken);
        accountRepository.save(account);

        LoginAccountResponse res = new LoginAccountResponse(accessToken, refreshToken);
        return res;
    }
}
