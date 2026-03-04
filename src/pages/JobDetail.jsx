// import { useParams } from "react-router-dom";

// export default function JobDetail() {

//   const { id } = useParams();

//   return (
//     <div>
//       <h1>Job Detail Page</h1>
//       <p>Job ID: {id}</p>
//     </div>
//   );
// }
import { useParams, useNavigate } from "react-router-dom";
import jobsData from "../data/jobsData";

export default function JobDetail(){

const {id} = useParams();
const navigate = useNavigate();

const job = jobsData.find(j => j.id === id);

return(

<div className="p-6">

<h1 className="text-2xl font-bold">{job.title}</h1>

<p>{job.company} • {job.location}</p>

<p className="mt-2">{job.description}</p>

<p className="mt-2">
Skills: {job.skills.join(", ")}
</p>

<p className="mt-2">
Salary: {job.salary}
</p>

<button
onClick={()=>navigate(`/apply/${job.id}`)}
className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
>

Apply Now

</button>

</div>

)

}