import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function CertificationsSection() {
  const certifications = [
    {
      icon: "fab fa-microsoft",
      color: "text-blue-500",
      bgColor: "from-blue-500/10 to-indigo-500/5",
      borderColor: "border-blue-400/30",
      glowColor: "group-hover:shadow-blue-500/20",
      title: "Azure DevOps Engineer Expert",
      issuer: "Microsoft Certified",
      level: "Expert",
      description: "Advanced expertise in implementing DevOps practices using Azure DevOps services",
      skills: ["Azure Pipelines", "ARM Templates", "Azure Monitor", "Azure DevOps"]
    },
    {
      icon: "fab fa-microsoft",
      color: "text-blue-600",
      bgColor: "from-blue-600/10 to-blue-500/5",
      borderColor: "border-blue-500/30",
      glowColor: "group-hover:shadow-blue-600/20",
      title: "Azure Administrator Associate",
      issuer: "Microsoft Certified",
      level: "Associate",
      description: "Comprehensive knowledge of Azure infrastructure management and administration",
      skills: ["Virtual Machines", "Azure AD", "Storage", "Networking"]
    },
    {
      icon: "fab fa-aws",
      color: "text-orange-500",
      bgColor: "from-orange-500/10 to-yellow-500/5",
      borderColor: "border-orange-400/30",
      glowColor: "group-hover:shadow-orange-500/20",
      title: "AWS SysOps Administrator",
      issuer: "Amazon Web Services",
      level: "Associate",
      description: "Proven skills in deployment, management, and operations on AWS platform",
      skills: ["EC2", "CloudWatch", "IAM", "VPC", "Auto Scaling"]
    },
    {
      icon: "fab fa-github",
      color: "text-gray-800",
      bgColor: "from-gray-800/10 to-gray-600/5",
      borderColor: "border-gray-700/30",
      glowColor: "group-hover:shadow-gray-800/20",
      title: "GitHub Actions Certified",
      issuer: "GitHub",
      level: "Professional",
      description: "Advanced automation and CI/CD implementation using GitHub Actions workflows",
      skills: ["Workflows", "Actions", "CI/CD", "Automation"]
    },
    {
      icon: "fab fa-android",
      color: "text-green-600",
      bgColor: "from-green-600/10 to-green-500/5",
      borderColor: "border-green-500/30",
      glowColor: "group-hover:shadow-green-600/20",
      title: "Android Studio Certified",
      issuer: "Google Developers",
      level: "Professional",
      description: "Mobile application development and deployment expertise",
      skills: ["Android SDK", "Mobile DevOps", "App Deployment", "Testing"]
    }
  ];

  const stats = [
    { number: "5", label: "Active Certifications", icon: "fas fa-certificate" },
    { number: "3", label: "Cloud Providers", icon: "fas fa-cloud" },
    { number: "100%", label: "Exam Pass Rate", icon: "fas fa-trophy" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            >
              Professional Certifications
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Industry-recognized certifications validating expertise across major cloud platforms 
              and DevOps technologies
            </motion.p>

            {/* Stats Row */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <motion.i 
                    className={`${stat.icon} text-4xl text-blue-500 mb-4`}
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="text-5xl font-bold text-gray-800 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ 
                  y: 50, 
                  opacity: 0,
                  rotateY: -15
                }}
                whileInView={{ 
                  y: 0, 
                  opacity: 1,
                  rotateY: 0
                }}
                transition={{ 
                  duration: 0.7, 
                  delay: cert.delay || index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Card className={`bg-gradient-to-br ${cert.bgColor} border-2 ${cert.borderColor} hover:shadow-2xl ${cert.glowColor} transition-all duration-500 h-full group-hover:scale-[1.02] group-hover:border-opacity-60`}>
                  <CardContent className="p-8 h-full flex flex-col">
                    {/* Icon and Level Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 5
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <i className={`${cert.icon} ${cert.color} text-5xl`}></i>
                      </motion.div>
                      
                      <motion.span 
                        className={`${cert.color.replace('text-', 'bg-')}/20 ${cert.color} px-3 py-1 rounded-full text-sm font-bold border ${cert.borderColor}`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {cert.level}
                      </motion.span>
                    </div>
                    
                    {/* Certification Details */}
                    <div className="flex-grow">
                      <motion.h3 
                        className="text-xl font-bold mb-2 text-gray-800 leading-tight"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {cert.title}
                      </motion.h3>
                      
                      <motion.p 
                        className={`${cert.color} font-semibold mb-4`}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {cert.issuer}
                      </motion.p>
                      
                      <motion.p 
                        className="text-gray-600 mb-6 leading-relaxed"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {cert.description}
                      </motion.p>
                    </div>
                    
                    {/* Skills Tags */}
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className={`${cert.color.replace('text-', 'bg-')}/10 ${cert.color} px-3 py-1 rounded-full text-xs font-medium`}
                          whileHover={{ scale: 1.1 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.6 + skillIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
            >
              <i className="fas fa-shield-check mr-3"></i>
              Certified & Ready for Enterprise Projects
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}