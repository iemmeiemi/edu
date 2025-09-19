package com.app.edu.Services.HomeRoomManagementService;

import com.app.edu.Models.Account.Account;
import com.app.edu.Models.HomeRoom;
import com.app.edu.Repositories.AccountRepository;
import com.app.edu.Repositories.HomeroomRepository;
import com.app.edu.dtos.HomeRoom.CreateHomeRoomRequest;
import com.app.edu.dtos.HomeRoom.CreateHomeRoomResponse;
import com.app.edu.mapper.HomeRoomMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeRoomServices {

    private final HomeroomRepository homeroomRepository;
    private final AccountRepository accRepository;

    private final HomeRoomMapper homeRoomMapper;

    public HomeRoomServices(HomeroomRepository homeroomRepository, AccountRepository accRepository, HomeRoomMapper HomeRoomMapper) {
        this.homeroomRepository = homeroomRepository;
        this.accRepository = accRepository;
        this.homeRoomMapper = HomeRoomMapper;
    }


    public CreateHomeRoomResponse createHomeRoom(CreateHomeRoomRequest request) throws Exception {
        Account account = accRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new Exception("Invalid account"));
        HomeRoom hr = homeroomRepository.save(new HomeRoom(request.getName(), request.getDescription(), account));
        return homeRoomMapper.toDTO(hr);
    }

    public List<HomeRoom> getAll(Pageable page) {
        Page<HomeRoom> homeRooms = homeroomRepository.findAll(page);
        return homeRooms.getContent();
    }
}
