package com.app.edu.Repositories;

import com.app.edu.Models.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


public interface StudentRepository extends JpaRepository<Student, UUID> {

    Student save(Student stu);
    Boolean existsByEmail(String email);

    Optional<Student> findByEmail(String email);
    Optional<Student> findById(UUID id);

    @Modifying
    @Query("UPDATE MyEntity e SET e.status = :status WHERE e.id IN :ids")
    void studentListUpdate(@Param("status") String status, @Param("ids") List<UUID> ids);

}

