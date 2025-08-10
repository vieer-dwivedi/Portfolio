import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const cloudCards = [
    {
      icon: "fab fa-aws",
      color: "from-orange-500/20 to-red-500/10 border-orange-400/30",
      textColor: "text-orange-500",
      bgGlow: "group-hover:shadow-orange-500/25",
      title: "AWS Certified",
      description: "EC2, EKS, Lambda, VPC, RDS, S3, CloudFront, IAM, DynamoDB, CloudWatch",
      certifications: ["SysOps Administrator Associate"]
    },
    {
      icon: "fab fa-microsoft",
      color: "from-blue-500/20 to-indigo-500/10 border-blue-400/30",
      textColor: "text-blue-500",
      bgGlow: "group-hover:shadow-blue-500/25",
      title: "Azure Expert",
      description: "AKS, Functions, VNet, DevOps, ARM Templates, Monitor, SQL Database",
      certifications: ["DevOps Engineer Expert", "Administrator Associate"]
    },
    {
      icon: "fab fa-google",
      color: "from-green-500/20 to-teal-500/10 border-green-400/30",
      textColor: "text-green-500",
      bgGlow: "group-hover:shadow-green-500/25",
      title: "GCP Professional",
      description: "GKE, Cloud Run, Compute Engine, Cloud Build, Cloud Storage, Firebase",
      certifications: ["Platform Engineer Ready"]
    }
  ];

  const stats = [
    { number: "5+", label: "Years Experience", icon: "fas fa-calendar-alt" },
    { number: "3", label: "Cloud Platforms", icon: "fas fa-cloud" },
    { number: "100+", label: "Projects Delivered", icon: "fas fa-rocket" },
    { number: "99.9%", label: "Uptime Achieved", icon: "fas fa-chart-line" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
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
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              DevOps Engineer & Cloud Architect
            </motion.h2>
            
            <motion.p 
              className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Passionate DevOps Engineer with comprehensive expertise across <strong>AWS, Azure, and GCP</strong>. 
              I specialize in designing resilient cloud infrastructure, implementing robust CI/CD pipelines, 
              and orchestrating containerized applications with Kubernetes. My mission is automating 
              complex deployments while maintaining the highest security and reliability standards.
            </motion.p>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <motion.i 
                  className={`${stat.icon} text-3xl text-blue-500 mb-3`}
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="text-4xl font-bold text-gray-800 mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Cloud Expertise Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {cloudCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`bg-gradient-to-br ${card.color} border-2 hover:border-opacity-60 transition-all duration-500 hover:shadow-2xl ${card.bgGlow} h-full`}>
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <motion.div
                      className="mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className={`${card.icon} ${card.textColor} text-6xl mb-4 block`}></i>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{card.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{card.description}</p>
                    
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-gray-500 mb-2">Certifications:</div>
                      {card.certifications.map((cert, certIndex) => (
                        <motion.div
                          key={certIndex}
                          className={`${card.textColor.replace('text-', 'bg-')}/10 ${card.textColor} px-3 py-1 rounded-full text-sm font-medium`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {cert}
                        </motion.div>
                      ))}
                    </div>
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
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
            >
              <i className="fas fa-handshake mr-3"></i>
              Ready for Global DevOps Contracts
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}