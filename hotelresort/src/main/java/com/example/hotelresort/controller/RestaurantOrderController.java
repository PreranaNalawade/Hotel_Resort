package com.example.hotelresort.controller;

import com.example.hotelresort.model.RestaurantOrder;
import com.example.hotelresort.service.RestaurantOrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:4200") 
public class RestaurantOrderController {

    private final RestaurantOrderService orderService;

    public RestaurantOrderController(RestaurantOrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<RestaurantOrder> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/user/{userId}")
    public List<RestaurantOrder> getOrdersByUser(@PathVariable Long userId) {
        return orderService.getOrdersByUserId(userId);
    }

    @PostMapping
    public RestaurantOrder createOrder(@RequestBody RestaurantOrder order) {
        return orderService.createOrder(order);
    }
}
