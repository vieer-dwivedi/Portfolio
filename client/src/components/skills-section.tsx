import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Python", level: 95, icon: "fab fa-python", color: "text-yellow-500" },
        { name: "Java", level: 90, icon: "fab fa-java", color: "text-red-600" },
        { name: "Go", level: 85, icon: "fas fa-bolt", color: "text-blue-500" },
        { name: "Bash", level: 92, icon: "fas fa-terminal", color: "text-green-500" },
        { name: "YAML", level: 95, icon: "fas fa-file-code", color: "text-purple-500" }
      ]
    },
    {
      title: "Cloud Platforms",
      icon: "fas fa-cloud",
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "AWS", level: 95, icon: "fab fa-aws", color: "text-orange-500" },
        { name: "Azure", level: 92, icon: "fab fa-microsoft", color: "text-blue-500" },
        { name: "GCP", level: 88, icon: "fab fa-google", color: "text-green-500" }
      ]
    },
    {
      title: "Container & Orchestration",
      icon: "fab fa-docker",
      color: "from-blue-400 to-cyan-500",
      skills: [
        { name: "Docker", level: 95, icon: "fab fa-docker", color: "text-blue-500" },
        { name: "Kubernetes", level: 93, icon: "fas fa-dharmachakra", color: "text-blue-600" },
        { name: "Helm", level: 90, icon: "fas fa-ship", color: "text-indigo-500" },
        { name: "EKS/AKS/GKE", level: 88, icon: "fas fa-cubes", color: "text-purple-500" }
      ]
    },
    {
      title: "CI/CD & Automation",
      icon: "fas fa-cogs",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Jenkins", level: 92, icon: "fas fa-hammer", color: "text-blue-700" },
        { name: "GitHub Actions", level: 95, icon: "fab fa-github", color: "text-gray-800" },
        { name: "CircleCI", level: 88, icon: "fas fa-circle", color: "text-green-600" },
        { name: "ArgoCD", level: 90, icon: "fas fa-sync", color: "text-orange-500" }
      ]
    },
    {
      title: "Infrastructure as Code",
      icon: "fas fa-server",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Terraform", level: 94, icon: "fas fa-layer-group", color: "text-purple-600" },
        { name: "Terragrunt", level: 90, icon: "fas fa-cubes", color: "text-blue-600" },
        { name: "ARM Templates", level: 85, icon: "fab fa-microsoft", color: "text-blue-500" },
        { name: "Ansible", level: 88, icon: "fas fa-cog", color: "text-red-500" }
      ]
    },
    {
      title: "Monitoring & Observability",
      icon: "fas fa-chart-line",
      color: "from-red-500 to-yellow-500",
      skills: [
        { name: "Grafana", level: 93, icon: "fas fa-chart-bar", color: "text-orange-500" },
        { name: "Prometheus", level: 91, icon: "fas fa-fire", color: "text-red-500" },
        { name: "ELK Stack", level: 89, icon: "fas fa-search", color: "text-yellow-600" },
        { name: "Datadog", level: 85, icon: "fas fa-dog", color: "text-purple-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 to-purple-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Technical Expertise
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive skill set covering the entire DevOps lifecycle from infrastructure 
              provisioning to monitoring and security implementation
            </motion.p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 hover:border-purple-300/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                  <CardContent className="p-8">
                    {/* Category Header */}
                    <motion.div 
                      className="text-center mb-8"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} mb-4`}>
                        <i className={`${category.icon} text-2xl text-white`}></i>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{category.title}</h3>
                    </motion.div>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className="group/skill"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <motion.i 
                                className={`${skill.icon} ${skill.color} text-lg mr-3`}
                                animate={{ y: [-1, 1, -1] }}
                                transition={{ 
                                  duration: 2 + skillIndex * 0.3, 
                                  repeat: Infinity, 
                                  ease: "easeInOut" 
                                }}
                              />
                              <span className="font-semibold text-gray-700">{skill.name}</span>
                            </div>
                            <span className="text-sm font-bold text-gray-500">{skill.level}%</span>
                          </div>
                          
                          {/* Skill Progress Bar */}
                          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Key Technologies Highlight */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Core Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform", 
                "Jenkins", "Python", "Grafana", "Prometheus", "ArgoCD", "Helm"
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}