import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Python", level: 88 },
  { name: "SciKit Learn and Numpy", level: 75 },
  { name: "Flask", level: 64 }
];

const education = [
  {
    institution: "King's School Rochester",
    description: "Joined in Year 10 - Now in Year 12. Grades: 10 GCSEs, All grades 9-7.",
    link: "https://kings-rochester.co.uk/"
  }
];

const certifications = [
  "Harvard CS50P",
  "Harvard CS50AI",
  "Academic Scholarship for 6th Form"
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Skills & Education
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skills */}
          <Card className="border border-primary/10 bg-card/30 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary text-sm">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-muted"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Education */}
          <div className="space-y-6">
            <Card className="border border-primary/10 bg-card/30 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary">Education</CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="font-semibold text-accent mb-2">
                      <a 
                        href={edu.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors duration-200"
                      >
                        {edu.institution}
                      </a>
                    </h4>
                    <p className="text-foreground">{edu.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="border border-primary/10 bg-card/30 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};