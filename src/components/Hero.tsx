import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 px-4 min-h-[80vh] flex items-center">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Who we are ?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          
ShinerCM is a personal development and coaching platform dedicated to helping individuals overcome fears, build confidence, and cultivate self-love. It empowers people through focused reflection, growth strategies, and transformative workshops.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-primary to-accent hover:shadow-elevated transition-all duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
