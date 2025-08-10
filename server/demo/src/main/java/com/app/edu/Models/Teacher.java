package com.app.edu.Models;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "teachers")
public class Teacher {
    @Id
    private UUID teacher_id;

    @Column(unique = true, nullable = false)
    private String email;

    @ManyToMany
    @JoinTable(
            name = "teacher_homeroom",
            joinColumns = @JoinColumn(name = "teacher_id"),
            inverseJoinColumns = @JoinColumn(name = "homeroom_id")
    )
    private List<HomeRoom> homerooms = new ArrayList<>();

    public Teacher() {
    }


    public Teacher(UUID teacher_id, String email) {
        this.teacher_id = teacher_id;
        this.email = email;
    }

    public Teacher(UUID teacher_id, String email, List<HomeRoom> homeRooms) {
        this.teacher_id = teacher_id;
        this.email = email;
        this.homerooms = homeRooms;
    }

    public UUID getTeacher_id() {
        return teacher_id;
    }

    public void setTeacher_id(UUID teacher_id) {
        this.teacher_id = teacher_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<HomeRoom> getHomerooms() {
        return homerooms;
    }

    public void setHomerooms(List<HomeRoom> homerooms) {
        this.homerooms = homerooms;
    }

}
