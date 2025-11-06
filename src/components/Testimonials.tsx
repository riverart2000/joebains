import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  title: string;
  content: string;
  author: string;
  designation: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <section id="testimonials" className="py-20 px-6 gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">What Clients Say</p>
          <h2 className="text-4xl md:text-5xl font-bold">Professional Recommendations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary transition-smooth animate-scale-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-3">{testimonial.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground mt-1">{testimonial.designation}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

