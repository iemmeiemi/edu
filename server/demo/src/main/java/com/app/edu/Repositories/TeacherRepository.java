package com.app.edu.Repositories;

import com.app.edu.Models.Teacher;
import org.springframework.data.repository.Repository;
import java.util.Optional;
import java.util.UUID;


public interface TeacherRepository extends Repository<Teacher, UUID> {

    Teacher save(Teacher stu);
    Boolean existsByEmail(String email);

    Optional<Teacher> findByEmail(String email);

}

