package com.app.edu.dtos.HomeRoom;

import jakarta.validation.constraints.NotBlank;

import java.util.UUID;

public class CreateHomeRoomRequest {
    @NotBlank(message = "Name is required")
    private String name;
    private String description;
    private String email;

    public CreateHomeRoomRequest() {
    }

    public CreateHomeRoomRequest(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public CreateHomeRoomRequest(String name, String description, String accId) {
        this.name = name;
        this.description = description;
        this.email = accId;
    }

    public @NotBlank(message = "Name is required") String getName() {
        return name;
    }

    public void setName(@NotBlank(message = "Name is required") String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
