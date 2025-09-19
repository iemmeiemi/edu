package com.app.edu.Controllers;

import com.app.edu.Controllers.Auth.AuthController;
import com.app.edu.Controllers.HomeRoom.HomeRoomController;
import com.app.edu.Controllers.Accounts.StudentController;
import com.app.edu.sercurity.JwtAuthFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.function.RouterFunction;
import org.springframework.web.servlet.function.RouterFunctions;
import org.springframework.web.servlet.function.ServerResponse;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.web.servlet.function.RequestPredicates.accept;

@Configuration
public class Routers {

    private JwtAuthFilter authFilter;

    public Routers(JwtAuthFilter authFilter) {
        this.authFilter = authFilter;
    }

    @Bean
    public RouterFunction<ServerResponse> authRoute(AuthController handler)  { //PersonRepository repository

        return RouterFunctions.route()
                .path("/api/auth", builder -> builder
                    .POST("/login", handler::loginWithEmailAndPass)
    //                .GET("/person/{id}", accept(APPLICATION_JSON), handler::getPerson)
                    .GET("/refresh", handler::refreshToken)
                    .POST("/register",
                            accept(APPLICATION_JSON), handler::createAccount)
                )
                .build();
    }

    @Bean
    public RouterFunction<ServerResponse> homeRoomRoutes (HomeRoomController homeroomHandler) {
        return RouterFunctions.route()
                .path("/api/homeroom", builder -> builder
                    .POST("/create", accept(MediaType.APPLICATION_JSON), homeroomHandler::createHomeRoom)
                        .filter(authFilter.authorize("EDU_STAFF"))
                    .GET("/get-all", homeroomHandler::getAll)
                        .filter(authFilter.authorize("EDU_STAFF"))
                )
                .build();
    }

    @Bean
    public RouterFunction<ServerResponse> studentRoutes (StudentController studentControllerHandler) {
        return RouterFunctions.route()
                .path("/api/student", builder -> builder
                        .GET("/get-all", studentControllerHandler::getAllStudents)
//                        .filter(authFilter.authorize("EDU_STAFF"))
//                        .GET("/get-all", studentControllerHandler::getAll)
//                        .filter(authFilter.authorize("EDU_STAFF"))
                )
                .build();
    }
}
