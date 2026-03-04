// import { useEffect, useState } from "react";
// import API from "../services/api";
// import JobCard from "../components/JobCard";

// export default function JobsPage() {

//   const [jobs, setJobs] = useState([]);
//   const [search, setSearch] = useState("");
//   const [skill, setSkill] = useState("");

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const res = await API.get("/jobs");
//       setJobs(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   /* FILTER LOGIC */
//   const filteredJobs = jobs.filter((job) => {
//     const matchesSearch =
//       job.title.toLowerCase().includes(search.toLowerCase());

//     const matchesSkill =
//       skill === "" || job.skills?.includes(skill);

//     return matchesSearch && matchesSkill;
//   });

//   return (
//     <div className="p-6">

//       <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>

//       {/* SEARCH */}
//       <input
//         type="text"
//         placeholder="Search job..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="border p-2 mr-3"
//       />

//       {/* SKILL FILTER */}
//       <select
//         value={skill}
//         onChange={(e) => setSkill(e.target.value)}
//         className="border p-2"
//       >
//         <option value="">All Skills</option>
//         <option value="React">React</option>
//         <option value="JavaScript">JavaScript</option>
//         <option value="Node">Node</option>
//       </select>

//       {/* JOB LIST */}
//       <div className="mt-6">
//         {filteredJobs.map((job) => (
//           <JobCard key={job._id} job={job} />
//         ))}
//       </div>

//     </div>
//   );
// }
import { useState } from "react";
import jobsData from "../data/jobsData";
import JobCard from "../components/JobCard";

export default function JobsPage(){

const [jobs] = useState(jobsData);

return (

<div className="p-6">

<h1 className="text-2xl font-bold mb-6">
Available Jobs
</h1>

{jobs.map(job => (
<JobCard key={job.id} job={job}/>
))}

</div>

)

}