// package com.hireon.hireon.controller;

// import com.hireon.hireon.entity.Job;
// import com.hireon.hireon.service.JobService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/jobs")
// @CrossOrigin(origins = "http://localhost:5173")
// public class JobController {

//     @Autowired
//     private JobService jobService;

//     @PostMapping
//     public Job createJob(@RequestBody Job job) {
//         return jobService.createJob(job);
//     }

//     @GetMapping
//     public List<Job> getAllJobs() {
//         return jobService.getAllJobs();
//     }
// }

package com.hireon.hireon.controller;

import com.hireon.hireon.entity.Job;
import com.hireon.hireon.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:5173")
public class JobController {

    @Autowired
    private JobService jobService;

    @PostMapping
    public Job createJob(@RequestBody Job job) {
        return jobService.createJob(job);
    }

    @GetMapping
    public List<Job> getAllJobs() {
        return jobService.getAllJobs();
    }

    @PutMapping("/{id}")
    public Job updateJob(@PathVariable Long id,@RequestBody Job job){
        return jobService.updateJob(id,job);
    }

    @DeleteMapping("/{id}")
    public String deleteJob(@PathVariable Long id){
        jobService.deleteJob(id);
        return "Job deleted";
    }

}