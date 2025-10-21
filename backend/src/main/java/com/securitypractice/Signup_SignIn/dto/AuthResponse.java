package com.securitypractice.Signup_SignIn.dto;

public record AuthResponse(
        String accessToken,
        String tokenType,
        long expiresInSecondes
) {
}
