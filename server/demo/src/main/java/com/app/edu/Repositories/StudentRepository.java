package com.app.edu.Repositories;

import com.app.edu.Models.Account;
import com.app.edu.Models.Student;
import com.app.edu.Models.Teacher;
import org.springframework.data.repository.Repository;
import java.util.Optional;
import java.util.UUID;


public interface StudentRepository extends Repository<Student, UUID> {

    Student save(Student stu);
    Boolean existsByEmail(String email);

    Optional<Student> findByEmail(String email);
    Optional<Student> findById(UUID id);
}

