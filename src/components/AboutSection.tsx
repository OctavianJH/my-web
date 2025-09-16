import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          About Me
        </h2>
        
        <Card className="border border-primary/10 bg-card/30 backdrop-blur-sm shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg mb-8 text-center text-foreground/90 leading-relaxed font-light">
              I am a passionate coder, currently in Year 12. I am looking to develop my skills surrounding Machine Learning and AI.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Current A-Levels</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Computer Science
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Mathematics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Further Mathematics
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">GCSE Achievements</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Grade 8 Computer Science
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Grade 8 Mathematics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Grade 8 Physics
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};