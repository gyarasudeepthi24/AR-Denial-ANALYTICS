package com.example.ardenialanalytics;

// JPA imports
// BigDecimal and LocalDate imports
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
@Entity
public class Claim {

    // Primary key: id

    // Fields required by PDF:
    // payer
    // provider
    // cptCode
    // billedAmount
    // denialReason
    // deniedAt
    // status

    // No-argument constructor

    // Getters and setters for all fields
}
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;