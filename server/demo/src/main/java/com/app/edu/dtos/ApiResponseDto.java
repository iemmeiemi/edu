package com.app.edu.dtos;

public class ApiResponseDto<T> {
    private String message;
    private T response;

    public ApiResponseDto() {
    }

    public ApiResponseDto(String message) {
        this.message = message;
    }

    public ApiResponseDto(String message, T response) {
        this.message = message;
        this.response = response;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getResponse() {
        return response;
    }

    public void setResponse(T response) {
        this.response = response;
    }

    @Override
    public String toString() {
        return "ApiResponseDto{" +
                "message='" + message + '\'' +
                ", response=" + response +
                '}';
    }
}
