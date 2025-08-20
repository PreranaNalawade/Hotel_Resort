package com.example.hotelresort.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "restaurant_orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RestaurantOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String tableNumber;

    @Column(columnDefinition = "TEXT")
    private String orderItems; // JSON format

    private Double totalAmount;

    private String status = "PENDING";

    private LocalDateTime createdAt = LocalDateTime.now();
}
