import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function DevOpsEngineerHire() {
  const services = [
    {
      title: "Infrastructure as Code",
      description: "Terraform, CloudFormation, Pulumi automation for scalable infrastructure",
      icon: "fas fa-code-branch",
      technologies: ["Terraform", "AWS CloudFormation", "Azure ARM Templates", "Pulumi"]
    },
    {
      title: "CI/CD Pipeline Automation", 
      description: "Jenkins, GitHub Actions, Azure DevOps pipeline implementation",
      icon: "fas fa-rocket",
      technologies: ["Jenkins", "GitHub Actions", "Azure DevOps", "GitLab CI", "CircleCI"]
    },
    {
      title: "Container Orchestration",
      description: "Kubernetes, Docker, microservices architecture deployment",
      icon: "fab fa-docker",
      technologies: ["Kubernetes", "Docker", "Helm", "ArgoCD", "Istio"]
    },
    {
      title: "Cloud Migration",
      description: "AWS, Azure, GCP migration strategies and implementation",
      icon: "fas fa-cloud-upload-alt",
      technologies: ["AWS Migration Hub", "Azure Migrate", "GCP Migration", "Hybrid Cloud"]
    },
    {
      title: "Monitoring & Observability",
      description: "Prometheus, Grafana, ELK stack setup and optimization",
      icon: "fas fa-chart-line",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "DataDog", "New Relic"]
    },
    {
      title: "DevSecOps Implementation",
      description: "Security automation, compliance, and vulnerability management",
      icon: "fas fa-shield-alt", 
      technologies: ["SonarQube", "OWASP", "Vault", "Aqua Security", "Twistlock"]
    }
  ];

  const industries = [
    "Fintech & Banking", "Healthcare & Life Sciences", "E-commerce & Retail", 
    "SaaS & Technology", "Media & Entertainment", "Manufacturing", "Startups", "Enterprise"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hire Expert <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">DevOps Engineer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your infrastructure with 5+ years of multi-cloud DevOps expertise. 
            Available for global remote contracts - AWS, Azure, GCP certified professional ready to accelerate your deployments.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-6 py-3 text-lg">
              ✅ Available Now
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-6 py-3 text-lg">
              🌍 Global Remote
            </Badge>
            <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 px-6 py-3 text-lg">
              ⚡ 24/7 Support
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-xl"
            >
              <a href="mailto:vieerdwivedi@gmail.com" className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                Get Quote Now
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-400 text-blue-300 hover:bg-blue-500/10 px-8 py-4 text-xl"
            >
              <Link href="/#contact" className="flex items-center">
                <i className="fas fa-calendar mr-2"></i>
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            DevOps Services I Provide
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-slate-800/50 border-slate-600 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 h-full">
                  <CardHeader className="text-center pb-4">
                    <motion.i 
                      className={`${service.icon} text-4xl text-blue-400 mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    />
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary"
                          className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industries */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Industries I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
              >
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-6 py-3 text-lg">
                  {industry}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-12 border border-blue-500/30"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Scale Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how I can help optimize your DevOps processes, reduce deployment times, 
            and implement robust, scalable infrastructure for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-10 py-4 text-xl"
            >
              <a href="mailto:vieerdwivedi@gmail.com" className="flex items-center">
                <i className="fas fa-rocket mr-2"></i>
                Start Project
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-10 py-4 text-xl"
            >
              <Link href="/" className="flex items-center">
                <i className="fas fa-user mr-2"></i>
                View Portfolio
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}