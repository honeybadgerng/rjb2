import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-background/80 backdrop-blur-md shadow-sm"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              className="text-2xl font-bold gradient-text font-mokoto-glitch"
            >
              RJB<span className="text-foreground dark:text-white"> World</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <a
              href="#home"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </a> */}
            <a
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="/academy"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Academy
            </a>
            <a
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="/projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#blogs"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Blogs
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen
            ? "max-h-screen py-4 opacity-100 visible"
            : "max-h-0 py-0 opacity-0 invisible"
        } transition-all duration-300 ease-in-out overflow-hidden bg-background dark:bg-gray-900`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-4">
          {/* <a
            href="#home"
            className="text-sm font-medium py-2 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a> */}
          <a
            href="/about"
            className="text-sm font-medium py-2 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/academy"
            className="text-sm font-medium py-2 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Academy
          </a>
          <a
            href="#services"
            className="text-sm font-medium py-2 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="/projects"
            className="text-sm font-medium py-2 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#blogs"
            className="text-sm font-medium py-2 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </a>
          <a
            href="#contact"
            className="text-sm font-medium py-2 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
