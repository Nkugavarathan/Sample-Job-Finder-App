import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import JobsLayout from "./layout/JobsLayout"
import Jobs, { jobsLoader } from "./Pages/Jobs"
import JobDetail, { jobDetailLoader } from "./Pages/JobDetail"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Products from "./Pages/Products"
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
        <Route path="jobs" element={<JobsLayout />}>
          <Route
            index
            element={<Jobs />}
            loader={jobsLoader}
            errorElement={<Errorpage />}
          />
          <Route
            path=":id"
            element={<JobDetail />}
            loader={jobDetailLoader}
          ></Route>
        </Route>
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
