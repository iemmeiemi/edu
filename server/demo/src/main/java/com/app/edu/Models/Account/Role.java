package com.app.edu.Models.Account;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String name;

    // Role có nhiều quyền
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "role_rights",
            joinColumns = @JoinColumn(name = "role_id"),
            inverseJoinColumns = @JoinColumn(name = "right_id")
    )
    private Set<Right> rights = new HashSet<>();

    public Role() {}

    public Role(String name) {
        this.name = name;
    }

    public Role(String name, Set<Right> rights) {
        this.name = name;
        this.rights = rights;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Set<Right> getRights() {
        return rights;
    }

    public void setRights(Set<Right> rights) {
        this.rights = rights;
    }
}
