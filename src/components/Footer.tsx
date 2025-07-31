import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/fahsconstruction",
      label: "Facebook"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/fahsconstruction",
      label: "Instagram"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/96171123456",
      label: "WhatsApp"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 text-gold">
              Fahs Construction
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Building the future of Lebanon with quality construction services. 
              From residential homes to commercial projects, we deliver excellence 
              in every brick we lay.
            </p>
            <div className="text-sm text-white/60">
              Est. 2010 • Licensed & Insured
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3 mb-6">
              <div className="text-white/80">
                📞 +961 71 123 456
              </div>
              <div className="text-white/80">
                ✉️ info@fahsconstruction.com
              </div>
              <div className="text-white/80">
                📍 Beirut, Lebanon
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:scale-110 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © {currentYear} Fahs Construction - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;