import { useState } from "react";
import { TerminalLogin } from "@/components/TerminalLogin";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CVDownload } from "@/components/CVDownload";
import { MobileNav } from "@/components/MobileNav";
import { DesktopNav } from "@/components/DesktopNav";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  if (!showPortfolio) {
    return <TerminalLogin onComplete={() => setShowPortfolio(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <CVDownload />
      <MobileNav />
      <DesktopNav />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
