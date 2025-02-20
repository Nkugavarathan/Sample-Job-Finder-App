import React from "react"

import Home from "./Pages/Home"
import About from "./Pages/About"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import Contact from "./Pages/Contact"
import Products from "./Pages/Products"
import RootLayout from "./layout/RootLayout"
import Errorpage from "./Pages/Errorpage"

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<Errorpage />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

/* <Navbar />
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </div> */
