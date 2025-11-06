import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Healthcare Infrastructure Modernization",
      category: "Cloud & DevOps",
      description: "Led cloud migration and infrastructure optimization for healthcare platforms"
    },
    {
      title: "Enterprise Monitoring System",
      category: "Linux & DevOps",
      description: "Implemented comprehensive monitoring solutions using Nagios and Centreon"
    },
    {
      title: "Cloud Migration for Mental Health Platform",
      category: "AWS & Kubernetes",
      description: "Architected and executed AWS cloud migration with containerization"
    },
    {
      title: "Custom SDK/API Integrations",
      category: "Software Integration",
      description: "Developed custom integration solutions for enterprise applications"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-accent transition-smooth hover:shadow-elegant animate-scale-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-secondary rounded-full text-xs font-semibold text-accent">
                  {project.category}
                </span>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-smooth" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
