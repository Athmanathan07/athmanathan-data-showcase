
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-portfolio-gray-300 mb-4 md:mb-0">
            © {currentYear} Athmanathan M T A. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Athmanathan07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-portfolio-gray-300 hover:text-portfolio-accent transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/athmanathan-mta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-portfolio-gray-300 hover:text-portfolio-accent transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
