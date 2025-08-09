package com.app.edu.dtos.Auth;


public class RefreshAccessTokenRequest {
    String refreshToken;

    public RefreshAccessTokenRequest(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public RefreshAccessTokenRequest() {
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }
}
