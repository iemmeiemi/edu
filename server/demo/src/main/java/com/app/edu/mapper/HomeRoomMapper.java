package com.app.edu.mapper;

import com.app.edu.Models.HomeRoom;
import com.app.edu.dtos.HomeRoom.CreateHomeRoomRequest;
import com.app.edu.dtos.HomeRoom.CreateHomeRoomResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface HomeRoomMapper {
    HomeRoom INSTANCE = Mappers.getMapper(HomeRoom.class);

    @Mapping(target = "homeroom_id", ignore = true)
    @Mapping(target = "teachers", ignore = true)
    @Mapping(target = "students", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "inactivateAt", ignore = true)
    HomeRoom toEntity(CreateHomeRoomRequest dto);

    CreateHomeRoomResponse toDTO(HomeRoom ent);
}
