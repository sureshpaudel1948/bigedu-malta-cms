import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, CheckCircle, Clock, Globe, UserCheck } from "lucide-react";

const Employers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background to-secondary/20">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
                <Building2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">For Employers</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Find the 
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  {" "}Right Talent
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We connect you with qualified workers from Malta and international markets. 
                Focus on your business while we handle the recruitment process.
              </p>
              <Button size="lg" className="group">
                Submit Job Requirements
                <UserCheck className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Support Employers</h2>
              <p className="text-lg text-muted-foreground">
                We streamline your hiring process from start to finish, ensuring you find the right candidates efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Candidate Sourcing",
                  description: "Access to qualified local and international talent pools across multiple industries."
                },
                {
                  icon: UserCheck,
                  title: "Pre-screening",
                  description: "Thorough candidate evaluation and background verification before presenting to you."
                },
                {
                  icon: Clock,
                  title: "Interview Coordination",
                  description: "We arrange and coordinate interviews between you and potential candidates."
                },
                {
                  icon: CheckCircle,
                  title: "Documentation Support",
                  description: "Assistance with work permits, visa processing, and employment documentation."
                },
                {
                  icon: Globe,
                  title: "International Reach",
                  description: "Tap into talent from our networks in Malta, UAE, and Nepal."
                },
                {
                  icon: Building2,
                  title: "Industry Expertise",
                  description: "Specialized knowledge in hospitality, construction, healthcare, and more."
                }
              ].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-24 bg-secondary/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
              <p className="text-lg text-muted-foreground">
                From hospitality to healthcare, we have experience across multiple sectors.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Hotels & Restaurants",
                "Healthcare",
                "Construction",
                "IT & Technology",
                "Manufacturing",
                "Retail",
                "Tourism",
                "Logistics"
              ].map((industry, index) => (
                <div key={index} className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-sm">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container">
            <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Next Employee?</h2>
              <p className="text-xl mb-8 opacity-90">
                Submit your job requirements and let us connect you with the right candidates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Submit Job Requirements
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Employers;