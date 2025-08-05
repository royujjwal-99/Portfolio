"use client";

import { useEffect, useState } from "react";

const projectData = [
  {
    id: 1,
    title: "Movie Recommendation System",
    description: "Built using content-based filtering with cosine similarity. Responsive UI and 81% accuracy.",
    image: "/movie.jpg",
    sourceCode: "https://github.com/royujjwal-99",
    demo: "https://movie-recommendation-ui.vercel.app/",
  },
  {
    id: 2,
    title: "Unique Facts About Different Countries",
    description: "Using React Make a Project to find Different Facts About Different Country only Frontend Part.",
    image: "/photo2.jpg",
    sourceCode: "https://github.com/royujjwal-99",
    demo: "https://public.tableau.com/app/profile/ujjwalroy/viz/AccidentDashboard",
  },
  {
    id: 3,
    title: "Web Scraping Script",
    description: "Scraped top U.S. companies by revenue from Wikipedia and stored in CSV using BeautifulSoup.",
    image: "/web.jpg",
    sourceCode: "https://github.com/royujjwal-99",
    demo: "https://data-scraper-ui.vercel.app/",
  },
  {
    id: 4,
    title: "Restaurant Full Stack App",
    description: "React frontend, Node.js backend, and MongoDB. Admin can add dishes, users receive SMS alerts.",
    image: "/photo.jpg",
    sourceCode: "https://github.com/royujjwal-99",
    demo: "https://restaurant-ui.vercel.app/",
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-cyan-400/20 blur-2xl -z-10"></div>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projectData.map((project, index) => (
              <div
                key={project.id}
                className={`group relative p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-500 hover:scale-105 ${
                  isVisible ? "animate-fade-in" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* ✅ FIXED: Add pointer-events-none so it doesn't block buttons */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-500 pointer-events-none"></div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl mb-4 border border-gray-700"
                />
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex space-x-4 z-10 relative">
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-all"
                  >
                    Source Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-all"
                  >
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
