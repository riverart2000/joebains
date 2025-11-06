import { Card } from "@/components/ui/card";
import { Server, GitBranch, Database, GraduationCap } from "lucide-react";

interface Service {
  title: string;
  description: string;
}

interface ServicesProps {
  services: Service[];
}

const icons = [Server, GitBranch, Database, GraduationCap];

export const Services = ({ services }: ServicesProps) => {
  return (
    <section id="services" className="py-20 px-6 gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-bold">My Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary transition-smooth hover:shadow-glow animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mb-6 group-hover:animate-glow">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
