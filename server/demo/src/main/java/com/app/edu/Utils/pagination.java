package com.app.edu.Utils;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public class pagination {

    public static Pageable definePageable(int page, int size, String by, String direction) {
        Sort sort;

        if (by == null || by.isEmpty()) {
            return PageRequest.of(page, size);
        }

        if (direction == null || direction.isEmpty()) {
            direction = "asc";
        }

        if (direction.equalsIgnoreCase("desc")) {
            sort = Sort.by(Sort.Direction.DESC, by);
        } else {
            sort = Sort.by(Sort.Direction.ASC, by);
        }

        return PageRequest.of(page, size, sort);
    }

    public static Pageable definePageable(int page, int size, String by) {
        return definePageable(page, size, by, "asc");
    }
}
