package com.example.hotelresort.controller;

import com.example.hotelresort.model.Housekeeping;
import com.example.hotelresort.service.HousekeepingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/housekeeping")
@CrossOrigin(origins = "http://localhost:4200") 
public class HousekeepingController {

    private final HousekeepingService housekeepingService;

    public HousekeepingController(HousekeepingService housekeepingService) {
        this.housekeepingService = housekeepingService;
    }

    @GetMapping
    public List<Housekeeping> getAllTasks() {
        return housekeepingService.getAllTasks();
    }

    @PostMapping
    public Housekeeping createTask(@RequestBody Housekeeping task) {
        return housekeepingService.createTask(task);
    }
}
