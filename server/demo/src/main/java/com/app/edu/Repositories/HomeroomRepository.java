package com.app.edu.Repositories;

import com.app.edu.Models.Account;
import com.app.edu.Models.HomeRoom;
import com.app.edu.Models.Student;
import com.app.edu.Models.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.Repository;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


public interface HomeroomRepository extends JpaRepository<HomeRoom, UUID> {

    HomeRoom save(HomeRoom stu);
    Boolean existsByName(String name);
//    Optional<HomeRoom> findByEmail(String email);

    Optional<HomeRoom> findById(UUID id);
    Optional<HomeRoom> findByNameLike(String name);
}