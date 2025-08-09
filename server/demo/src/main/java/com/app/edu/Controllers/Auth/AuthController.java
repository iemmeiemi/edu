package com.app.edu.Controllers.Auth;


import com.app.edu.Services.Auth.AuthService;
import com.app.edu.dtos.ApiResponseDto;
import com.app.edu.dtos.Auth.CreateAccountRequest;
import com.app.edu.dtos.Auth.LoginEmailRequest;
import com.app.edu.dtos.RequestValidator;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.function.ServerRequest;
import org.springframework.web.servlet.function.ServerResponse;

@Component
public class AuthController {
    private final RequestValidator requestValidator;
    private final AuthService services;

    public AuthController(RequestValidator validator, AuthService services) {
        this.requestValidator = validator;
        this.services = services;
    }

    public ServerResponse createAccount(ServerRequest request) {
        try {
            CreateAccountRequest acc = request.body(CreateAccountRequest.class);
            requestValidator.validate(acc);

            return ServerResponse.ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(new ApiResponseDto( "Sucessfully Register" , services.createAccountService(acc)));
        } catch (Exception e) {
            return ServerResponse.status(HttpStatus.UNAUTHORIZED)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(new ApiResponseDto( e.getMessage(), null));
        }
    }

    public ServerResponse loginByEmailAndPass(ServerRequest request) {
        try {
            LoginEmailRequest acc = request.body(LoginEmailRequest.class);
            requestValidator.validate(acc);
            return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(services.loginWithEmail(acc));
        } catch (Exception e) {
            return ServerResponse.status(HttpStatus.UNAUTHORIZED)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(new ApiResponseDto( e.getMessage(), null));
        }
    }

//    public ServerResponse loginAccount(ServerRequest request) {
//        try {
//            LoginAccountRequest req = request.body(LoginAccountRequest.class);
//            Map<String, String> tokens = services.login(req.getEmail(), req.getPass());
//            requestValidator.validate(req);
//            return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(tokens);
//        } catch (Exception e) {
//            return ServerResponse.status(HttpStatus.UNAUTHORIZED)
//                    .contentType(MediaType.APPLICATION_JSON)
//                    .body(new ApiResponseDto( e.getMessage(), null));
//        }
//    }

//    public ServerResponse refreshToken(ServerRequest request) {
//        try {
//            RefreshAccessTokenRequest req = request.body(RefreshAccessTokenRequest.class);
//            String accessToken = services.refreshAccessToken(req.getRefreshToken());
//            return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(new ApiResponseDto("Refreshed", accessToken));
//        } catch (Exception e) {
//            return ServerResponse.status(HttpStatus.UNAUTHORIZED)
//                    .contentType(MediaType.APPLICATION_JSON)
//                    .body(new ApiResponseDto( e.getMessage(), null));
//        }
//    }


}
