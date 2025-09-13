import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Big Education</span>
                <span className="text-xs text-slate-400">Malta</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted partner for studying abroad. We help students achieve their educational dreams worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                to="/about"
                className="block text-sm text-slate-400 hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/courses"
                className="block text-sm text-slate-400 hover:text-primary transition-colors"
              >
                Courses
              </Link>
              <Link
                to="/destinations"
                className="block text-sm text-slate-400 hover:text-primary transition-colors"
              >
                Study Destinations
              </Link>
              <Link
                to="/services"
                className="block text-sm text-slate-400 hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                to="/blog"
                className="block text-sm text-slate-400 hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Study Destinations */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Study Destinations</h3>
            <nav className="space-y-2">
              <a
                href="#"
                className="block text-sm text-slate-400 hover:text-primary transition-colors"
              >
                Australia
              </a>
              <a
                href="#"
                className="block text-sm text-slate-400 hover:text-primary transition-colors"
              >
                United Kingdom
              </a>
              <a
                href="#"
                className="block text-sm text-slate-400 hover:text-primary transition-colors"
              >
                Canada
              </a>
              <a
                href="#"
                className="block text-sm text-slate-400 hover:text-primary transition-colors"
              >
                United States
              </a>
              <a
                href="#"
                className="block text-sm text-slate-400 hover:text-primary transition-colors"
              >
                New Zealand
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-sm text-slate-400">
                  123 Republic Street<br />
                  Valletta VLT 1117<br />
                  Malta
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="tel:+35621234567"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  +356 2123 4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:info@bigeducationmalta.com"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  info@bigeducationmalta.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © 2024 Big Education Malta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;