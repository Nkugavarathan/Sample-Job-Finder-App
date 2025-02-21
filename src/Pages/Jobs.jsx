import React from "react"
import { useLoaderData, Link } from "react-router-dom"

export default function Jobs() {
  const jobsData = useLoaderData()

  console.log("jobsData:", jobsData)

  if (!jobsData || !jobsData.length) {
    return <div>No jobs available</div>
  }

  return (
    <div className="jobs">
      {jobsData.map((job) => (
        <div key={job.id}>
          <Link to={`/jobs/${job.id}`}>
            <h3>{job.title}</h3>
          </Link>
          <p>Salary: {job.salary}</p>
          <p>Location: {job.location}</p>
        </div>
      ))}
    </div>
  )
}

export const jobsLoader = async () => {
  let response = await fetch("http://localhost:5000/jobs")
  if (!response.ok) {
    throw new Error("Failed to fetch jobs")
  }
  const data = await response.json()
  console.log(data) // Log the fetched data
  return data
}
