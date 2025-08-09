package com.app.edu.Repositories;


import com.app.edu.Models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role save(Role role);

    Optional<Role> findByName(String name);
}
