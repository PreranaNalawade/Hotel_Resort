package com.example.hotelresort.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "rooms")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 10)
    private String roomNumber;

    @Column(nullable = false, length = 50)
    private String type;

    @Column(nullable = false)
    private Double pricePerNight;

    @Column(nullable = false)
    private Integer maxGuests;

    @Column(columnDefinition = "TEXT")
    private String description;

    private Boolean available = true;
}
