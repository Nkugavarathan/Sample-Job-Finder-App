import React from "react"
import { Outlet } from "react-router-dom"
export default function JobsLayout() {
  return (
    <div className="jobs-layout">
      <h2>Job Openings</h2>
      <p>List of current job opening in our company</p>
      <Outlet />
    </div>
  )
}
