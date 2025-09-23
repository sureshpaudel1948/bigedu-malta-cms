import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Users } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        
        <Link to="/" className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6 text-primary-foreground"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.77L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold">Stellar HR Consultancy</span>
            <span className="text-xs text-muted-foreground">Consultancy</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Services
          </Link>
          <Link
            to="/employers"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            For Employers
          </Link>
          <Link
            to="/job-seekers"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            For Job Seekers
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="hero" size="lg">
            Submit Job Requirements
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <Link
              to="/"
              className="block py-2 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block py-2 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/employers"
              className="block py-2 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              For Employers
            </Link>
            <Link
              to="/job-seekers"
              className="block py-2 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              For Job Seekers
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <Button variant="hero" size="lg" className="w-full">
                Submit Job Requirements
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;