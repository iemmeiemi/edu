package com.app.edu.Repositories;

import com.app.edu.Models.HomeRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;


public interface HomeroomRepository extends JpaRepository<HomeRoom, UUID> {

    HomeRoom save(HomeRoom stu);
    Boolean existsByName(String name);
//    Optional<HomeRoom> findByEmail(String email);

    Optional<HomeRoom> findById(UUID id);
    Optional<HomeRoom> findByNameLike(String name);
}