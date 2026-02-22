// package com.hireon.hireon.controller;

// import com.hireon.hireon.dto.LoginRequest;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/api/auth")
// public class AuthController {

//     @PostMapping("/login")
//     public String login(@RequestBody LoginRequest request) {

//         System.out.println(request.getEmail());
//         System.out.println(request.getPassword());
//          System.out.println("Role: " + request.getRole());

//         return "Login Success";
//     }
// }

package com.hireon.hireon.controller;

import com.hireon.hireon.dto.LoginRequest;
import com.hireon.hireon.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
}