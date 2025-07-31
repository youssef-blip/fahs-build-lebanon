import { Button } from "@/components/ui/button";
import { Phone, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const callNow = () => {
    window.location.href = 'tel:+96171123456';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Building the Future,{" "}
            <span className="text-gold">One Brick at a Time</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-body mb-8 text-white/90 max-w-2xl mx-auto">
            Trusted construction solutions across Lebanon. Reliable. Fast. Professional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Get a Free Quote
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              variant="gold" 
              size="lg"
              onClick={callNow}
              className="group"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;