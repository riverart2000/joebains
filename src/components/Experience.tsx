import { Card } from "@/components/ui/card";
import altodigitalLogo from "@/assets/altodigital-logo.png";
import btLogo from "@/assets/bt-logo.png";

interface ExperienceItem {
  designation: string;
  period: string;
  company: string;
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

const logos: { [key: string]: string } = {
  "Alto Digital": altodigitalLogo,
  "BT": btLogo,
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
            const logo = logos[companyName];
            
            return (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary transition-smooth animate-fade-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {logo && (
                    <div className="w-20 h-20 flex items-center justify-center bg-white rounded-lg p-2">
                      <img src={logo} alt={companyName} className="max-w-full max-h-full object-contain" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{exp.designation}</h3>
                    <p className="text-primary font-semibold mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
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
