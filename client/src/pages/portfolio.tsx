import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import CertificationsSection from "@/components/certifications-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p>&copy; 2024 Vieer Dwivedi. All rights reserved.</p>
            <p className="mt-2">DevOps Engineer | Multi-Cloud Specialist | Available for Hire</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
