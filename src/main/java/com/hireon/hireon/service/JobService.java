package com.hireon.hireon.service;

import com.hireon.hireon.entity.Job;
import com.hireon.hireon.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;   // ✅ added

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    // ✅ added method
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }
}