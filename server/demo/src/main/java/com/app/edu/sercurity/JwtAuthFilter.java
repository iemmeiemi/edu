package com.app.edu.sercurity;

import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.function.HandlerFilterFunction;
import org.springframework.web.servlet.function.HandlerFunction;
import org.springframework.web.servlet.function.ServerRequest;
import org.springframework.web.servlet.function.ServerResponse;

import java.util.List;

public class JwtAuthFilter implements HandlerFilterFunction<ServerResponse, ServerResponse> {

    private final JwtUtils jwtUtils;

    public JwtAuthFilter(JwtUtils jwtUtils) {
        this.jwtUtils = jwtUtils;
    }

    @Override
    public ServerResponse filter(ServerRequest request, HandlerFunction<ServerResponse> next) {
        try {
            String authHeader = request.headers().firstHeader("Authorization");
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                return ServerResponse.status(HttpStatus.UNAUTHORIZED).build();
            }
            String token = authHeader.substring(7);

            if (!jwtUtils.isTokenValid(token)) {
                return ServerResponse.status(HttpStatus.UNAUTHORIZED).build();
            }
            return next.handle(request);
        } catch (Exception e) {
            return ServerResponse.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    public HandlerFilterFunction<ServerResponse, ServerResponse> authorize(String requiredRole) {
        return (request, next) -> {
            try {
                String authHeader = request.headers().firstHeader("Authorization");
                if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                    return ServerResponse.status(HttpStatus.UNAUTHORIZED).build();
                }
                String token = authHeader.substring(7);

                if (!jwtUtils.isTokenValid(token)) {
                    return ServerResponse.status(HttpStatus.UNAUTHORIZED).build();
                }

                List<String> roles = jwtUtils.extractRoles(token);

                if (!roles.contains(requiredRole)) {
                    return ServerResponse.status(HttpStatus.FORBIDDEN).build();
                }
                return next.handle(request);
            } catch (Exception e) {
                return ServerResponse.status(HttpStatus.UNAUTHORIZED).build();
            }
        };
    }


}
