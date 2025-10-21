package com.securitypractice.Signup_SignIn.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.Instant;
import java.util.Date;

@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String firstname;

    @Column(nullable = false)
    private String lastname;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    @Size(min = 8)
    private String password;

    @Column(nullable = false)
    private Date dob;

    @Column(nullable = false)
    private String gender;

    @Column(nullable = false, length = 120)
    private String roles = "ROLE_USER";

    @Column(nullable = false)
    private boolean enabled = true;

    @Column(nullable = false, updatable = false)
    private Instant createdAt = Instant.now();

    @Column(nullable = false)
    private  Instant updatedAt = Instant.now();

    @PrePersist
    void onCreate() {
        normalize();
        this.createdAt = Instant.now();
        this.updatedAt = this.createdAt;
    }

    @PreUpdate
    void onUpdate() {
        normalize();
        this.updatedAt = Instant.now();
    }

    private void normalize() {
        if (this.firstname != null) this.firstname = this.firstname.trim().toLowerCase();
        if (this.email != null) this.email = this.email.trim().toLowerCase();
        if (this.roles != null) this.roles = this.roles.trim();
    }

}
