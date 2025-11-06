import { Card } from "@/components/ui/card";

interface AboutProps {
  description: string;
}

export const About = ({ description }: AboutProps) => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">Get to Know Me</p>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </div>
        <Card className="p-8 md:p-12 bg-card border-border shadow-elegant animate-scale-in">
          <p className="text-lg leading-relaxed text-foreground">
            {description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-4 bg-secondary rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-secondary rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center p-4 bg-secondary rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Trainings Given</div>
            </div>
            <div className="text-center p-4 bg-secondary rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
