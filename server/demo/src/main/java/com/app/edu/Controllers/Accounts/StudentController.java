package com.app.edu.Controllers.Accounts;

import com.app.edu.Services.StudentManagementService.StudentServices;
import com.app.edu.Utils.pagination;
import com.app.edu.dtos.ApiResponseDto;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.function.ServerRequest;
import org.springframework.web.servlet.function.ServerResponse;

@Controller
public class StudentController {
    private final StudentServices studentServices;

    public StudentController(StudentServices studentServices) {
        this.studentServices = studentServices;
    }


    public ServerResponse getAllStudents(ServerRequest req) {
        try {
            return ServerResponse.ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(new ApiResponseDto( "Sucessfully",
                            studentServices.getAllStudents(pagination.definePageable(req))));
        } catch (Exception e) {
            return ServerResponse.status(400) //?
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(new ApiResponseDto( e.getMessage()));
        }
    }
}
