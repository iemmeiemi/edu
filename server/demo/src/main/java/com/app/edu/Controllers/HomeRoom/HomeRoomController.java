package com.app.edu.Controllers.HomeRoom;

import com.app.edu.Services.Auth.AuthService;
import com.app.edu.Services.HomeRoomManagementService.HomeRoomServices;
import com.app.edu.dtos.ApiResponseDto;
import com.app.edu.dtos.HomeRoom.CreateHomeRoomRequest;
import com.app.edu.dtos.RequestValidator;
import com.app.edu.sercurity.JwtUtils;
import jakarta.servlet.ServletException;
import org.apache.catalina.Server;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.function.ServerRequest;
import org.springframework.web.servlet.function.ServerResponse;

import java.io.IOException;

@Controller
public class HomeRoomController {
    private final RequestValidator requestValidator;
    private final HomeRoomServices services;
    private final JwtUtils jwtUtils;

    public HomeRoomController(RequestValidator requestValidator, HomeRoomServices services, JwtUtils jwtUtils) {
        this.requestValidator = requestValidator;
        this.services = services;
        this.jwtUtils = jwtUtils;
    }

    public ServerResponse createHomeRoom(ServerRequest req) throws Exception {
        String token = req.headers().firstHeader("Authorization").substring(7);
        String email = jwtUtils.extractEmail(token);
        CreateHomeRoomRequest request = req.body(CreateHomeRoomRequest.class);
        request.setEmail(email);
        requestValidator.validate(request);
        return ServerResponse.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(new ApiResponseDto( "Sucessfully Register", services.createHomeRoom(request)));
    }

    public ServerResponse getAll(ServerRequest req) {
        try {
            int page = Integer.parseInt(req.param("page").orElse("0"));
            int size = Integer.parseInt(req.param("size").orElse("10"));
            String by = req.param("by").orElse(null);
            String direction = req.param("direction").orElse("asc");


            return ServerResponse.ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(new ApiResponseDto( "Sucessfully Register",
                            services.getAll(page, size, by, direction)));
        } catch (Exception e) {
            return ServerResponse.status(400) //?
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(new ApiResponseDto( e.getMessage()));
        }
    }
}
