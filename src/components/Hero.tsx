import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/JoeBainsBG.jpeg";

interface HeroProps {
  subtitle: string;
  title: string;
  roles: string[];
  description: string;
  experience: {
    years: string;
    text: string;
  };
}

export const Hero = ({ subtitle, title, roles, description, experience }: HeroProps) => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
      
      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
          {subtitle}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {title}
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {roles.map((role, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-secondary rounded-full text-sm font-medium animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {role}
            </span>
          ))}
        </div>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-smooth group"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book a FREE 15mins Consult
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
        </div>
        <div className="inline-flex items-center gap-4 px-6 py-4 bg-card rounded-2xl border border-border shadow-elegant">
          <div className="text-5xl font-bold text-primary animate-glow">{experience.years}</div>
          <div className="text-left">
            <div className="text-sm text-muted-foreground">{experience.text}</div>
            <div className="text-xs text-muted-foreground">in IT Industry</div>
          </div>
        </div>
      </div>
    </section>
  );
};
