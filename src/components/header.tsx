import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Certifications", href: "#certifications" },
    { title: "Education", href: "#education" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-portfolio-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      } font-sans`}
    >
      <div className="container mx-auto py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-heading font-semibold text-portfolio-gray-900 dark:text-white underline-animated flex items-center gap-2">
          <Mail className="text-portfolio-accent w-7 h-7 mr-1" aria-label="Email" />
          Athmanathan<span className="text-portfolio-accent">.MTA</span>
        </a>

        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="px-4 py-2 rounded-md text-portfolio-gray-700 dark:text-portfolio-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent transition-colors navlink-animated font-sans"
            >
              {item.title === "Contact" && <Mail className="inline-block mr-1 w-4 h-4" />}
              {item.title}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <a
              href="mailto:athmanathanmta@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="p-2 text-portfolio-accent bg-white dark:bg-portfolio-gray-900 rounded-full shadow-md hover-scale-soft transition-all ring-2 ring-portfolio-accent/20"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Athmanathan07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-portfolio-gray-700 dark:text-portfolio-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent hover-scale-soft transition-all"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/athmanathan-mta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-portfolio-gray-700 dark:text-portfolio-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent hover-scale-soft transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <ThemeToggle />
          </div>
          <Button
            asChild
            className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white transition-transform hover-scale-soft shadow-lg"
          >
            <a
              href="https://drive.google.com/file/d/1lsUCymRLmFfyXZW5pYHvZTPZ9g69VAF7/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>
        </div>

        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="p-2 text-portfolio-accent focus:outline-none"
            onClick={toggleMenu}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current rounded transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2 bg-portfolio-accent" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-current rounded transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-current rounded transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2 bg-portfolio-accent" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-white dark:bg-portfolio-gray-900 shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <nav className="container mx-auto py-4 flex flex-col space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="px-4 py-2 rounded-md text-portfolio-gray-700 dark:text-portfolio-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
          <div className="flex items-center space-x-4 px-4 pt-4 border-t border-portfolio-gray-200 dark:border-portfolio-gray-700">
            <a
              href="mailto:athmanathanmta@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="p-2 text-portfolio-accent bg-white dark:bg-portfolio-gray-900 rounded-full shadow-md hover-scale-soft transition-all ring-2 ring-portfolio-accent/20"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Athmanathan07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-portfolio-gray-700 dark:text-portfolio-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/athmanathan-mta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-portfolio-gray-700 dark:text-portfolio-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <div className="px-4 pb-4">
            <Button
              asChild
              className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90 text-white transition-transform hover-scale-soft shadow-lg"
            >
              <a
                href="https://drive.google.com/file/d/1lsUCymRLmFfyXZW5pYHvZTPZ9g69VAF7/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
