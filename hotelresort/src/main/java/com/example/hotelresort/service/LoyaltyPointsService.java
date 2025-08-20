package com.example.hotelresort.service;

import com.example.hotelresort.model.LoyaltyPoints;
import com.example.hotelresort.repository.LoyaltyPointsRepository;
import org.springframework.stereotype.Service;

@Service
public class LoyaltyPointsService {

    private final LoyaltyPointsRepository pointsRepository;

    public LoyaltyPointsService(LoyaltyPointsRepository pointsRepository) {
        this.pointsRepository = pointsRepository;
    }

    public LoyaltyPoints getPointsByUserId(Long userId) {
        return pointsRepository.findByUserId(userId);
    }

    public LoyaltyPoints addOrUpdatePoints(LoyaltyPoints points) {
        return pointsRepository.save(points);
    }
}
