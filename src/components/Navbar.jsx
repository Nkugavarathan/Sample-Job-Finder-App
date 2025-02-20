import React from "react"
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <div className="navbar">
      <img src="" alt="" />
      <div className="navlist">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="products" className="nav-link">
          Products
        </Link>
        <Link to="about" className="nav-link">
          About
        </Link>
        <Link to="contact" className="nav-link">
          Contact
        </Link>
      </div>
      <button>Get Started</button>
    </div>
  )
}
