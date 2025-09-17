import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  UserCheck, 
  Briefcase, 
  Globe, 
  Shield, 
  MessageCircle,
  CheckCircle,
  Building2
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "HR Consultancy Services",
    description: "Guiding companies in workforce planning and hiring strategies tailored to your business needs.",
    features: ["Strategic workforce planning", "Custom hiring strategies", "HR process optimization", "Compliance guidance"]
  },
  {
    icon: UserCheck,
    title: "Local & International Recruitment Support",
    description: "Connecting employers with skilled candidates from Malta and international markets abroad.",
    features: ["Local Malta recruitment", "International talent sourcing", "Candidate screening", "Skills verification"]
  },
  {
    icon: Briefcase,
    title: "Interview Coordination",
    description: "Arranging and supporting interviews between employers and potential candidates.",
    features: ["Interview scheduling", "Candidate preparation", "Employer briefing", "Process coordination"]
  },
  {
    icon: Globe,
    title: "Hiring Process Assistance",
    description: "Helping with shortlisting, documentation guidance, and onboarding support processes.",
    features: ["Candidate shortlisting", "Documentation assistance", "Onboarding guidance", "Legal compliance"]
  },
  {
    icon: Building2,
    title: "Employer-Centric Solutions",
    description: "Working only on behalf of employers to ensure they find the right people for their teams.",
    features: ["Employer-first approach", "Tailored recruitment", "Risk reduction", "Quality assurance"]
  },
  {
    icon: MessageCircle,
    title: "Multi-Location Support",
    description: "Access to talent pools across Malta, UAE, and Nepal through our established networks.",
    features: ["Malta headquarters", "Dubai UAE branch", "Nepal operations", "Cross-border coordination"]
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {" "}HR Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive HR consultancy services bridging employers with the right talent. We streamline your recruitment process from start to finish.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Steps */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our Simple 4-Step Process
            </h3>
            <p className="text-lg text-muted-foreground">
              We've streamlined the recruitment process to make it as efficient and effective as possible for both employers and job seekers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "We understand your hiring needs and company culture to find the perfect match."
              },
              {
                step: "02", 
                title: "Candidate Sourcing",
                description: "Access our networks in Malta, UAE, and Nepal to find qualified candidates."
              },
              {
                step: "03",
                title: "Screening & Matching",
                description: "Thorough candidate evaluation and matching based on your specific requirements."
              },
              {
                step: "04",
                title: "Interview & Onboarding",
                description: "Coordinate interviews and provide support through the hiring and onboarding process."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">{process.step}</span>
                </div>
                <h4 className="text-xl font-bold mb-4">{process.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;