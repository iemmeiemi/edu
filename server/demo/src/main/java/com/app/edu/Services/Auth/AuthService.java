package com.app.edu.Services.Auth;


import com.app.edu.Models.Account;
import com.app.edu.Models.Role;
import com.app.edu.Repositories.AccountRepository;
import com.app.edu.Repositories.RoleRepository;
import com.app.edu.dtos.Auth.CreateAccountRequest;
import com.app.edu.dtos.Auth.LoginAccountResponse;
import com.app.edu.dtos.Auth.LoginEmailRequest;
import com.app.edu.dtos.Auth.LoginTokenRequest;
import com.app.edu.mapper.RegisterAccountMapper;
import com.app.edu.sercurity.HashUtil;
import com.app.edu.sercurity.JwtUtils;
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
    private final HashUtil passwordEncoder;
    private final RegisterAccountMapper registerAccountMapper;

    public AuthService(JwtUtils jwtUtil,
                       AccountRepository accountRepository,
                       HashUtil passwordEncoder,
                       RegisterAccountMapper registerAccountMapper,
                       RoleRepository roleRepository
    ) {
        this.jwtUtil = jwtUtil;
        this.accountRepository = accountRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.registerAccountMapper = registerAccountMapper;
    }

    public UUID createAccountService (CreateAccountRequest request) throws Exception {
        if(accountRepository.existsByEmail(request.getEmail())) {
            throw new Exception("The email is already exist.");
        }
        Set<Role> roles = new HashSet<>();
        for (String roleName : request.getRoles()) { // dto.getRoles() là Set<String>
            Role role = roleRepository.findByName(roleName)
                    .orElseGet(() -> roleRepository.save(new Role(roleName)));
            roles.add(role);
        }

        request.setPass(passwordEncoder.hash(request.getPass()));
        Account acc = registerAccountMapper.toEntity(request);


        acc.setRoles(roles);
        return accountRepository.save(acc).getAccId();
    }

    public LoginAccountResponse loginWithEmail(LoginEmailRequest request) throws Exception {
        Account acc = accountRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new Exception("Wrong email or password"));
        if(!passwordEncoder.verify(request.getPass(), acc.getPass())) {
            throw new Exception("Wrong email or password");
        }
        String accessToken = jwtUtil.generateToken(acc.getEmail(), acc.getRoles().stream().map(Role::getName)    // lấy tên role từ object Role
                .collect(Collectors.toSet()));
        String refreshToken = jwtUtil.generateRefreshToken(new HashMap<>(), acc.getEmail());
        acc.setRefreshToken(refreshToken);

        LoginAccountResponse res = new LoginAccountResponse(accessToken, refreshToken);
        return res;
    }


    public String refreshAccessToken(LoginTokenRequest request) throws Exception {
        if (!jwtUtil.isTokenValid(request.getAccessToken())) {
            throw new Exception("Invalid refresh token");
        }

        Account account = accountRepository.findByEmail(jwtUtil.extractEmail(request.getAccessToken()))
                .orElseThrow(() -> new Exception("User not found"));

        String token = account.getRefreshToken();

        account.setRefreshToken(null);
        accountRepository.save(account);


        return jwtUtil.generateToken(account.getEmail(), account.getRoles().stream().map(Role::getName)    // lấy tên role từ object Role
                .collect(Collectors.toSet()));
    }





}
