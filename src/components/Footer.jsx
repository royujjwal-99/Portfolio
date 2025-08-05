

import { Github, Linkedin, Instagram, Heart, Code2, ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/royujjwal-99", label: "GitHub", color: "hover:text-gray-300" },
    { icon: Linkedin, href: "https://linkedin.com/ujjwal kumar Roy", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Instagram, href: "https://instagram.com/mr.roy.52", label: "Email", color: "hover:text-cyan-400" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-black border-t border-gray-800">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="relative">
                <Code2 className="w-8 h-8 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                UJJWAL KUMAR ROY 
              </span>
            </div>
            <p className="text-gray-400">Full Stack Developer</p>
            <p className="text-gray-500 text-sm mt-2">Building the future, one line of code at a time.</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                className={`group relative p-3 bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-110 ${color}`}
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" />
                <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
              </a>
            ))}
          </div>

          {/* Back to top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="group relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105"
            >
              <ArrowUp className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors duration-300" />
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center">
              © {currentYear} UJJWAL KUMAR ROY. Made with
              <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
              and lots of coffee.
            </p>

            <div className="flex space-x-6 text-sm">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
