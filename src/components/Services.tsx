import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, GraduationCap, MessageCircle, Mic } from "lucide-react";


const services = [
  {
    icon: Sprout,
    title: "Coaching / Personal Development Sessions",
    description: "One-on-one or group coaching to help clients identify goals, build confidence, and overcome inner barriers.",
  },
  {
    icon: GraduationCap,
    title: "Workshops",
    description: "Structured multi-day or themed workshops (e.g. self-love, emotional growth) to teach tools and practices.",
  },
  {
    icon: MessageCircle,
    title: "Free Consultations",
    description: "Introductory calls or assessments so potential clients can explore fit and what coaching would look like.",
  },
  {
    icon: Mic,
    title: "Podcast / Content",
    description: "Audio or written content to support personal growth (e.g. lectures, reflections, interviews).",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
          Comprehensive personal growth solutions tailored to your self-development journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
