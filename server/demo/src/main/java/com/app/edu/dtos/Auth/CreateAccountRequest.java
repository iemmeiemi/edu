package com.app.edu.dtos.Auth;

import com.app.edu.Models.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

import java.util.Set;

public class CreateAccountRequest {
    @NotBlank(message = "First Name is required")
    private String firstName;
    @NotBlank(message = "Last Name is required")
    private String lastName;
    @Size(min = 6, message = "Password must be at least 6 characters")
    String pass;
    @Email(message = "Email is invalid")
    String email;
    @NotEmpty
    Set<String> roles;

    public CreateAccountRequest() {
    }

    public CreateAccountRequest(String firstName, String lastName, String pass, String email, Set<String> roles) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.pass = pass;
        this.email = email;
        this.roles = roles;
    }

    public @NotBlank(message = "First Name is required") String getFirstName() {
        return firstName;
    }

    public void setFirstName(@NotBlank(message = "First Name is required") String firstName) {
        this.firstName = firstName;
    }

    public @NotBlank(message = "Last Name is required") String getLastName() {
        return lastName;
    }

    public void setLastName(@NotBlank(message = "Last Name is required") String lastName) {
        this.lastName = lastName;
    }

    public @Size(min = 6, message = "Password must be at least 6 characters") String getPass() {
        return pass;
    }

    public void setPass(@Size(min = 6, message = "Password must be at least 6 characters") String pass) {
        this.pass = pass;
    }

    public @Email(message = "Email is invalid") String getEmail() {
        return email;
    }

    public void setEmail(@Email(message = "Email is invalid") String email) {
        this.email = email;
    }

    public @NotEmpty Set<String> getRoles() {
        return roles;
    }

    public void setRoles(@NotEmpty Set<String> roles) {
        this.roles = roles;
    }
}
