package com.hireon.hireon.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String company;

    private String location;

    private String jobType;

    private String experience;

    private String salaryMin;

    private String salaryMax;

    private String skills;

    @Column(length = 2000)
    private String description;

    private Integer openings;

    private String deadline;

}




















// package com.hireon.hireon.entity;

// import jakarta.persistence.*;
// import lombok.*;

// @Entity
// @Data
// @NoArgsConstructor
// @AllArgsConstructor
// public class Job {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String jobTitle;

//     private String company;

//     private String requiredSkills;

//     private String experience;
// }