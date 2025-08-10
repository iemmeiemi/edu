package com.app.edu.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "homerooms")
public class HomeRoom {
    //lớp sinh hoạt
    @Id
    @GeneratedValue
    @Column(name = "homeroom_id", updatable = false, nullable = false)
    private UUID homeroom_id;
    private String name;
    private String description;

    @ManyToMany(mappedBy = "homerooms") // inverse side
    private List<Teacher> teachers = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "homeroom", cascade = CascadeType.ALL, orphanRemoval = false)
    private List<Student> students = new ArrayList<>();

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id", nullable = false)
    private Account acc;

    @Column(name = "inactivate_at")
    private LocalDateTime inactivateAt;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    public HomeRoom() {
    }

    public HomeRoom(String name, String description, Account acc) {
        this.name = name;
        this.description = description;
        this.acc = acc;
    }

    public HomeRoom(UUID homeroom_id, String name, String description, List<Teacher> teachers, List<Student> students, Account accId, LocalDateTime createdAt) {
        this.homeroom_id = homeroom_id;
        this.name = name;
        this.description = description;
        this.teachers = teachers;
        this.students = students;
        this.acc = accId;
        this.createdAt = createdAt;
    }

    public UUID getHomeroom_id() {
        return homeroom_id;
    }

    public void setHomeroom_id(UUID homeroom_id) {
        this.homeroom_id = homeroom_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Teacher> getTeachers() {
        return teachers;
    }

    public void setTeachers(List<Teacher> teachers) {
        this.teachers = teachers;
    }

    public LocalDateTime getInactivateAt() {
        return inactivateAt;
    }

    public void setInactivateAt(LocalDateTime inactivateAt) {
        this.inactivateAt = inactivateAt;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Account getAcc() {
        return acc;
    }

    public void setAcc(Account acc) {
        this.acc = acc;
    }
}
