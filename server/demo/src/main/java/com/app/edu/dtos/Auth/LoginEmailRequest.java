package com.app.edu.dtos.Auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public class LoginEmailRequest {
    @Size(min = 6, message = "Password must be at least 6 characters")
    String pass;
    @Email(message = "Email is invalid")
    String email;

    public LoginEmailRequest() {
    }

    public LoginEmailRequest(String pass, String email) {
        this.pass = pass;
        this.email = email;
    }

    public void setPass(@Size(min = 6, message = "Password must be at least 6 characters") String pass) {
        this.pass = pass;
    }

    public @Size(min = 6, message = "Password must be at least 6 characters") String getPass() {
        return pass;
    }

    public @Email(message = "Email is invalid") String getEmail() {
        return email;
    }

    public void setEmail(@Email(message = "Email is invalid") String email) {
        this.email = email;
    }
}
