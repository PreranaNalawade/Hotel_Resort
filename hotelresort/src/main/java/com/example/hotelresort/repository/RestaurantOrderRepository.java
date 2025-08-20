package com.example.hotelresort.repository;

import com.example.hotelresort.model.RestaurantOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RestaurantOrderRepository extends JpaRepository<RestaurantOrder, Long> {
    List<RestaurantOrder> findByUserId(Long userId);
}
