// package com.hireon.hireon.service;

// import com.hireon.hireon.entity.Job;
// import com.hireon.hireon.repository.JobRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;   // ✅ added

// @Service
// public class JobService {

//     @Autowired
//     private JobRepository jobRepository;

//     public Job createJob(Job job) {
//         return jobRepository.save(job);
//     }

//     // ✅ added method
//     public List<Job> getAllJobs() {
//         return jobRepository.findAll();
//     }
// }


package com.hireon.hireon.service;

import com.hireon.hireon.entity.Job;
import com.hireon.hireon.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public Job updateJob(Long id, Job job) {

        Job existing = jobRepository.findById(id).orElse(null);

        existing.setTitle(job.getTitle());
        existing.setCompany(job.getCompany());
        existing.setLocation(job.getLocation());
        existing.setJobType(job.getJobType());
        existing.setExperience(job.getExperience());
        existing.setSalaryMin(job.getSalaryMin());
        existing.setSalaryMax(job.getSalaryMax());
        existing.setSkills(job.getSkills());
        existing.setDescription(job.getDescription());
        existing.setOpenings(job.getOpenings());
        existing.setDeadline(job.getDeadline());

        return jobRepository.save(existing);
    }

    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }

}