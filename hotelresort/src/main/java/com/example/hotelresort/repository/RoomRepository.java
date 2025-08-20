package com.example.hotelresort.repository;

import com.example.hotelresort.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
