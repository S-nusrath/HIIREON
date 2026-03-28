// import { useParams } from "react-router-dom";

// export default function JobTracker(){

// const {id} = useParams();

// const data = JSON.parse(localStorage.getItem(`job-${id}`));

// return(

// <div className="p-6">

// <h1 className="text-2xl font-bold">
// Application Status
// </h1>

// <p>Name: {data?.name}</p>

// <p>Email: {data?.email}</p>

// <p>Status: {data?.status}</p>

// </div>

// )

// }

import { useParams } from "react-router-dom";

export default function JobTracker(){

const {id} = useParams();

const data = JSON.parse(localStorage.getItem(`job-${id}`));

if(!data){
return <p className="p-6">No application found</p>
}

return(

<div className="p-6">

<h1 className="text-2xl font-bold mb-4">
Application Status
</h1>

<p><strong>Name:</strong> {data.name}</p>

<p><strong>Email:</strong> {data.email}</p>

<p><strong>LinkedIn:</strong> {data.linkedin}</p>

<p className="mt-4 text-lg">

<strong>Status:</strong> 
<span className="ml-2 text-blue-600">
{data.status}
</span>

</p>

</div>

)

}