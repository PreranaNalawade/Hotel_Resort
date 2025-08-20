package com.example.hotelresort.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "housekeeping")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Housekeeping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "room_id", nullable = false)
    private Room room;

    @ManyToOne
    @JoinColumn(name = "staff_id", nullable = false)
    private User staff;

    @Column(columnDefinition = "TEXT")
    private String taskDescription;

    private String status = "PENDING";

    private LocalDate date = LocalDate.now();
}
