// package com.hireon.hireon.service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import com.hireon.hireon.entity.User;
// import com.hireon.hireon.repository.UserRepository;

// import java.util.List;

// @Service
// public class UserService {

//     @Autowired
//     private UserRepository userRepository;

//     public User register(User user) {
//         return userRepository.save(user);
//     }

//     public List<User> getAllUsers() {
//         return userRepository.findAll();
//     }
// }

package com.hireon.hireon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hireon.hireon.entity.User;
import com.hireon.hireon.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // ✅ Registration (Already existing)
    public User register(User user) {
        return userRepository.save(user);
    }

    // ✅ Get All Users (Already existing)
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // ✅ Login Method (NEW - Add this below existing methods)
    public String login(String email, String password, String role) {

        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isEmpty()) {
            return "User not found";
        }

        User user = optionalUser.get();

        if (!user.getPassword().equals(password)) {
            return "Invalid password";
        }

        if (!user.getRole().equalsIgnoreCase(role)) {
            return "Invalid role";
        }

        return "Login successful as " + user.getRole();
    }
}