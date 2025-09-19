package com.app.edu.Utils;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.servlet.function.ServerRequest;

public class pagination {

    public static Pageable definePageable(ServerRequest request) {
        Sort sort;

        int page = Integer.parseInt(request.param("page").orElse("0"));
        int size = Integer.parseInt(request.param("size").orElse("20"));
        String by = request.param("by").orElse(null);

        if (by == null || by.isEmpty()) {
            return PageRequest.of(page, size);
        }

        String direction = request.param("direction").orElse("asc");

        if (direction.equalsIgnoreCase("desc")) {
            sort = Sort.by(Sort.Direction.DESC, by);
        } else {
            sort = Sort.by(Sort.Direction.ASC, by);
        }

        return PageRequest.of(page, size, sort);
    }
}
