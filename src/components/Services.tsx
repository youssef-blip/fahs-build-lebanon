import { Home, Building2, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Modern homes, villas, and luxury residences crafted with precision and attention to detail.",
      features: ["Custom Home Design", "Villa Construction", "Apartment Buildings", "Interior Finishing"]
    },
    {
      icon: Building2,
      title: "Commercial Projects", 
      description: "Professional commercial spaces designed to enhance business productivity and growth.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Mixed-Use Developments"]
    },
    {
      icon: Wrench,
      title: "Renovations & Restorations",
      description: "Transform existing spaces with expert renovation and restoration services.",
      features: ["Kitchen Renovations", "Bathroom Remodeling", "Facade Restoration", "Complete Makeovers"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to meet your unique needs and vision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-smooth hover:-translate-y-2 border-2 hover:border-gold/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center justify-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;