import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import altodigitalLogo from "@/assets/altodigital-logo.png";
import btLogo from "@/assets/bt-logo.png";

interface ExperienceItem {
  designation: string;
  period: string;
  company: string;
  logo?: string;
  description?: string;
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

// Map of actual logo files we have
const availableLogos: { [key: string]: string } = {
  "altodigital-logo.png": altodigitalLogo,
  "bt-logo.png": btLogo,
};

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section id="experience" className="py-20 px-6 gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">Career Path</p>
          <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
        </div>
        <div className="space-y-6">
          {experience.map((exp, index) => {
            const companyName = exp.company.split("|")[0].trim();
            const hasActualLogo = exp.logo && availableLogos[exp.logo];
            const logoSrc = hasActualLogo ? availableLogos[exp.logo] : null;
            const isPlaceholder = exp.logo?.startsWith("placeholder-");
            
            return (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary transition-smooth animate-fade-in-left"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-secondary rounded-lg p-3 border-2 border-border">
                    {logoSrc ? (
                      <img 
                        src={logoSrc} 
                        alt={companyName} 
                        className="max-w-full max-h-full object-contain" 
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center w-full h-full">
                        <Building2 className="w-8 h-8 text-muted-foreground mb-1" />
                        {isPlaceholder && (
                          <span className="text-[8px] text-muted-foreground text-center leading-tight">
                            Add Logo
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{exp.designation}</h3>
                    <p className="text-primary font-semibold mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    {exp.description && (
                      <p className="text-sm text-foreground/80 leading-relaxed">{exp.description}</p>
                    )}
                    {isPlaceholder && (
                      <p className="text-xs text-muted-foreground/70 mt-2 italic">
                        Logo placeholder: {exp.logo?.replace("placeholder-", "").replace(".png", "")}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
