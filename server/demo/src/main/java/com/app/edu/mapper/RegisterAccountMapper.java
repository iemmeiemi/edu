package com.app.edu.mapper;


import com.app.edu.Models.Account;
import com.app.edu.dtos.Auth.CreateAccountRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring") // Để Spring quản lý
public interface RegisterAccountMapper {
    RegisterAccountMapper INSTANCE = Mappers.getMapper(RegisterAccountMapper.class);

    // Nếu muốn bỏ qua trường id khi mapping
    @Mapping(target = "accId", ignore = true)
    @Mapping(target = "roles", ignore = true)
    @Mapping(target = "enabled", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "deletedAt", ignore = true)
    @Mapping(target = "refreshToken", ignore = true)
    Account toEntity(CreateAccountRequest dto);
}
