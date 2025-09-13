import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, GraduationCap } from "lucide-react";

const destinations = [
  {
    country: "Australia",
    description: "World-class universities with excellent post-study work opportunities and multicultural environment.",
    students: "2.5M+",
    universities: "40+",
    image: "🇦🇺",
    features: ["Post-study work visa", "High quality of life", "English-speaking", "Research excellence"]
  },
  {
    country: "United Kingdom",
    description: "Home to prestigious institutions like Oxford and Cambridge with rich academic heritage.",
    students: "500K+",
    universities: "130+",
    image: "🇬🇧",
    features: ["Historic universities", "1-year master's", "Graduate route visa", "Cultural diversity"]
  },
  {
    country: "Canada",
    description: "Affordable education with excellent immigration pathways and welcoming communities.",
    students: "800K+",
    universities: "100+",
    image: "🇨🇦",
    features: ["Affordable tuition", "PR pathways", "Safe environment", "Bilingual advantage"]
  },
  {
    country: "United States",
    description: "Leading innovation hub with flexible curriculum and extensive research opportunities.",
    students: "1M+",
    universities: "200+",
    image: "🇺🇸",
    features: ["Flexible programs", "Research opportunities", "Networking", "Innovation hub"]
  },
  {
    country: "New Zealand",
    description: "Quality education in stunning natural environment with friendly local culture.",
    students: "125K+",
    universities: "8+",
    image: "🇳🇿",
    features: ["Natural beauty", "Small class sizes", "Work opportunities", "Safe country"]
  },
  {
    country: "Germany",
    description: "Free or low-cost education with strong engineering and technical programs.",
    students: "400K+",
    universities: "400+",
    image: "🇩🇪",
    features: ["Low tuition fees", "Engineering excellence", "Industry connections", "Central Europe"]
  }
];

const StudyDestinations = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-slate-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Study 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}Destinations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover world-class education opportunities across the globe. From prestigious universities to innovative programs, find your perfect study destination.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card key={destination.country} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Country Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{destination.image}</span>
                    <h3 className="text-2xl font-bold">{destination.country}</h3>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {destination.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="font-bold text-primary">{destination.students}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">International Students</p>
                  </div>
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span className="font-bold text-primary">{destination.universities}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Universities</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {destination.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            Get Personalized Guidance
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudyDestinations;