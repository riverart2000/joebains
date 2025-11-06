import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import altodigitalLogo from "@/assets/altodigital-logo.png";
import btLogo from "@/assets/bt-logo.png";
import btcellnetLogo from "@/assets/btcellnet-logo.png";
import capgeminiLogo from "@/assets/capgemini-logo.png";
import cloudlynxLogo from "@/assets/CloudLynx.png";
import edsLogo from "@/assets/eds-logo.png";
import gameLogo from "@/assets/game-logo.png";
import genieLogo from "@/assets/Genie.png";
import o2Logo from "@/assets/o2-logo.jpeg";
import pcsLogo from "@/assets/ProfessionalCosmeticSurgery.png";
import skyLogo from "@/assets/sky-logo.jpeg";
import swisscomLogo from "@/assets/swisscom-logo.png";
import medicalparkLogo from "@/assets/themedicalpark.png";
import tmobileLogo from "@/assets/tmobile-logo.png";
import vodafoneLogo from "@/assets/vodafone-logo.png";
import brandThumb19 from "@/assets/brand-thumb-19.png";

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
  "btcellnet-logo.png": btcellnetLogo,
  "capgemini-logo.png": capgeminiLogo,
  "CloudLynx.png": cloudlynxLogo,
  "eds-logo.png": edsLogo,
  "game-logo.png": gameLogo,
  "Genie.png": genieLogo,
  "o2-logo.jpeg": o2Logo,
  "ProfessionalCosmeticSurgery.png": pcsLogo,
  "sky-logo.jpeg": skyLogo,
  "swisscom-logo.png": swisscomLogo,
  "themedicalpark.png": medicalparkLogo,
  "tmobile-logo.png": tmobileLogo,
  "vodafone-logo.png": vodafoneLogo,
  "brand-thumb-19.png": brandThumb19,
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
                      <Building2 className="w-8 h-8 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{exp.designation}</h3>
                    <p className="text-primary font-semibold mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    {exp.description && (
                      <p className="text-sm text-foreground/80 leading-relaxed">{exp.description}</p>
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
