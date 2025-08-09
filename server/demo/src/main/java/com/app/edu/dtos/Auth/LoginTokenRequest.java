package com.app.edu.dtos.Auth;

public class LoginTokenRequest {
    String accessToken;
    String refreshToken;
    String email;

    public LoginTokenRequest() {
    }

    public LoginTokenRequest(String email, String refreshToken, String accessToken) {
        this.email = email;
        this.refreshToken = refreshToken;
        this.accessToken = accessToken;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
