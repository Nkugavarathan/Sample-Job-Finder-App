import React from "react"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import { Routes, Route } from "react-router-dom"
import Contact from "./Pages/Contact"
import Products from "./Pages/Products"

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </div>
    </div>
  )
}
