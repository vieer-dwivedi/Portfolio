import { motion } from "framer-motion";
import { OrbitalIcons, BackgroundFloatingIcons } from "./floating-icons";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Animated mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1)_0,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,119,198,0.1)_0,transparent_50%)]"></div>
      </div>
      
      <BackgroundFloatingIcons />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Profile Image with Enhanced Orbital Icons */}
          <motion.div 
            className="relative inline-block mb-12"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Glowing ring around profile */}
            <motion.div
              className="absolute inset-0 w-64 h-64 rounded-full mx-auto"
              animate={{
                boxShadow: [
                  "0 0 50px rgba(59, 130, 246, 0.5)",
                  "0 0 100px rgba(147, 51, 234, 0.7)",
                  "0 0 50px rgba(59, 130, 246, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Central profile image */}
            <motion.img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
              alt="Vieer Dwivedi - DevOps Engineer | Kubernetes Expert | Multi-Cloud Specialist"
              className="w-64 h-64 rounded-full mx-auto border-4 border-white shadow-2xl relative z-20 object-cover"
              animate={{
                boxShadow: [
                  "0 0 30px rgba(59, 130, 246, 0.6)",
                  "0 0 60px rgba(147, 51, 234, 0.8)",
                  "0 0 30px rgba(59, 130, 246, 0.6)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Enhanced Orbital floating icons around profile */}
            <OrbitalIcons />
          </motion.div>

          {/* Hero Content */}
          <motion.div 
            className="text-white space-y-8"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div 
              className="inline-flex items-center bg-green-500/20 text-green-300 px-6 py-3 rounded-full border border-green-500/30 mb-6 backdrop-blur-sm"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className="w-3 h-3 bg-green-400 rounded-full mr-3"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="font-semibold">Available for Global Contracts</span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-7xl font-bold leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Vieer Dwivedi
              </span>
              <span className="block text-4xl md:text-5xl font-medium mt-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  DevOps Engineer
                </span>{" "}
                <span className="text-orange-400">|</span>{" "}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Kubernetes Expert
                </span>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <span className="font-semibold text-orange-400">5+ years</span> architecting{" "}
              <span className="font-semibold text-blue-400">multi-cloud infrastructure</span>, 
              orchestrating <span className="font-semibold text-purple-400">Kubernetes</span> at scale, 
              and implementing <span className="font-semibold text-green-400">DevSecOps</span> practices 
              across <span className="font-semibold text-yellow-400">AWS</span>, {" "}
              <span className="font-semibold text-blue-400">Azure</span>, and {" "}
              <span className="font-semibold text-green-400">GCP</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-2xl hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-rocket mr-3"></i>Let's Build Something Amazing
              </motion.button>
              <motion.a
                href="https://docs.google.com/document/d/1pHEBD194mP_L7pCMyZdOVbIuSPjvwErt/export?format=pdf"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-slate-800 px-10 py-5 rounded-full text-xl font-bold transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download mr-3"></i>Download Resume
              </motion.a>
            </motion.div>

            {/* Key Skills Tags */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              {[
                { label: "AWS Certified", color: "from-orange-500 to-red-500" },
                { label: "Azure Expert", color: "from-blue-500 to-indigo-500" },
                { label: "GCP Professional", color: "from-green-500 to-teal-500" },
                { label: "Kubernetes", color: "from-purple-500 to-pink-500" },
                { label: "DevSecOps", color: "from-red-500 to-orange-500" }
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  className={`bg-gradient-to-r ${skill.color} text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                >
                  {skill.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
          <i className="fas fa-chevron-down text-white text-2xl opacity-70"></i>
        </div>
      </motion.div>
    </section>
  );
}