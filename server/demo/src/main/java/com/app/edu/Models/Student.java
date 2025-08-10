package com.app.edu.Models;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "students")
public class Student {

    @Id
    private UUID student_id;

    @Column(unique = true, nullable = false)
    private String email;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "homeroom_id", nullable = true)
    private HomeRoom homeroom;

    public Student() {
    }

    public Student(UUID student_Id, String email) {
        this.student_id = student_Id;
        this.email = email;
    }

    public Student(UUID student_id, String email, HomeRoom homeroom) {
        this.student_id = student_id;
        this.email = email;
        this.homeroom = homeroom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public UUID getStudent_id() {
        return student_id;
    }

    public void setStudent_id(UUID student_id) {
        this.student_id = student_id;
    }

    public HomeRoom getHomeroom() {
        return homeroom;
    }

    public void setHomeroom(HomeRoom homeroom) {
        this.homeroom = homeroom;
    }
}
