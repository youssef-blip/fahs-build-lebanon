import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

// Tailwind notes:
// - Replaced non-standard classes (e.g., shadow-primary, animate-scale-in)
//   with standard Tailwind utilities so it works out-of-the-box.
// - If you have a custom theme (primary/secondary colors), keep those; otherwise
//   you can swap them for neutral/emphasis colors.

const projects = [
  {
    id: 1,
    image: portfolio1,
    title: "Luxury Rooftop",
    category: "residential",
    description: "Modern luxury rooftop with contemporary design.",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Commercial Office",
    category: "commercial",
    description: "State-of-the-art office with sustainable features.",
  },
  {
    id: 3,
    image: portfolio3,
    title: "Kitchen Renovation",
    category: "renovation",
    description: "Complete kitchen transformation with modern amenities.",
  },
  {
    id: 4,
    image: portfolio4,
    title: "Residential Complex",
    category: "residential",
    description: "Multi-unit residential building with modern façade.",
  },
  {
    id: 5,
    image: portfolio5,
    title: "Luxury Bathroom",
    category: "renovation",
    description: "Premium bathroom renovation with marble finishes.",
  },
  {
    id: 6,
    image: portfolio6,
    title: "Perfume Shop",
    category: "commercial",
    description:
      "Elegant perfume boutique revamp—luminous shelving and brass accents.",
  },
];

const filters = [
  { key: "all", label: "All Projects" },
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
  { key: "renovation", label: "Renovations" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="portfolio" className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Our Portfolio
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our completed projects that showcase our commitment to
            excellence and innovation.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Portfolio filters">
          {filters.map((f) => {
            const isActive = filter === f.key;
            return (
              <Button
                key={f.key}
                variant={isActive ? "default" : "outline"}
                onClick={() => setFilter(f.key)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${f.key}`}
                className="transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                {f.label}
              </Button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          id={`panel-${filter}`}
          role="tabpanel"
          aria-live="polite"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{ viewTransitionName: `card-${project.id}` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={`Preview of ${project.title} — ${project.description}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Text */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-white text-lg font-semibold drop-shadow-sm">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-white/90 text-sm">
                    {project.description}
                  </p>
                  <span className="mt-3 inline-block rounded-md bg-white/20 px-2 py-1 text-[11px] font-medium text-white backdrop-blur">
                    {project.category}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
