import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function KubernetesConsultant() {
  const k8sServices = [
    {
      title: "Cluster Architecture & Setup",
      description: "Production-ready Kubernetes cluster design and implementation",
      icon: "fas fa-cubes",
      deliverables: ["Multi-master HA setup", "Network policy configuration", "Storage class setup", "RBAC implementation"]
    },
    {
      title: "Container Orchestration",
      description: "Microservices deployment and scaling strategies",
      icon: "fas fa-layer-group",
      deliverables: ["Pod management", "Service mesh (Istio)", "Load balancing", "Auto-scaling policies"]
    },
    {
      title: "GitOps & CI/CD",
      description: "ArgoCD, Flux deployment pipelines for Kubernetes",
      icon: "fas fa-code-branch",
      deliverables: ["ArgoCD setup", "Helm chart creation", "Pipeline automation", "Blue-green deployments"]
    },
    {
      title: "Monitoring & Logging",
      description: "Prometheus, Grafana, ELK stack for K8s observability",
      icon: "fas fa-chart-area",
      deliverables: ["Prometheus setup", "Custom dashboards", "Alert management", "Log aggregation"]
    },
    {
      title: "Security & Compliance",
      description: "Pod security policies, network policies, secrets management",
      icon: "fas fa-shield-alt",
      deliverables: ["Security scanning", "Policy enforcement", "Secrets automation", "Compliance reporting"]
    },
    {
      title: "Migration & Modernization",
      description: "Legacy application containerization and K8s migration",
      icon: "fas fa-exchange-alt",
      deliverables: ["Assessment reports", "Migration strategy", "Containerization", "Performance optimization"]
    }
  ];

  const certifications = [
    { name: "Certified Kubernetes Administrator (CKA)", icon: "fab fa-kubernetes" },
    { name: "Certified Kubernetes Application Developer (CKAD)", icon: "fab fa-kubernetes" },
    { name: "AWS Certified Solutions Architect", icon: "fab fa-aws" },
    { name: "Azure Kubernetes Service Expert", icon: "fab fa-microsoft" }
  ];

  const successMetrics = [
    { metric: "99.9%", label: "Cluster Uptime" },
    { metric: "10,000+", label: "Pods Managed" },
    { metric: "50+", label: "K8s Clusters Deployed" },
    { metric: "90%", label: "Cost Reduction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-6 py-12">
        
        {/* Hero Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <motion.i 
              className="fab fa-kubernetes text-8xl text-blue-400"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Kubernetes <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expert</span> Consultant
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your containerized applications with enterprise-grade Kubernetes solutions. 
            CKA/CKAD certified consultant specializing in scalable, secure, and cost-effective K8s implementations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {successMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{item.metric}</div>
                <div className="text-gray-300 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-xl"
            >
              <a href="mailto:vieerdwivedi@gmail.com?subject=Kubernetes Consulting Inquiry" className="flex items-center">
                <i className="fab fa-kubernetes mr-2"></i>
                Get K8s Consultation
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-400 text-blue-300 hover:bg-blue-500/10 px-8 py-4 text-xl"
            >
              <a href="tel:+917045308204" className="flex items-center">
                <i className="fas fa-phone mr-2"></i>
                Call +91-7045308204
              </a>
            </Button>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2 text-sm">
                  <i className={`${cert.icon} mr-2`}></i>
                  {cert.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Kubernetes Consulting Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {k8sServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="bg-slate-800/50 border-slate-600 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 h-full">
                  <CardHeader className="text-center pb-4">
                    <motion.i 
                      className={`${service.icon} text-4xl text-blue-400 mb-4`}
                      whileHover={{ scale: 1.1 }}
                    />
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-blue-300 mb-3">Deliverables:</h4>
                      {service.deliverables.map((deliverable, delIndex) => (
                        <div key={delIndex} className="flex items-center text-sm text-gray-300">
                          <i className="fas fa-check text-green-400 mr-2 text-xs"></i>
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Me */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Why Choose My Kubernetes Expertise?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <i className="fas fa-rocket text-4xl text-blue-400 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Production Ready</h3>
                <p className="text-gray-300">Enterprise-grade K8s clusters with 99.9% uptime guarantee</p>
              </div>
              <div className="text-center">
                <i className="fas fa-dollar-sign text-4xl text-green-400 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Cost Optimized</h3>
                <p className="text-gray-300">Resource optimization resulting in 40-60% cost reduction</p>
              </div>
              <div className="text-center">
                <i className="fas fa-clock text-4xl text-orange-400 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Fast Deployment</h3>
                <p className="text-gray-300">Rapid cluster setup and application migration in weeks</p>
              </div>
              <div className="text-center">
                <i className="fas fa-shield-alt text-4xl text-purple-400 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
                <p className="text-gray-300">Zero-trust networking and comprehensive security policies</p>
              </div>
              <div className="text-center">
                <i className="fas fa-chart-line text-4xl text-red-400 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Full Observability</h3>
                <p className="text-gray-300">Complete monitoring, logging, and alerting ecosystem</p>
              </div>
              <div className="text-center">
                <i className="fas fa-graduation-cap text-4xl text-indigo-400 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Knowledge Transfer</h3>
                <p className="text-gray-300">Team training and documentation for self-sufficiency</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Modernize with Kubernetes?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's architect a robust, scalable Kubernetes solution tailored to your business needs. 
            Get a free consultation and deployment strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-10 py-4 text-xl"
            >
              <a href="mailto:vieerdwivedi@gmail.com?subject=Free Kubernetes Consultation" className="flex items-center">
                <i className="fas fa-calendar-plus mr-2"></i>
                Free Consultation
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-10 py-4 text-xl"
            >
              <Link href="/" className="flex items-center">
                <i className="fas fa-home mr-2"></i>
                View Portfolio
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}