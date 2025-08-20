package com.example.hotelresort.controller;

import com.example.hotelresort.model.LoyaltyPoints;
import com.example.hotelresort.service.LoyaltyPointsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/loyalty")
@CrossOrigin(origins = "http://localhost:4200") 
public class LoyaltyPointsController {

    private final LoyaltyPointsService pointsService;

    public LoyaltyPointsController(LoyaltyPointsService pointsService) {
        this.pointsService = pointsService;
    }

    @GetMapping("/user/{userId}")
    public LoyaltyPoints getPoints(@PathVariable Long userId) {
        return pointsService.getPointsByUserId(userId);
    }

    @PostMapping
    public LoyaltyPoints addOrUpdatePoints(@RequestBody LoyaltyPoints points) {
        return pointsService.addOrUpdatePoints(points);
    }
}
