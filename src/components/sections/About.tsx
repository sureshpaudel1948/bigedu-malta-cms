import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Users, Globe, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose 
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  {" "}Stellar Spark HR Consultancy?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Stellar HR Consultancy is a professional HR solutions provider based in Malta, with branches in Dubai (UAE) and Nepal. We specialize in helping employers find qualified workers both locally and internationally. We are not an employer ourselves – the hiring company remains the direct employer. Our role is to support and streamline the recruitment process.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Global Expertise</h3>
                  <p className="text-muted-foreground">Extensive experience in international recruitment with deep understanding of global workforce needs.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Expert Leadership Team</h3>
                  <p className="text-muted-foreground">Led by Joseph SAMMUT (Owner), Purna B. (Operations Manager), and Suraj KC (Regional Head).</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Multi-Location Network</h3>
                  <p className="text-muted-foreground">Strategic offices across Malta, Dubai (UAE), and Nepal providing comprehensive regional coverage.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Employer-Centric Approach</h3>
                  <p className="text-muted-foreground">We work exclusively on behalf of employers to ensure they find the right talent for their teams.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button variant="hero" size="lg">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground border-0">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold mb-2">8000+</div>
                <div className="text-primary-foreground/80">Successful Candidate Placements</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-elegant">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Employer Satisfaction Rate</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-elegant">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Trusted Business Clients</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-100 to-slate-200 border-0">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-slate-700 mb-2">10+</div>
                <div className="text-slate-600">Years of Industry Experience</div>
              </CardContent>
            </Card>

            {/* Testimonial Card */}
            <Card className="col-span-2 bg-gradient-to-r from-slate-50 to-white border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">SB</span>
                  </div>
                  <div>
                    <div className="font-semibold">Mark Azzopardi</div>
                    <div className="text-sm text-muted-foreground">General Manager, Hospitality Group Malta</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Stellar HR Consultancy made our recruitment process seamless. Their team connected us with skilled professionals quickly and efficiently. Truly a reliable partner for any business."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;