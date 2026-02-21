// public String login(LoginRequest request) {

//     Optional<User> userOptional = userRepository.findByEmail(request.getEmail());

//     if (userOptional.isEmpty()) {
//         return "Account does not exist";
//     }

//     User user = userOptional.get();

//     if (!user.getPassword().equals(request.getPassword())) {
//         return "Invalid credentials";
//     }

//     return "Login Successful";
// }

package com.hireon.hireon.service;

import com.hireon.hireon.dto.LoginRequest;
import com.hireon.hireon.entity.User;
import com.hireon.hireon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

   public String login(LoginRequest request) {

    Optional<User> userOptional =
            userRepository.findByEmail(request.getEmail());

    if (userOptional.isEmpty()) {
        return "Account does not exist";
    }

    User user = userOptional.get();

    // IMPORTANT PART
    if (!passwordEncoder.matches(
            request.getPassword(),
            user.getPassword())) {

        return "Invalid credentials";
    }

    return "Login Successful";
}
}