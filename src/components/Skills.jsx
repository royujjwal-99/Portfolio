"use client"

import { useEffect, useState } from "react"

export default function Skills() {
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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "java", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML5/CSS3", level: 95 },
      ],
    },
    {
      title: "Backend",
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 78 },
        { name: "REST APIs", level: 88 },
      ],
    },
    {
      title: "Tools & Others",
      color: "from-pink-400 to-red-500",
      skills: [
        { name: "Git/GitHub", level: 90 },
        // { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 },
        { name: "USING AI", level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-cyan-400/20 blur-2xl -z-10"></div>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          {/* Skills grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map(({ title, color, skills }, categoryIndex) => (
              <div
                key={title}
                className={`group relative p-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-500 ${
                  isVisible ? "animate-fade-in" : ""
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                {/* Card glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Category title */}
                <h3 className={`text-2xl font-bold mb-8 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                  {title}
                </h3>

                {/* Skills list */}
                <div className="space-y-6">
                  {skills.map(({ name, level }, skillIndex) => (
                    <div key={name} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{name}</span>
                        <span className="text-gray-400 text-sm">{level}%</span>
                      </div>

                      {/* Progress bar background */}
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        {/* Progress bar fill */}
                        <div
                          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out relative`}
                          style={{
                            width: isVisible ? `${level}%` : "0%",
                            transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                          }}
                        >
                          {/* Glow effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${color} blur-sm opacity-50`}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
