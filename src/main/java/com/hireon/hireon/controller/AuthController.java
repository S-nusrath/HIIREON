package com.hireon.hireon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hireon.hireon.dto.LoginRequest;
import com.hireon.hireon.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        return userService.login(
                request.getEmail(),
                request.getPassword(),
                request.getRole()
        );
    }
}