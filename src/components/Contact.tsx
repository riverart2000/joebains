import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Github, Youtube } from "lucide-react";

interface ContactProps {
  title: string;
  location: string;
}

export const Contact = ({ title, location }: ContactProps) => {
  return (
    <section id="contact" className="py-20 px-6 gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{title}</p>
        </div>
        
        <Card className="p-8 md:p-12 bg-card border-border shadow-elegant animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground">{location}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:contact@joebains.com" className="text-muted-foreground hover:text-primary transition-smooth">
                  contact@joebains.com
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <h3 className="font-semibold mb-4 text-center">Connect on Social Media</h3>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="border-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open("https://www.linkedin.com/in/joebains/", "_blank")}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open("https://github.com/joebains", "_blank")}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open("https://www.youtube.com/c/joebains", "_blank")}
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-smooth"
              onClick={() => window.open("https://linktr.ee/joebains", "_blank")}
            >
              Book a FREE 15mins Consult
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
