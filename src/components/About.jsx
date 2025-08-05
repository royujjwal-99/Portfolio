"use client"

import { useEffect, useState } from "react"
import { Brain, Rocket, Target, Zap } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Brain,
      title: "Creative Problem Solver",
      description: "I approach every challenge with innovative thinking and strategic solutions.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Rocket,
      title: "Performance Focused",
      description: "Building lightning-fast applications with optimal user experiences.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Target,
      title: "Detail Oriented",
      description: "Precision in every line of code, pixel-perfect designs and implementations.",
      color: "from-pink-400 to-red-500",
    },
    {
      icon: Zap,
      title: "Always Learning",
      description: "Constantly evolving with the latest technologies and best practices.",
      color: "from-yellow-400 to-orange-500",
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      {/* Section background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-2xl -z-10"></div>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          {/* Main content */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-12">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                I'm a passionate developer who transforms ideas into digital reality. With a keen eye for design and a
                love for clean, efficient code, I create web experiences that not only look stunning but perform
                exceptionally.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                My journey in web development spans across modern frameworks, cloud technologies, and emerging trends. I
                believe in writing code that tells a story and building applications that make a difference.
              </p>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, description, color }, index) => (
              <div
                key={title}
                className={`group relative p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105 ${
                  isVisible ? "animate-fade-in" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Card glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Icon with glow */}
                <div className="relative mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${color} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {description}
                </p>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-500/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
