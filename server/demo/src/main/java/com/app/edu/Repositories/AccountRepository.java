package com.app.edu.Repositories;

import com.app.edu.Models.Account;
import org.springframework.data.repository.Repository;

import java.util.Optional;


public interface AccountRepository extends Repository<Account, Long> {

    Account save(Account acc);
    Boolean existsByEmail(String email);

    Optional<Account> findByEmail(String email);

//    Optional<Account> findById(long id);
}
