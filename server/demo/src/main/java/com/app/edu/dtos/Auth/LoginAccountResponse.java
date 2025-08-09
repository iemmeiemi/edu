package com.app.edu.dtos.Auth;

import jakarta.validation.constraints.NotBlank;

public class LoginAccountResponse {
    @NotBlank(message = "AToken is required")
    String accessToken;
    @NotBlank(message = "RToken is required")
    String refreshToken;

    public LoginAccountResponse() {
    }

    public LoginAccountResponse(String accessToken, String refreshToken) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }

    public @NotBlank(message = "AToken is required") String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(@NotBlank(message = "AToken is required") String accessToken) {
        this.accessToken = accessToken;
    }

    public @NotBlank(message = "RToken is required") String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(@NotBlank(message = "RToken is required") String refreshToken) {
        this.refreshToken = refreshToken;
    }
}
