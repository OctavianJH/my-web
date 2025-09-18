import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const handleGithubClick = () => {
    window.open('https://github.com/OctavianJH', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://linkedin.com/in/octavian-humphreys-01baba176/', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:octavianjhumphreys@icloud.com';
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="text-center z-10 px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Octavian Humphreys
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-2 max-w-3xl mx-auto">
          Aspiring Machine Learning and AI Engineer - Currently 16 Years Old
        </p>
        
        <p className="text-md text-muted-foreground mb-8">
          Looking for Work Experience for Jan 2026 • Located in London, UK
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              onClick={handleGithubClick}
            >
              <Github className="w-4 h-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              onClick={handleLinkedinClick}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              onClick={handleEmailClick}
            >
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-accent/40 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-8 w-1 h-1 bg-primary/50 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};