import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: "fas fa-envelope",
      color: "text-blue-400",
      borderColor: "border-blue-400/30",
      title: "Email",
      content: "vieerdwivedi@gmail.com",
      href: "mailto:vieerdwivedi@gmail.com",
      description: "Best for project discussions and proposals"
    },
    {
      icon: "fas fa-phone-alt",
      color: "text-green-400",
      borderColor: "border-green-400/30",
      title: "Phone",
      content: "+91 7045308204",
      href: "tel:+917045308204",
      description: "Available for urgent consultations"
    },
    {
      icon: "fab fa-linkedin",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30",
      title: "LinkedIn",
      content: "Professional Network",
      href: "https://linkedin.com/in/vieer-dwivedi",
      description: "Connect for professional networking"
    }
  ];

  const availability = [
    { label: "Remote Work", icon: "fas fa-globe", available: true },
    { label: "Global Projects", icon: "fas fa-world", available: true },
    { label: "Long-term Contracts", icon: "fas fa-handshake", available: true },
    { label: "Consulting", icon: "fas fa-lightbulb", available: true }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3)_0,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.3)_0,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6"
            >
              Let's Build Something Extraordinary
            </motion.h2>
            
            <motion.p 
              className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to transform your infrastructure, accelerate your deployments, 
              or implement enterprise-grade DevSecOps practices? Let's discuss how 
              I can help your team achieve operational excellence.
            </motion.p>

            {/* Availability Status */}
            <motion.div 
              className="inline-flex items-center bg-green-500/20 text-green-300 px-8 py-4 rounded-full border border-green-500/30 mb-12 backdrop-blur-sm cursor-pointer group"
              animate={{ scale: [1, 1.02, 1] }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(34, 197, 94, 0.3)",
                borderColor: "rgba(34, 197, 94, 0.5)",
                boxShadow: "0 10px 30px rgba(34, 197, 94, 0.2)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                scale: { duration: 2, repeat: Infinity },
                y: { duration: 0.6, delay: 0.3 },
                opacity: { duration: 0.6, delay: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-4 h-4 bg-green-400 rounded-full mr-3 relative"
                animate={{ 
                  opacity: [1, 0.5, 1],
                  scale: [1, 1.2, 1]
                }}
                whileHover={{
                  scale: 1.5,
                  boxShadow: "0 0 20px rgba(34, 197, 94, 0.8)",
                  transition: { duration: 0.2 }
                }}
                transition={{ 
                  opacity: { duration: 1, repeat: Infinity },
                  scale: { duration: 1, repeat: Infinity }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-green-400 rounded-full group-hover:animate-ping"
                  style={{ animationDuration: '1s' }}
                />
              </motion.div>
              <motion.span 
                className="text-lg font-bold group-hover:text-green-200 transition-colors duration-300"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                Available for New Projects
              </motion.span>
            </motion.div>
          </motion.div>
          
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`bg-white/5 border-2 ${method.borderColor} backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 group-hover:scale-105 h-full hover:bg-white/10`}>
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <motion.div
                      className="mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.i 
                        className={`${method.icon} ${method.color} text-5xl mb-4 block`}
                        animate={{ y: [-2, 2, -2] }}
                        transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>
                    
                    <h3 className="font-bold text-2xl mb-3 text-white">{method.title}</h3>
                    <p className="text-gray-300 mb-4 flex-grow">{method.description}</p>
                    
                    <motion.a 
                      href={method.href}
                      className={`${method.color} hover:text-white text-lg font-semibold relative group transition-all duration-300`}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                      whileTap={{ 
                        scale: 0.98,
                        transition: { duration: 0.1 }
                      }}
                      onHoverStart={() => {
                        // Add ripple effect on hover
                      }}
                    >
                      <span className="relative z-10">{method.content}</span>
                      <motion.div
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-current origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { duration: 0.2 }
                        }}
                      />
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Availability Grid */}
          <motion.div 
            className="mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-8">Work Preferences</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {availability.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    rotateY: 0,
                    transition: { duration: 0.1 }
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.i 
                    className={`${item.icon} text-3xl mb-3 block ${item.available ? 'text-green-400 group-hover:text-green-300' : 'text-gray-400'}`}
                    animate={{ 
                      y: [-1, 1, -1],
                      rotate: [0, 0, 0]
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { 
                        scale: { duration: 0.2 },
                        rotate: { duration: 0.6, repeat: 1 }
                      }
                    }}
                    transition={{ 
                      y: { duration: 2 + index * 0.3, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                  <div className="font-semibold text-lg">{item.label}</div>
                  <div className="text-sm text-green-300 mt-2">
                    <i className="fas fa-check-circle mr-1"></i>Available
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Resume Download CTA */}
          <motion.div 
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 border-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
              <CardContent className="relative p-12">
                <motion.h3 
                  className="text-4xl font-bold mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  Ready to Get Started?
                </motion.h3>
                
                <motion.p 
                  className="text-blue-100 mb-8 text-xl max-w-3xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Download my detailed resume or reach out directly to discuss your 
                  DevOps, cloud infrastructure, or automation needs.
                </motion.p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <motion.a
                    href="https://docs.google.com/document/d/1pHEBD194mP_L7pCMyZdOVbIuSPjvwErt/export?format=pdf"
                    className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 inline-flex items-center shadow-2xl relative overflow-hidden group"
                    whileHover={{ 
                      scale: 1.08, 
                      y: -5,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
                      transition: { type: "spring", stiffness: 400, damping: 15 }
                    }}
                    whileTap={{ 
                      scale: 0.96,
                      transition: { duration: 0.1 }
                    }}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    onHoverStart={() => {}}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    />
                    <motion.i 
                      className="fas fa-download mr-3 relative z-10"
                      whileHover={{
                        y: [-2, 2, -2],
                        transition: { duration: 0.6, repeat: 1 }
                      }}
                    />
                    <span className="relative z-10">Download Resume</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                  </motion.a>
                  
                  <motion.a
                    href="mailto:vieerdwivedi@gmail.com"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 inline-flex items-center relative overflow-hidden group"
                    whileHover={{ 
                      scale: 1.08, 
                      y: -5,
                      borderColor: "#ffffff",
                      boxShadow: "0 25px 50px rgba(255,255,255,0.1)",
                      transition: { type: "spring", stiffness: 400, damping: 15 }
                    }}
                    whileTap={{ 
                      scale: 0.96,
                      transition: { duration: 0.1 }
                    }}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-full"
                    />
                    <motion.i 
                      className="fas fa-envelope mr-3 relative z-10 group-hover:text-blue-600"
                      whileHover={{
                        rotate: [0, -10, 10, -5, 0],
                        transition: { duration: 0.6, repeat: 1 }
                      }}
                    />
                    <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">Start a Project</span>
                    <motion.div
                      className="absolute inset-0 border-2 border-white rounded-full scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
                      style={{ borderStyle: 'dashed' }}
                    />
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}