package com.app.edu.Services.StudentManagementService;

import com.app.edu.Models.HomeRoom;
import com.app.edu.Models.Student;
import com.app.edu.Repositories.StudentRepository;
import com.app.edu.Utils.pagination;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServices {

    private final StudentRepository studentRepository;

    public StudentServices(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }


    public List<Student> getAllStudents(Pageable page) {
        Page<Student> students = studentRepository.findAll(page);
        return students.getContent();
    }

    public List<Student> updateStudents(String fields, String value, List<UUID> studentIds) {
        List<Student> st = studentRepository.
    }
}
