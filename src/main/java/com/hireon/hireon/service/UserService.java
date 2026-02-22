
package com.hireon.hireon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hireon.hireon.entity.User;
import com.hireon.hireon.repository.UserRepository;

import java.util.List;
import java.util.Optional;

// 🔽 ADDED IMPORT
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // 🔽 ADDED FIELD
    @Autowired
    private PasswordEncoder passwordEncoder;

    // ✅ Registration (with duplicate email check)
    public User register(User user) {

        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser.isPresent()) {
            throw new RuntimeException("Account already exists");
        }

        // 🔽 ADDED LINE (encrypt password before save)
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    // ✅ Get All Users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // ✅ Login Method
    public String login(String email, String password, String role) {

        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isEmpty()) {
            return "User not found";
        }

        User user = optionalUser.get();

        // 🔽 CHANGED COMPARISON (use BCrypt match)
        if (!passwordEncoder.matches(password, user.getPassword())) {
            return "Invalid password";
        }

        // if (!user.getRole().equalsIgnoreCase(role)) {
        //     return "Invalid role";
        // }

        return "Login successful as " + user.getRole();
    }
}