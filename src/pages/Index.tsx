import Header from "@/components/header";
import AboutSection from "@/components/sections/about";
import ExperienceSection from "@/components/sections/experience";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import CertificationsSection from "@/components/sections/certifications";
import YoutubeSection from "@/components/sections/youtube";
import EducationSection from "@/components/sections/education";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <YoutubeSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
