package com.example.hotelresort.service;

import com.example.hotelresort.model.Housekeeping;
import com.example.hotelresort.repository.HousekeepingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HousekeepingService {

    private final HousekeepingRepository housekeepingRepository;

    public HousekeepingService(HousekeepingRepository housekeepingRepository) {
        this.housekeepingRepository = housekeepingRepository;
    }

    public List<Housekeeping> getAllTasks() {
        return housekeepingRepository.findAll();
    }

    public Housekeeping createTask(Housekeeping task) {
        return housekeepingRepository.save(task);
    }
}
