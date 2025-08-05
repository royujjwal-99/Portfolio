import { useEffect, useState } from "react";

export default function Admin() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/messages");
        const result = await res.json();
        setMessages(result.data || []);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("admin");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="admin" className="py-20 px-6 min-h-screen bg-black/80 text-white relative">
      <div className="container mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Admin Panel – Messages
          </h2>

          {loading ? (
            <p className="text-center text-gray-400">Loading messages...</p>
          ) : messages.length === 0 ? (
            <p className="text-center text-red-400">No messages found.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className="bg-black/40 border border-gray-800 p-6 rounded-xl backdrop-blur-md hover:shadow-md transition-all hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">{msg.name}</h3>
                  <p className="text-sm text-gray-400 mb-1">
                    <span className="font-semibold text-white">Email:</span> {msg.email}
                  </p>
                  <p className="text-sm text-gray-400 mb-1">
                    <span className="font-semibold text-white">Subject:</span> {msg.subject}
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold text-white">Message:</span><br />
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
