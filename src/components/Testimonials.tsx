import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Tarek H.",
      text: "Fahs Construction turned my dream home into reality. They delivered on time and on budget with exceptional quality.",
      rating: 5,
      location: "Beirut"
    },
    {
      name: "Sarah M.",
      text: "Professional team, excellent communication, and outstanding results. Our office renovation exceeded all expectations.",
      rating: 5,
      location: "Tripoli"
    },
    {
      name: "Ahmad K.",
      text: "From planning to completion, Fahs Construction was professional and reliable. Highly recommend for any construction project.",
      rating: 5,
      location: "Nabatieh"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-smooth hover:-translate-y-2 border-2 hover:border-gold/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-lg text-muted-foreground text-center leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author */}
                <div className="text-center">
                  <div className="font-heading font-semibold text-primary text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;