import React from "react"
import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Github } from "lucide-react"
import emailjs from 'emailjs-com';


export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_aaj0868',
      'template_uve2mem',
      formData,
      'Nh1RBmZXCq8Rc7QRg'
    )
      .then((result) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, (error) => {
        alert("Failed to send message, please try again later.");
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "rujjwal@gmail.com",
      href: "mailto:rujjwal785@gmail.com",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9693245119",
      href: "tel:+919693245119",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bhubaneswar, India",
      href: "https://maps.app.goo.gl/ZpMKDKoHdH9gs6BQ7?g_st=aw",
      color: "from-pink-400 to-red-500",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/royujjwal-99", label: "GitHub", color: "hover:text-gray-300" },
    { icon: Linkedin, href: "https://linkedin.com/ujjwal kumar Roy", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: MessageCircle, href: "sms:+919693245119?body=Hello%20Ujjwal!", label: "Discord", color: "hover:text-purple-400" },
  ]

  return (
    <section id="contact" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-cyan-400/20 to-pink-400/20 blur-2xl -z-10"></div>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    I'm always excited to work on new projects and collaborate with talented individuals. Whether you
                    have a project in mind or just want to chat about technology, feel free to reach out!
                  </p>
                </div>

                {/* Contact methods */}
                <div className="space-y-6">
                  {contactMethods.map(({ icon: Icon, title, value, href, color }, index) => (
                    <a
                      key={title}
                      href={href}
                      className={`group flex items-center p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 ${isVisible ? "animate-fade-in" : ""
                        }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {/* Icon with glow */}
                      <div className="relative mr-6">
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                        ></div>
                      </div>

                      <div>
                        <p className="text-gray-400 text-sm font-medium">{title}</p>
                        <p className="text-white text-lg font-semibold group-hover:text-cyan-300 transition-colors duration-300">
                          {value}
                        </p>
                      </div>

                      {/* Card glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                      ></div>
                    </a>
                  ))}
                </div>

                {/* Social links */}
                <div className="pt-8">
                  <h4 className="text-xl font-semibold text-white mb-6">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map(({ icon: Icon, href, label, color }) => (
                      <a
                        key={label}
                        href={href}
                        className={`group relative p-4 bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-110 ${color}`}
                        aria-label={label}
                      >
                        <Icon className="w-6 h-6 text-gray-400 group-hover:text-current transition-colors duration-300" />
                        <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={`${isVisible ? "animate-fade-in" : ""}`} style={{ animationDelay: "600ms" }}>
                <div className="relative p-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-800">
                  {/* Form glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl"></div>

                  <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-black/60 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl h-12"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-black/60 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-black/60 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl h-12"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-black/60 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
