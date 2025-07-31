import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              About Fahs Construction
            </h2>
            <div className="space-y-6 text-lg font-body text-muted-foreground">
              <p>
                Founded in 2010, Fahs Construction has been at the forefront of Lebanon's 
                construction industry, transforming visions into reality with unwavering 
                commitment to excellence.
              </p>
              <p>
                Our mission is to deliver superior construction services that exceed 
                expectations while maintaining the highest standards of quality, safety, 
                and professionalism. We believe in building not just structures, but 
                lasting relationships with our clients.
              </p>
              <p>
                Clients choose us because of our proven track record, attention to detail, 
                timely delivery, and competitive pricing. With over 200 successful projects 
                completed, we've earned the trust of homeowners and businesses across Lebanon.
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">200+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">13</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src={teamPhoto}
                alt="Fahs Construction Team"
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;