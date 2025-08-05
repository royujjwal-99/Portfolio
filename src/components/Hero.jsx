"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Sparkles, Code } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  // const navigate = useNavigate()

  const fullText = "Full Stack Developer"

  useEffect(() => {
    setIsVisible(true)

    // Typing animation
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout1 = () => {
    const element = document.getElementById("resume")
    if(element){
      element.scrollIntoView({ behavior: "smooth" })
    }
  }



  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Glowing orb */}
          <div className="mb-12 relative">
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 rounded-full blur-xl opacity-80 animate-pulse delay-500"></div>
              <div className="absolute inset-8 bg-white rounded-full opacity-90 animate-pulse delay-1000"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Code className="w-12 h-12 text-black z-10" />
              </div>
            </div>
          </div>

          {/* Main heading with glowing effect */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                UJJWAL
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ROY
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-3xl -z-10"></div>
            </h1>
          </div>

          {/* Typing animation */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-gray-300 font-mono">
              {text}
              {isTyping && <span className="animate-pulse">|</span>}
            </p>
          </div>

          {/* Description with glow */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technologies. Passionate about creating innovative solutions
            that push the boundaries of web development.
          </p>

          {/* Animated buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToAbout}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="relative z-10 flex items-center">
                Explore My Work
                <Sparkles className="ml-2 w-5 h-5 group-hover:animate-spin" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>

            <button 
               onClick={scrollToAbout1}
               className="group relative px-8 py-4 border-2 border-cyan-500/50 rounded-full text-cyan-400 font-semibold transition-all duration-300 hover:border-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-500/25">
              <span className="relative z-10 flex items-center">
                Download CV
                <ChevronDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-cyan-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-500 mx-auto" />
          </div>
        </div>
      </div>

      {/* Lightning effects */}
      <div className="absolute top-1/4 left-10 w-1 h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-60 animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-1 h-16 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-12 bg-gradient-to-b from-transparent via-pink-400 to-transparent opacity-60 animate-pulse delay-2000"></div>
    </section>
  )
}
