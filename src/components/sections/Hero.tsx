import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Award, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students studying abroad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-primary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Malta's Trusted HR Solutions Partner</span>
          </div>

          {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Work Global.
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent block">
                Recruit Globally
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              With dedicated global local teams, our experts are on hand to get you started on your global journey. Professional HR solutions across Malta, UAE, and Nepal.
            </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="group">
              Find Talent Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              View Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-3xl font-bold">500+</span>
              </div>
              <p className="text-slate-300">Successful Placements</p>
            </div>
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="text-3xl font-bold">3</span>
              </div>
              <p className="text-slate-300">Countries (Malta, UAE, Nepal)</p>
            </div>
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Award className="h-6 w-6 text-primary" />
                <span className="text-3xl font-bold">100+</span>
              </div>
              <p className="text-slate-300">Partner Companies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;