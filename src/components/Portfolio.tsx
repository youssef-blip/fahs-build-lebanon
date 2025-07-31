import { useState } from "react";
import { Button } from "@/components/ui/button";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      image: portfolio1,
      title: "Luxury Villa Beirut",
      category: "residential",
      description: "Modern luxury villa with contemporary design"
    },
    {
      id: 2,
      image: portfolio2,
      title: "Commercial Office Complex",
      category: "commercial",
      description: "State-of-the-art office building with sustainable features"
    },
    {
      id: 3,
      image: portfolio3,
      title: "Kitchen Renovation",
      category: "renovation",
      description: "Complete kitchen transformation with modern amenities"
    },
    {
      id: 4,
      image: portfolio4,
      title: "Residential Complex",
      category: "residential",
      description: "Multi-unit residential building with modern facade"
    },
    {
      id: 5,
      image: portfolio5,
      title: "Luxury Bathroom",
      category: "renovation",
      description: "Premium bathroom renovation with marble finishes"
    },
    {
      id: 6,
      image: portfolio6,
      title: "Industrial Warehouse",
      category: "commercial",
      description: "Large-scale industrial construction project"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "residential", label: "Residential" },
    { key: "commercial", label: "Commercial" },
    { key: "renovation", label: "Renovations" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our completed projects that showcase our commitment to excellence and innovation.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filterOption) => (
              <Button
                key={filterOption.key}
                variant={filter === filterOption.key ? "default" : "outline"}
                onClick={() => setFilter(filterOption.key)}
                className="transition-smooth"
              >
                {filterOption.label}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-primary hover:shadow-elegant transition-smooth hover:-translate-y-2 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-heading font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;