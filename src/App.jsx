import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"
import MainLayout from "./layouts/MainLayout"
import Posts from "./components/Posts"
import PostData from "./components/PostData"
import Cars from "./components/Cars"
import SingleCar from "./components/SingleCar"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:postId" element={<PostData />} />
            <Route path="cars" element={<Cars />} />
            <Route path="cars/:carSlug" element={<SingleCar />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
