import { AboutSection } from "@/components/AboutSection";
import { BlogsSection } from "@/components/BlogsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ForNgo } from "@/components/ForNgo";
import Foundation from "@/components/Foundation";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Foundation />
        <ForNgo />

        <ServicesSection />
        <ProjectsSection />
        {/* <BlogsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
