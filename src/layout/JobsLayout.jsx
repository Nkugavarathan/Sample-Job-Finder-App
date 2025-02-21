import React from "react"
import { Outlet } from "react-router-dom"
export default function JobsLayout() {
  return (
    <div>
      <h2>Job Openings</h2>
      <p>List of current job opening in our compan</p>
      <Outlet />
    </div>
  )
}
