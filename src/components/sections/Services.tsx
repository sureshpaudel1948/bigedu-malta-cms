import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Users, 
  GraduationCap, 
  Plane, 
  Shield, 
  MessageCircle,
  CheckCircle,
  Globe
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "University Application",
    description: "Complete assistance with university applications, document preparation, and submission process.",
    features: ["Application guidance", "Document review", "Deadline management", "Multiple applications"]
  },
  {
    icon: Shield,
    title: "Visa Assistance",
    description: "Expert visa consultation and support throughout the entire visa application process.",
    features: ["Visa consultation", "Document preparation", "Interview preparation", "Success guarantee*"]
  },
  {
    icon: Users,
    title: "Career Counseling",
    description: "Personalized career guidance to help you choose the right course and university.",
    features: ["Aptitude assessment", "Career mapping", "Course selection", "Future planning"]
  },
  {
    icon: Plane,
    title: "Pre-Departure Support",
    description: "Comprehensive support to prepare you for life abroad, from accommodation to cultural orientation.",
    features: ["Travel assistance", "Accommodation help", "Cultural orientation", "Airport pickup"]
  },
  {
    icon: GraduationCap,
    title: "Test Preparation",
    description: "IELTS, TOEFL, GRE, GMAT, and other standardized test preparation with expert trainers.",
    features: ["Expert trainers", "Mock tests", "Study materials", "Score guarantee"]
  },
  {
    icon: MessageCircle,
    title: "Post-Arrival Support",
    description: "Continued support even after you reach your destination country for a smooth transition.",
    features: ["Local assistance", "Bank account setup", "Mobile connection", "Ongoing support"]
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
              {" "}Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive support for your entire study abroad journey. From application to post-arrival, we're with you every step of the way.
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
              We've streamlined the study abroad process to make it as smooth and stress-free as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description: "Share your goals and get personalized guidance from our experts."
              },
              {
                step: "02", 
                title: "University Selection",
                description: "Choose the best universities and courses based on your profile."
              },
              {
                step: "03",
                title: "Application & Visa",
                description: "Complete application process and visa assistance with our support."
              },
              {
                step: "04",
                title: "Departure Ready",
                description: "Pre-departure support and post-arrival assistance for smooth transition."
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