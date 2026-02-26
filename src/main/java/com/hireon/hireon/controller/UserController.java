
// package com.hireon.hireon.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.hireon.hireon.entity.User;
// import com.hireon.hireon.service.UserService;

// import java.util.List;
// import java.util.Map;

// @RestController
// @RequestMapping("/api/users")
// @CrossOrigin
// public class UserController {

//     @Autowired
//     private UserService userService;

//     // ✅ REGISTER
//     @PostMapping("/register")
//     public ResponseEntity<?> register(@RequestBody User user) {
//         try {
//             User savedUser = userService.register(user);
//             return ResponseEntity.ok(savedUser);
//         } catch (RuntimeException e) {
//             return ResponseEntity.status(HttpStatus.CONFLICT)
//                     .body(Map.of("message", "Account already exists"));
//         }
//     }
//     @GetMapping("/all")
//     public List<User> getAllUsers() {
//         return userService.getAllUsers();
//     }
//     // ✅ GET USER BY ID
// @GetMapping("/{id}")
// public ResponseEntity<User> getUserById(@PathVariable Long id) {
//     User user = userService.getUserById(id);
//     return ResponseEntity.ok(user);
// }
// }

package com.hireon.hireon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;

import com.hireon.hireon.entity.User;
import com.hireon.hireon.service.UserService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    // ✅ REGISTER
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            User savedUser = userService.register(user);
            return ResponseEntity.ok(savedUser);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Map.of("message", "Account already exists"));
        }
    }

    // ✅ LOGIN (if you're still using this endpoint)
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        try {
            User user = userService.login(
                    loginRequest.getEmail(),
                    loginRequest.getPassword()
            );
            return ResponseEntity.ok(user);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", e.getMessage()));
        }
    }

    // ✅ GET ALL USERS
    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // ✅ GET USER BY ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    // ✅ GET CURRENT LOGGED-IN USER (JWT BASED)
    @GetMapping("/me")
    public ResponseEntity<User> getCurrentUser(Authentication authentication) {

        String email = authentication.getName();

        User user = userService.getUserByEmail(email);

        return ResponseEntity.ok(user);
    }
}