import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI Debug Assistant",
    description: "Flask web app to help beginner Python coders learn and debug code.",
    tags: ["Python", "Flask", "AI", "Education"]
  },
  {
    title: "Muay Thai Technique Improver",
    description: "An App that uses MediaPipe and OpenPose to study a person's striking technique, and give pointers on improvement.",
    tags: ["Python", "MediaPipe", "OpenPose", "Computer Vision"]
  },
  {
    title: "Mini Python Games",
    description: "Primarily used to develop and help me improve at python, I created a series of Mini-Games.",
    tags: ["Python", "Game Development", "Learning"]
  },
  {
    title: "Portfolio Website",
    description: "Made this through a series of tutorials to try out making webpages using modern web technologies.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Web Development"]
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border border-primary/10 bg-card/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/20 group"
            >
              <CardHeader>
                <CardTitle className="text-primary group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};