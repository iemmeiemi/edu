package com.app.edu.Controllers.Auth;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.function.RouterFunction;
import org.springframework.web.servlet.function.RouterFunctions;
import org.springframework.web.servlet.function.ServerResponse;

import static org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.web.servlet.function.RequestPredicates.accept;
import static org.springframework.web.servlet.function.RequestPredicates.contentType;

@Configuration
public class AuthRouter {
    @Bean
    public RouterFunction<ServerResponse> route(AuthController handler) { //PersonRepository repository

        return RouterFunctions.route()
                .POST("/api/auth/login", handler::loginByEmailAndPass)
//                .GET("/person/{id}", accept(APPLICATION_JSON), handler::getPerson)
//                .GET("/api/auth/refresh", accept(APPLICATION_JSON), handler::refreshToken)
                .POST("/api/auth/register",
                        accept(APPLICATION_JSON), handler::createAccount)
                .build();
    }

//    @Bean
//    public RouterFunction<ServerResponse> securedRoutes(AuthFilter authFilter, AuthHandler authHandler) {
//        return RouterFunctions.route()
//                .GET("/api/protected", accept(MediaType.APPLICATION_JSON), authHandler::protectedEndpoint)
//                .filter(authFilter)
//                .build();
//    }
}
