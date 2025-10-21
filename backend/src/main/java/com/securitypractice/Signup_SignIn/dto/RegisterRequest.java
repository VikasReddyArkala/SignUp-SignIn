package com.securitypractice.Signup_SignIn.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RegisterRequest(
        @NotBlank String firstname,
        @NotBlank String lastname,
        @NotBlank String dob,
        @NotBlank String gender,
        @NotBlank @Email String email,
        @Size(min = 8) String password
) {
}
