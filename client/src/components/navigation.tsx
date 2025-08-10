import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ContrastToggle from "./contrast-toggle";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
          : "bg-white/90 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Vieer <span className="text-orange-500">Dwivedi</span>
            </motion.div>
            
            {/* Contact Info in Header */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <motion.a 
                href="mailto:vieerdwivedi@gmail.com"
                className="flex items-center text-slate-600 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <i className="fas fa-envelope mr-2"></i>
                vieerdwivedi@gmail.com
              </motion.a>
              <motion.a 
                href="tel:+917045308204"
                className="flex items-center text-slate-600 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <i className="fas fa-phone mr-2"></i>
                +91 7045308204
              </motion.a>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { label: "About", id: "about" },
              { label: "Experience", id: "experience" },
              { label: "Skills", id: "skills" },
              { label: "Projects", id: "projects" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
          
          <div className="flex items-center space-x-3">
            <ContrastToggle />
            <motion.a
              href="https://docs.google.com/document/d/1pHEBD194mP_L7pCMyZdOVbIuSPjvwErt/export?format=pdf"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-download mr-2"></i>
              Resume
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}