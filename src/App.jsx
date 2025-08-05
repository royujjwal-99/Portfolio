// import Header from './components/Header'
// import Hero from './components/Hero'
// import About from './components/About'
// import Skills from './components/Skills'
// import Projects from "./components/Project"
// import Resume from "./components/Resume"
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"
import Admin from "./pages/Admin"
import { BrowserRouter as Router  } from "react-router-dom"
import Home from "./Home"
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-black">
        {/* Animated background lights */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <Router>
           <Routes>
                 <Route path="/" element={<Home/>} />
                 <Route path="/admin" element={<Admin />} />
          </Routes>
       </Router>
      </div>
    </div>
  )
}
