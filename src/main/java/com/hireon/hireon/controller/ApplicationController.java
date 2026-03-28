// // package com.hireon.hireon.controller;

// // import com.hireon.hireon.entity.Application;
// // import com.hireon.hireon.service.ApplicationService;

// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.web.bind.annotation.*;
// // import org.springframework.web.multipart.MultipartFile;

// // import java.io.IOException;
// // import java.util.List;

// // @RestController
// // @RequestMapping("/api/applications")
// // @CrossOrigin(origins = "http://localhost:5173")
// // public class ApplicationController {

// //     @Autowired
// //     private ApplicationService applicationService;

// //     @PostMapping
// //     public Application applyJob(
// //             @RequestParam Long jobId,
// //             @RequestParam String name,
// //             @RequestParam String email,
// //             @RequestParam String linkedin,
// //             @RequestParam MultipartFile resume
// //     ) throws IOException {

// //         Application application = new Application();

// //         application.setJobId(jobId);
// //         application.setName(name);
// //         application.setEmail(email);
// //         application.setLinkedin(linkedin);
// //         application.setResumeName(resume.getOriginalFilename());
// //         application.setResume(resume.getBytes());
// //         application.setStatus("Applied");

// //         return applicationService.saveApplication(application);
// //     }

// //     @GetMapping
// //     public List<Application> getAllApplications(){
// //         return applicationService.getAllApplications();
// //     }

// //     @PutMapping("/{id}/status")
// //     public Application updateStatus(
// //             @PathVariable Long id,
// //             @RequestParam String status
// //     ){
// //         return applicationService.updateStatus(id,status);
// //     }
// //     @GetMapping("/resume/{id}")
// // public byte[] downloadResume(@PathVariable Long id){

// //     Application app = applicationService.getAllApplications()
// //             .stream()
// //             .filter(a -> a.getId().equals(id))
// //             .findFirst()
// //             .orElseThrow();

// //     return app.getResume();

// // }
// // }

// package com.hireon.hireon.controller;

// import com.hireon.hireon.entity.Application;
// import com.hireon.hireon.service.ApplicationService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/applications")
// @CrossOrigin(origins = "http://localhost:5173")
// public class ApplicationController {

//     @Autowired
//     private ApplicationService applicationService;

//     @PostMapping("/apply")
//     public Application apply(@RequestBody Application application) {
//         return applicationService.applyJob(application);
//     }

//     @GetMapping("/user/{userId}")
//     public List<Application> getUserApplications(@PathVariable Long userId) {
//         return applicationService.getUserApplications(userId);
//     }
// }

package com.hireon.hireon.controller;

import com.hireon.hireon.entity.Application;
import com.hireon.hireon.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin(origins = "http://localhost:5173")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    // ✅ APPLY
    @PostMapping("/apply")
    public Application apply(@RequestBody Application application) {
        return applicationService.applyJob(application);
    }

    // ✅ USER VIEW
    @GetMapping("/user/{userId}")
    public List<Application> getUserApplications(@PathVariable Long userId) {
        return applicationService.getUserApplications(userId);
    }

    // ✅ ADMIN VIEW ALL
    @GetMapping
    public List<Application> getAllApplications() {
        return applicationService.getAllApplications();
    }

    // ✅ ADMIN UPDATE STATUS
    @PutMapping("/{id}/status")
    public Application updateStatus(
            @PathVariable Long id,
            @RequestParam String status
    ) {
        return applicationService.updateStatus(id, status);
    }
}