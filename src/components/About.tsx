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
                Founded in 1998, Fahs Construction has been at the forefront of Lebanon's 
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
                <div className="text-3xl font-bold text-gold">27</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-2xl p-12 shadow-elegant text-white text-center">
              <h3 className="text-3xl font-heading font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-3 h-3 bg-gold rounded-full"></div>
                  <span className="text-lg">Licensed & Insured</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-3 h-3 bg-gold rounded-full"></div>
                  <span className="text-lg">Quality Guaranteed</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-3 h-3 bg-gold rounded-full"></div>
                  <span className="text-lg">On-Time Delivery</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-3 h-3 bg-gold rounded-full"></div>
                  <span className="text-lg">Competitive Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;