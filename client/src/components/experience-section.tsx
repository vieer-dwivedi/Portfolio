import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Vtechvibrant",
      location: "Remote (Global)",
      period: "May 2023 – Present",
      duration: "1.5+ years",
      color: "from-blue-600 to-purple-600",
      borderColor: "border-blue-500/30",
      bgGradient: "from-blue-50/50 to-purple-50/30",
      achievements: [
        {
          icon: "fas fa-globe",
          text: "Spearheaded multi-cloud infrastructure design across AWS, Azure, and GCP for global scalability",
          impact: "Achieved 99.9% uptime across 3 continents"
        },
        {
          icon: "fas fa-rocket",
          text: "Developed complex CI/CD pipelines using GitHub Actions, Azure Pipelines, CircleCI, and Jenkins",
          impact: "Reduced deployment time by 80%"
        },
        {
          icon: "fas fa-shield-alt",
          text: "Implemented GitOps workflows with ArgoCD and Helm for secure deployments to EKS, AKS, GKE",
          impact: "Zero security incidents in production"
        },
        {
          icon: "fas fa-chart-line",
          text: "Built comprehensive monitoring with Grafana, Prometheus, reducing incident detection time by 60%",
          impact: "MTTR reduced from 4hrs to 30min"
        },
        {
          icon: "fas fa-lock",
          text: "Integrated DevSecOps practices with Snyk, SonarQube, and Kyverno policy enforcement",
          impact: "100% vulnerability scan coverage"
        }
      ]
    },
    {
      title: "DevOps Engineer",
      company: "SimSol Technologies",
      location: "Remote",
      period: "Sep 2022 – May 2023",
      duration: "9 months",
      color: "from-indigo-600 to-blue-600",
      borderColor: "border-indigo-500/30",
      bgGradient: "from-indigo-50/50 to-blue-50/30",
      achievements: [
        {
          icon: "fas fa-cogs",
          text: "Architected end-to-end CI/CD pipelines with automated deployments and rollback capabilities",
          impact: "100% automated deployment success rate"
        },
        {
          icon: "fas fa-server",
          text: "Led infrastructure automation using Terraform and Terragrunt for multi-account AWS environments",
          impact: "Provisioning time reduced by 70%"
        },
        {
          icon: "fas fa-dollar-sign",
          text: "Migrated applications from EC2 to containerized microservices, reducing infrastructure costs by 30%",
          impact: "Monthly savings of $15K+"
        },
        {
          icon: "fas fa-clock",
          text: "Implemented unified observability with Prometheus, Loki, and Grafana, improving MTTR by 50%",
          impact: "Mean time to recovery: 2hrs → 1hr"
        },
        {
          icon: "fas fa-key",
          text: "Established secrets management with AWS KMS, Secrets Manager, and HashiCorp Vault",
          impact: "SOC2 compliance achieved"
        }
      ]
    },
    {
      title: "DevOps Engineer",
      company: "VTech Vibrant",
      location: "Remote",
      period: "May 2020 – Sep 2022",
      duration: "2.5 years",
      color: "from-green-600 to-teal-600",
      borderColor: "border-green-500/30",
      bgGradient: "from-green-50/50 to-teal-50/30",
      achievements: [
        {
          icon: "fas fa-tools",
          text: "Designed CI/CD pipelines reducing manual errors by 90% and accelerating release cycles",
          impact: "Release frequency: monthly → weekly"
        },
        {
          icon: "fas fa-container",
          text: "Implemented Docker containerization and Kubernetes deployments with automated rollout strategies",
          impact: "Zero-downtime deployments achieved"
        },
        {
          icon: "fas fa-search",
          text: "Built centralized logging with ELK Stack enabling real-time log aggregation and debugging",
          impact: "Debug time reduced by 60%"
        },
        {
          icon: "fas fa-chart-bar",
          text: "Optimized AWS costs by 25% through right-sizing, auto-scaling, and Spot Instances",
          impact: "Annual savings of $50K+"
        },
        {
          icon: "fas fa-users",
          text: "Collaborated in Agile/Scrum environments ensuring high-quality, scalable application delivery",
          impact: "Sprint velocity increased by 40%"
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-white to-indigo-50/30">
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
              className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6"
            >
              Professional Experience
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              5+ years of hands-on experience building and scaling cloud infrastructure 
              for companies worldwide
            </motion.p>
          </motion.div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`border-l-4 ${exp.borderColor} bg-gradient-to-r ${exp.bgGradient} hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]`}>
                  <CardContent className="p-8 md:p-10">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                      <div className="mb-4 lg:mb-0">
                        <motion.h3 
                          className="text-3xl font-bold text-gray-800 mb-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          {exp.title}
                        </motion.h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <motion.p 
                            className={`text-xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {exp.company}
                          </motion.p>
                          <span className="text-gray-500 text-lg">• {exp.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-start lg:items-end gap-2">
                        <motion.span 
                          className={`bg-gradient-to-r ${exp.color} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {exp.period}
                        </motion.span>
                        <span className="text-gray-600 font-medium">{exp.duration}</span>
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div className="grid gap-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          className="flex items-start gap-4 p-4 bg-white/60 rounded-xl border border-gray-200/50 hover:bg-white/80 transition-all duration-300 group/achievement"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <motion.div 
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                            whileHover={{ rotate: 5, scale: 1.1 }}
                          >
                            <i className={`${achievement.icon} text-white text-lg`}></i>
                          </motion.div>
                          
                          <div className="flex-grow">
                            <p className="text-gray-700 leading-relaxed mb-2 font-medium">
                              {achievement.text}
                            </p>
                            <motion.div 
                              className={`text-sm font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.3 + achIndex * 0.1 }}
                            >
                              <i className="fas fa-chart-line mr-1"></i>
                              {achievement.impact}
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Career Summary */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 border-0">
              <CardContent className="p-0">
                <motion.h3 
                  className="text-3xl font-bold mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  Career Highlights
                </motion.h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <div className="text-4xl font-bold mb-2">5+</div>
                    <div className="text-blue-100">Years Experience</div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <div className="text-4xl font-bold mb-2">100+</div>
                    <div className="text-blue-100">Projects Delivered</div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <div className="text-4xl font-bold mb-2">99.9%</div>
                    <div className="text-blue-100">Uptime Achieved</div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}