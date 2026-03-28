// package com.hireon.hireon.repository;

// import com.hireon.hireon.entity.Application;
// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

// import java.util.List;

// @Repository
// public interface ApplicationRepository extends JpaRepository<Application, Long> {

//     List<Application> findByJobId(Long jobId);

// }

// package com.hireon.hireon.repository;

// import com.hireon.hireon.entity.Application;
// import org.springframework.data.jpa.repository.JpaRepository;
// import java.util.List;

// public interface ApplicationRepository extends JpaRepository<Application, Long> {

//     List<Application> findByUserId(Long userId);
// }

package com.hireon.hireon.repository;

import com.hireon.hireon.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application, Long> {

    List<Application> findByUserId(Long userId);

}