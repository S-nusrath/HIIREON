// // // package com.hireon.hireon.service;

// // // import com.hireon.hireon.entity.Application;
// // // import com.hireon.hireon.repository.ApplicationRepository;
// // // import org.springframework.beans.factory.annotation.Autowired;
// // // import org.springframework.stereotype.Service;

// // // import java.util.List;

// // // @Service
// // // public class ApplicationService {

// // //     @Autowired
// // //     private ApplicationRepository applicationRepository;

// // //     public Application saveApplication(Application application){
// // //         return applicationRepository.save(application);
// // //     }

// // //     public List<Application> getAllApplications(){
// // //         return applicationRepository.findAll();
// // //     }

// // //     public List<Application> getApplicationsByJob(Long jobId){
// // //         return applicationRepository.findByJobId(jobId);
// // //     }

// // //     public Application updateStatus(Long id,String status){

// // //         Application app = applicationRepository.findById(id).orElseThrow();

// // //         app.setStatus(status);

// // //         return applicationRepository.save(app);

// // //     }

// // // }

// // package com.hireon.hireon.service;

// // import com.hireon.hireon.entity.Application;
// // import com.hireon.hireon.repository.ApplicationRepository;
// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.stereotype.Service;

// // import java.util.List;

// // @Service
// // public class ApplicationService {

// //     @Autowired
// //     private ApplicationRepository applicationRepository;

// //     public Application saveApplication(Application application){
// //         return applicationRepository.save(application);
// //     }

// //     public List<Application> getAllApplications(){
// //         return applicationRepository.findAll();
// //     }

// //     public Application updateStatus(Long id, String status){
// //         Application app = applicationRepository.findById(id).orElseThrow();
// //         app.setStatus(status);
// //         return applicationRepository.save(app);
// //     }
// // }

// package com.hireon.hireon.service;

// import com.hireon.hireon.entity.Application;
// import com.hireon.hireon.repository.ApplicationRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class ApplicationService {

//     @Autowired
//     private ApplicationRepository applicationRepository;

//     public Application applyJob(Application application) {
//         return applicationRepository.save(application);
//     }

//     public List<Application> getUserApplications(Long userId) {
//         return applicationRepository.findByUserId(userId);
//     }
// }

package com.hireon.hireon.service;

import com.hireon.hireon.entity.Application;
import com.hireon.hireon.repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    // Apply job
    public Application applyJob(Application application) {
        application.setStatus("APPLIED"); // default
        return applicationRepository.save(application);
    }

    // Get user applications
    public List<Application> getUserApplications(Long userId) {
        return applicationRepository.findByUserId(userId);
    }

    // ✅ NEW: Get all applications (Admin)
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    // ✅ NEW: Update status (Admin)
    public Application updateStatus(Long id, String status) {
        Application app = applicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found"));

        app.setStatus(status);
        return applicationRepository.save(app);
    }
}