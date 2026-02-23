

package com.hireon.hireon.controller;

import com.hireon.hireon.dto.LoginRequest;
import com.hireon.hireon.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;
@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody LoginRequest request) {

    try {
        Map<String, String> result = authService.login(request);
        return ResponseEntity.ok(result);

    } catch (RuntimeException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(Map.of("message", e.getMessage()));
    }
}
}


















// // package com.hireon.hireon.controller;

// // import com.hireon.hireon.dto.LoginRequest;
// // import org.springframework.web.bind.annotation.*;

// // @RestController
// // @RequestMapping("/api/auth")
// // public class AuthController {

// //     @PostMapping("/login")
// //     public String login(@RequestBody LoginRequest request) {

// //         System.out.println(request.getEmail());
// //         System.out.println(request.getPassword());
// //          System.out.println("Role: " + request.getRole());

// //         return "Login Success";
// //     }
// // }

// package com.hireon.hireon.controller;

// import com.hireon.hireon.dto.LoginRequest;
// import com.hireon.hireon.service.AuthService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/api/auth")
// public class AuthController {

//     @Autowired
//     private AuthService authService;

//     @PostMapping("/login")
//     public String login(@RequestBody LoginRequest request) {
//         return authService.login(request);
//     }
// }








// package com.hireon.hireon.controller;

// import com.hireon.hireon.dto.LoginRequest;
// import com.hireon.hireon.service.AuthService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.Map;

// @RestController
// @RequestMapping("/api/auth")
// public class AuthController {

//     @Autowired
//     private AuthService authService;

//     @PostMapping("/login")
//     public ResponseEntity<?> login(@RequestBody LoginRequest request) {

//         try {
//             String token = authService.login(request);

//             return ResponseEntity.ok(Map.of(
//                     "token", token,
//                     "email", request.getEmail()
//             ));

//         } catch (RuntimeException e) {
//             return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//                     .body(Map.of("message", e.getMessage()));
//         }
//     }
// }




















