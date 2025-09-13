import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Award } from "lucide-react";
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
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Malta's Trusted Education Partner</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transform Your
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent block">
              Educational Dreams
            </span>
            Into Reality
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Your gateway to world-class education. We provide expert guidance for studying in Australia, UK, Canada, USA, and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="group">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              Watch Success Stories
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-3xl font-bold">5000+</span>
              </div>
              <p className="text-slate-300">Happy Students</p>
            </div>
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Award className="h-6 w-6 text-primary" />
                <span className="text-3xl font-bold">15+</span>
              </div>
              <p className="text-slate-300">Years of Excellence</p>
            </div>
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Globe className="h-6 w-6 text-primary" />
                <span className="text-3xl font-bold">50+</span>
              </div>
              <p className="text-slate-300">University Partners</p>
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