package com.example.hotelresort.service;

import com.example.hotelresort.model.RestaurantOrder;
import com.example.hotelresort.repository.RestaurantOrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantOrderService {

    private final RestaurantOrderRepository orderRepository;

    public RestaurantOrderService(RestaurantOrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<RestaurantOrder> getAllOrders() {
        return orderRepository.findAll();
    }

    public List<RestaurantOrder> getOrdersByUserId(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    public RestaurantOrder createOrder(RestaurantOrder order) {
        return orderRepository.save(order);
    }
}
