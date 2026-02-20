package com.hireon.hireon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hireon.hireon.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}