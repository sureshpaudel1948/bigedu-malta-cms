import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileText, Briefcase, CheckCircle, MapPin, Upload } from "lucide-react";

const JobSeekers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background to-secondary/20">
          <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              For Job Seekers
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                {" "}Find Your Dream Job
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with opportunities through Stellar HR. Get guidance for both local and international placements with complete support from application to placement.
            </p>
          </div>
          </div>
        </section>

        {/* How We Help Job Seekers */}
        <section className="py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Support Your Career</h2>
              <p className="text-lg text-muted-foreground">
                From profile matching to interview preparation, we guide you through every step of the job search process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: "Profile Matching",
                  description: "We match your skills and experience with suitable job opportunities from our employer network."
                },
                {
                  icon: Users,
                  title: "Interview Preparation",
                  description: "Guidance and coaching to help you perform your best in interviews with potential employers."
                },
                {
                  icon: CheckCircle,
                  title: "Application Support",
                  description: "Assistance with job applications, CV optimization, and documentation requirements."
                },
                {
                  icon: MapPin,
                  title: "Location Flexibility",
                  description: "Access to opportunities across Malta, UAE, and Nepal through our international network."
                },
                {
                  icon: Briefcase,
                  title: "Industry Connections",
                  description: "Direct connections with employers in hospitality, healthcare, IT, construction, and more."
                },
                {
                  icon: Users,
                  title: "Ongoing Support",
                  description: "Continued guidance throughout the hiring process and beyond."
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

        {/* Popular Job Categories */}
        <section className="py-24 bg-secondary/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Popular Job Categories</h2>
              <p className="text-lg text-muted-foreground">
                Explore opportunities across various industries and skill levels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: "Hospitality", count: "50+ positions" },
                { category: "Healthcare", count: "30+ positions" },
                { category: "Construction", count: "40+ positions" },
                { category: "IT & Technology", count: "25+ positions" },
                { category: "Customer Service", count: "35+ positions" },
                { category: "Manufacturing", count: "20+ positions" },
                { category: "Retail", count: "15+ positions" },
                { category: "Administration", count: "18+ positions" }
              ].map((job, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{job.category}</h3>
                    <p className="text-sm text-muted-foreground">{job.count}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What We Need From You</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Required Documents</h3>
                  <div className="space-y-4">
                    {[
                      "Updated CV/Resume",
                      "Educational Certificates",
                      "Work Experience Letters",
                      "Professional References",
                      "Valid ID/Passport",
                      "Portfolio (if applicable)"
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Application Process</h3>
                  <div className="space-y-6">
                    {[
                      { step: "1", title: "Submit Application", desc: "Upload your CV and required documents" },
                      { step: "2", title: "Profile Review", desc: "Our team reviews your qualifications" },
                      { step: "3", title: "Job Matching", desc: "We match you with suitable opportunities" },
                      { step: "4", title: "Interview Setup", desc: "We coordinate interviews with employers" }
                    ].map((process, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {process.step}
                        </div>
                        <div>
                          <h4 className="font-semibold">{process.title}</h4>
                          <p className="text-sm text-muted-foreground">{process.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container">
            <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Career Journey?</h2>
              <p className="text-xl mb-8 opacity-90">
                Upload your CV today and let us connect you with the right employers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Upload CV Now
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

export default JobSeekers;