import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Multi-Cloud Infrastructure Orchestration",
      description: "Architected enterprise-grade infrastructure spanning AWS, Azure, and GCP with automated failover, disaster recovery, and global load balancing for seamless user experience.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { label: "AWS", color: "bg-orange-500/20 text-orange-700 border-orange-300" },
        { label: "Azure", color: "bg-blue-500/20 text-blue-700 border-blue-300" },
        { label: "GCP", color: "bg-green-500/20 text-green-700 border-green-300" },
        { label: "Terraform", color: "bg-purple-500/20 text-purple-700 border-purple-300" }
      ],
      gradient: "from-blue-600/10 to-purple-600/5",
      border: "border-blue-400/30",
      glow: "group-hover:shadow-blue-500/20",
      metrics: ["99.99% Uptime", "3 Continents", "Auto-scaling"]
    },
    {
      title: "Kubernetes Production Platform",
      description: "Deployed and managed containerized microservices across EKS, AKS, and GKE clusters with advanced networking, security policies, and zero-downtime deployment strategies.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { label: "Kubernetes", color: "bg-blue-600/20 text-blue-800 border-blue-400" },
        { label: "Helm", color: "bg-indigo-500/20 text-indigo-700 border-indigo-300" },
        { label: "ArgoCD", color: "bg-green-600/20 text-green-800 border-green-400" },
        { label: "Istio", color: "bg-cyan-500/20 text-cyan-700 border-cyan-300" }
      ],
      gradient: "from-indigo-500/10 to-blue-500/5",
      border: "border-indigo-400/30",
      glow: "group-hover:shadow-indigo-500/20",
      metrics: ["Zero Downtime", "Auto Healing", "50+ Services"]
    },
    {
      title: "DevSecOps Pipeline Implementation",
      description: "Integrated comprehensive security scanning, compliance checks, and policy enforcement into CI/CD pipelines with automated remediation and real-time security monitoring.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { label: "Snyk", color: "bg-red-500/20 text-red-700 border-red-300" },
        { label: "SonarQube", color: "bg-orange-600/20 text-orange-800 border-orange-400" },
        { label: "Kyverno", color: "bg-purple-600/20 text-purple-800 border-purple-400" },
        { label: "Trivy", color: "bg-pink-500/20 text-pink-700 border-pink-300" }
      ],
      gradient: "from-red-500/10 to-pink-500/5",
      border: "border-red-400/30",
      glow: "group-hover:shadow-red-500/20",
      metrics: ["100% Scan Coverage", "SOC2 Compliant", "Auto Remediation"]
    },
    {
      title: "Observability & Monitoring Stack",
      description: "Built enterprise-grade monitoring infrastructure with Grafana, Prometheus, and ELK stack, providing real-time insights, alerting, and log analysis across distributed systems.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { label: "Grafana", color: "bg-orange-500/20 text-orange-700 border-orange-300" },
        { label: "Prometheus", color: "bg-red-600/20 text-red-800 border-red-400" },
        { label: "ELK Stack", color: "bg-yellow-600/20 text-yellow-800 border-yellow-400" },
        { label: "Datadog", color: "bg-purple-500/20 text-purple-700 border-purple-300" }
      ],
      gradient: "from-orange-500/10 to-red-500/5",
      border: "border-orange-400/30",
      glow: "group-hover:shadow-orange-500/20",
      metrics: ["60% Faster MTTR", "24/7 Monitoring", "Custom Dashboards"]
    },
    {
      title: "Infrastructure as Code Automation",
      description: "Automated infrastructure provisioning using Terraform, Terragrunt, and ARM templates with GitOps workflows, enabling consistent and reproducible environment management.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { label: "Terraform", color: "bg-purple-600/20 text-purple-800 border-purple-400" },
        { label: "Terragrunt", color: "bg-blue-600/20 text-blue-800 border-blue-400" },
        { label: "ARM", color: "bg-blue-500/20 text-blue-700 border-blue-300" },
        { label: "GitOps", color: "bg-green-600/20 text-green-800 border-green-400" }
      ],
      gradient: "from-purple-500/10 to-blue-500/5",
      border: "border-purple-400/30",
      glow: "group-hover:shadow-purple-500/20",
      metrics: ["70% Faster Provisioning", "Version Controlled", "Multi-Environment"]
    },
    {
      title: "Cost Optimization & FinOps",
      description: "Implemented comprehensive cost optimization strategies achieving 25-30% cost reduction through resource rightsizing, auto-scaling policies, and strategic cloud resource management.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        { label: "FinOps", color: "bg-green-600/20 text-green-800 border-green-400" },
        { label: "Auto-scaling", color: "bg-blue-500/20 text-blue-700 border-blue-300" },
        { label: "Cost Analytics", color: "bg-yellow-500/20 text-yellow-700 border-yellow-300" },
        { label: "Optimization", color: "bg-teal-500/20 text-teal-700 border-teal-300" }
      ],
      gradient: "from-green-500/10 to-teal-500/5",
      border: "border-green-400/30",
      glow: "group-hover:shadow-green-500/20",
      metrics: ["30% Cost Reduction", "$100K+ Savings", "Automated Optimization"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-white to-purple-50/30">
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
            >
              Key Projects & Achievements
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Enterprise-scale projects showcasing expertise in cloud architecture, 
              DevOps automation, and infrastructure optimization
            </motion.p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Card className={`bg-gradient-to-br ${project.gradient} border-2 ${project.border} overflow-hidden transition-all duration-500 hover:shadow-2xl ${project.glow} group-hover:scale-[1.02] h-full`}>
                  {/* Project Image */}
                  <motion.div
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Metrics Overlay */}
                    <motion.div 
                      className="absolute top-4 right-4 flex flex-wrap gap-1"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {project.metrics.map((metric, metricIndex) => (
                        <span 
                          key={metricIndex}
                          className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-bold backdrop-blur-sm"
                        >
                          {metric}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>
                  
                  <CardContent className="p-8 flex flex-col h-full">
                    <motion.h3 
                      className="text-2xl font-bold mb-4 text-gray-800 leading-tight"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 mb-6 leading-relaxed flex-grow"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {project.description}
                    </motion.p>
                    
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className={`${tag.color} border px-3 py-1 rounded-full text-sm font-semibold`}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ duration: 0.2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                        >
                          {tag.label}
                        </motion.span>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Project Impact Summary */}
          <motion.div 
            className="mt-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white border-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90"></div>
              <CardContent className="relative p-12">
                <motion.h3 
                  className="text-4xl font-bold text-center mb-8"
                  whileHover={{ scale: 1.05 }}
                >
                  Project Impact Summary
                </motion.h3>
                
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  {[
                    { number: "100+", label: "Deployments Automated", icon: "fas fa-rocket" },
                    { number: "99.9%", label: "System Uptime", icon: "fas fa-shield-check" },
                    { number: "60%", label: "MTTR Reduction", icon: "fas fa-clock" },
                    { number: "30%", label: "Cost Optimization", icon: "fas fa-dollar-sign" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.i 
                        className={`${stat.icon} text-4xl mb-4 block`}
                        animate={{ y: [-2, 2, -2] }}
                        transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <div className="text-5xl font-bold mb-2">{stat.number}</div>
                      <div className="text-blue-100 text-lg font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}