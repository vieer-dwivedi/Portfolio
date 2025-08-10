import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const sitemapData = [
  {
    section: "Main Pages",
    links: [
      {
        url: "/",
        title: "Home - Portfolio",
        description: "Main portfolio page showcasing DevOps expertise, skills, and experience",
        priority: "High",
        frequency: "Weekly"
      }
    ]
  },
  {
    section: "Portfolio Sections",
    links: [
      {
        url: "/#about",
        title: "About",
        description: "Professional background and DevOps engineering expertise overview",
        priority: "High",
        frequency: "Monthly"
      },
      {
        url: "/#skills",
        title: "Technical Skills",
        description: "Comprehensive list of DevOps, cloud, and automation technologies",
        priority: "High",
        frequency: "Monthly"
      },
      {
        url: "/#experience",
        title: "Professional Experience",
        description: "Work history and achievements in DevOps and cloud engineering",
        priority: "High",
        frequency: "Monthly"
      },
      {
        url: "/#certifications",
        title: "Certifications",
        description: "Professional certifications from AWS, Azure, and other cloud providers",
        priority: "Medium",
        frequency: "Monthly"
      },
      {
        url: "/#projects",
        title: "Featured Projects",
        description: "Showcase of DevOps implementations and infrastructure projects",
        priority: "High",
        frequency: "Weekly"
      },
      {
        url: "/#contact",
        title: "Contact Information",
        description: "Get in touch for DevOps consulting and contract opportunities",
        priority: "Medium",
        frequency: "Monthly"
      }
    ]
  },
  {
    section: "SEO Keywords Focus",
    links: [
      {
        url: "/",
        title: "DevOps Engineer for Hire",
        description: "Expert DevOps engineer available for global remote contracts",
        priority: "High",
        frequency: "Weekly"
      },
      {
        url: "/#skills",
        title: "AWS Azure GCP Specialist",
        description: "Multi-cloud infrastructure expertise across major platforms",
        priority: "High",
        frequency: "Monthly"
      },
      {
        url: "/#experience",
        title: "Kubernetes Consultant",
        description: "Container orchestration and microservices architecture expert",
        priority: "High",
        frequency: "Monthly"
      }
    ]
  }
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Site Map
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete navigation guide for Vieer Dwivedi's DevOps Engineering Portfolio. 
            Optimized for search engines to help potential clients find relevant services.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sitemapData.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <i className="fas fa-sitemap text-blue-400"></i>
                    {section.section}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.div
                      key={linkIndex}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                      className="border border-slate-600 rounded-lg p-4 hover:border-blue-400 transition-colors group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <a
                            href={link.url}
                            className="text-lg font-semibold text-blue-300 hover:text-blue-200 transition-colors group-hover:underline"
                          >
                            {link.title}
                          </a>
                          <p className="text-sm text-gray-400 mt-1">
                            {link.url}
                          </p>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Badge 
                            variant={link.priority === 'High' ? 'default' : 'secondary'}
                            className={link.priority === 'High' ? 'bg-green-600 hover:bg-green-700' : ''}
                          >
                            {link.priority}
                          </Badge>
                          <Badge variant="outline" className="text-gray-300 border-gray-500">
                            {link.frequency}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {link.description}
                      </p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/30 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <i className="fas fa-search text-blue-400"></i>
            SEO Optimization
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-blue-300 mb-2">Search Engine Benefits:</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• XML sitemap for automated crawling</li>
                <li>• Structured data for rich snippets</li>
                <li>• Optimized meta descriptions</li>
                <li>• Semantic HTML structure</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-300 mb-2">Target Keywords:</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• "DevOps Engineer hire"</li>
                <li>• "Kubernetes consultant"</li>
                <li>• "AWS Azure GCP specialist"</li>
                <li>• "Multi-cloud infrastructure expert"</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}