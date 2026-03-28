// package com.hireon.hireon.entity;

// import jakarta.persistence.*;
// import lombok.*;

// @Entity
// @Data
// @NoArgsConstructor
// @AllArgsConstructor
// public class Application {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private Long jobId;

//     private String name;

//     private String email;

//     private String linkedin;

//     private String resumeName;

//     private String status;

//     @Lob
//     @Column(columnDefinition = "LONGBLOB")
//     private byte[] resume;
// }

package com.hireon.hireon.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private Long jobId;

    private String status = "APPLIED";
}