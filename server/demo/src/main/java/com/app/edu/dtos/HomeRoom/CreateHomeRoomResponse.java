package com.app.edu.dtos.HomeRoom;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;
import java.util.UUID;

public class CreateHomeRoomResponse {
    private UUID homeroom_id;
    private String name;
    private String description;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    public CreateHomeRoomResponse() {
    }

    public CreateHomeRoomResponse(UUID homeroom_id, String name, String description, LocalDateTime createdAt) {
        this.homeroom_id = homeroom_id;
        this.name = name;
        this.description = description;
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

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
