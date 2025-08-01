import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`text-2xl font-heading font-bold transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              Fahs <span className="text-gold">Construction</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(link.href)}
                className={`font-medium transition-colors hover:text-gold ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Call Button */}
          <div className="hidden md:flex items-center">
            <Button
              variant={isScrolled ? "default" : "hero"}
              size="sm"
              onClick={() => window.location.href = 'tel:+96171123456'}
              className="group"
            >
              <Phone className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border">
            <nav className="py-4 space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-primary hover:bg-secondary/50 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => window.location.href = 'tel:+96171123456'}
                  className="w-full"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;