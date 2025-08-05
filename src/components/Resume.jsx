import { useEffect, useState } from "react"
import { Download, GraduationCap, Award, Calendar } from "lucide-react"

export default function Resume() {
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

    const element = document.getElementById("resume")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const education = [
    {
      degree: "Computer Science and Engineering",
      school: "GITA AUTONOMOUS COLLEGE BHUBANESWAR",
      period: "2022 - 2026",
      description:
        " Specialized in Software Engineering and Data Science. Active member of the Computer Science Society.",
      gpa: "8.44/10",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "10 + Projects",
      period: "Javascript , React JS, Node.js, MongoDB",
      description: "Making Projects using Frontend and Backend Technologies completely.",
      gpa: "NAN",
    },
  ]

  // const certifications = [
  //   { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
  //   { name: "Google Cloud Professional Developer", issuer: "Google Cloud", year: "2023" },
  //   { name: "React Advanced Certification", issuer: "Meta", year: "2022" },
  //   { name: "MongoDB Certified Developer", issuer: "MongoDB Inc.", year: "2022" },
  //   { name: "Docker Certified Associate", issuer: "Docker Inc.", year: "2021" },
  //   { name: "Kubernetes Application Developer", issuer: "CNCF", year: "2021" },
  // ]

  return (
    <section id="resume" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-2xl -z-10"></div>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-8"></div>

            {/* Download button */}
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">

              <a href="https://drive.google.com/file/d/1LbqO43O5xRgg2KmTB9eFYmDp8kPQO_CR/view?usp=drivesdk" >
                <span className="relative z-10 flex items-center">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Full Resume
                </span>
              </a>

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Education Section */}
            <div className="mb-20">
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Education
                  </h3>
                </div>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={edu.degree}
                    className={`group relative p-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-500 ${isVisible ? "animate-fade-in" : ""
                      }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Card glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-500"></div>

                    <div className="grid md:grid-cols-4 gap-6 items-start">
                      <div className="md:col-span-3">
                        <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          {edu.degree}
                        </h4>
                        <p className="text-purple-400 text-lg font-semibold mb-2">{edu.school}</p>
                        <p className="text-gray-300 leading-relaxed mb-3">{edu.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Award className="w-4 h-4" />
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      </div>

                      {/* Timeline indicator */}
                      <div className="hidden md:flex justify-center">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-lg opacity-50"></div>
                        </div>
                      </div>
                    </div>

                    {/* Hover border effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500/20 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            {/* <div>
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Certifications
                  </h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.name}
                    className={`group relative p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105 ${
                      isVisible ? "animate-fade-in" : ""
                    }`}
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    {/* Card glow */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-500"></div>

                    <div className="text-center">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-cyan-400 text-sm font-semibold mb-1">{cert.issuer}</p>
                      <p className="text-gray-400 text-sm">{cert.year}</p>
                    </div>

                    {/* Certificate icon */}
            {/* <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Award className="w-4 h-4 text-white" />
                    </div>

                    {/* Hover border effect */}
            {/* <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-500/20 transition-all duration-300"></div>
                  </div>
                ))}
              </div> */}
            {/* </div>  */}
          </div>
        </div>
      </div>
    </section>
  )
}
