import { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../jobs/JobCard";

export default function JobsPage(){

const [jobs,setJobs] = useState([]);

useEffect(()=>{

axios.get("http://localhost:8080/api/jobs")
.then(res=>{
setJobs(res.data);
})
.catch(err=>{
console.error(err);
});

},[]);

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




// import { useState } from "react";
// import jobsData from "../data/jobsData";
// import JobCard from "../components/JobCard";

// export default function JobsPage(){

// const [jobs] = useState(jobsData);

// return (

// <div className="p-6">

// <h1 className="text-2xl font-bold mb-6">
// Available Jobs
// </h1>

// {jobs.map(job => (
// <JobCard key={job.id} job={job}/>
// ))}

// </div>

// )

// }