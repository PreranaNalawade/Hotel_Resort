package com.example.hotelresort.repository;

import com.example.hotelresort.model.LoyaltyPoints;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoyaltyPointsRepository extends JpaRepository<LoyaltyPoints, Long> {
    LoyaltyPoints findByUserId(Long userId);
}
