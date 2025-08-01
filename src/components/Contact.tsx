import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", phone: "", email: "", projectType: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+961 81 999 136",
      action: () => window.location.href = 'tel:+96181999136'
    },
    {
      icon: Mail,
      title: "Email",
      value: "fahs.construction@hotmail.com",
      action: () => window.location.href = 'mailto:fahs.construction@hotmail.com'
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Khaldeh, Lebanon",
      action: () => {}
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Message Us",
      action: () => window.open('https://wa.me/96181999136', '_blank')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your construction project? Contact us today for a free consultation and quote.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-slide-in-left shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Phone Number *
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+961 XX XXX XXX"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">
                    Project Type
                  </label>
                  <Select value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Construction</SelectItem>
                      <SelectItem value="commercial">Commercial Project</SelectItem>
                      <SelectItem value="renovation">Renovation/Restoration</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>
                
                <Button type="submit" variant="default" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-heading font-bold text-primary mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  onClick={info.action}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-background shadow-primary hover:shadow-gold transition-smooth cursor-pointer group"
                >
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">{info.title}</div>
                    <div className="text-muted-foreground">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Map Placeholder */}
            <Card className="shadow-elegant">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <div className="text-lg font-medium">Find Us in Khaldeh</div>
                    <div className="text-white/80">Lebanon</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;