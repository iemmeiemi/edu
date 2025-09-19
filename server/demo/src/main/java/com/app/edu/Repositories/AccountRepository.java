package com.app.edu.Repositories;

import com.app.edu.Models.Account.Account;
import org.springframework.data.repository.Repository;

import java.util.Optional;
import java.util.UUID;


public interface AccountRepository extends Repository<Account, UUID> {

    Account save(Account acc);
    Boolean existsByEmail(String email);


    Optional<Account> findByEmail(String email);

//    Optional<Account> findById(long id);
}
