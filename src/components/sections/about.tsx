
import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="bg-white dark:bg-portfolio-gray-900 font-sans">
      <div className="container mx-auto px-4">
        <h2 className="section-title colourful-underline animate-fade-in">About Me</h2>
        <div className={`flex flex-col md:flex-row gap-10 items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-1 border-2 border-portfolio-accent rounded-full blur-[1.5px] opacity-70"></div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=400&h=400"
                alt="Athmanathan M T A"
                className="w-64 h-64 object-cover rounded-full border-4 border-white dark:border-portfolio-gray-800 shadow-lg z-10 relative group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 -right-2 bg-portfolio-accent text-white p-2 rounded-full shadow-lg">
                <Mail className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="prose prose-lg dark:prose-invert max-w-none font-sans">
              <p className="text-lg mb-4">I&apos;m a passionate data enthusiast with a solid foundation in engineering and analytics. I&apos;ve worked on real-time data pipelines, cloud-based processing, and business dashboard development to translate data into meaningful insights.</p>
              <p className="text-lg">Currently aiming to become a Data Analyst, I thrive on problem-solving and storytelling with data — helping teams and businesses make informed, data-driven decisions.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center gap-2 shadow-md hover-scale-soft transition-transform"
                >
                  <Mail className="w-5 h-5 mr-1" />
                  Contact Me
                </a>
                <a
                  href="https://drive.google.com/file/d/1lsUCymRLmFfyXZW5pYHvZTPZ9g69VAF7/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2 border-2 border-portfolio-accent shadow-sm hover:shadow-lg transition-all hover-scale-soft"
                >
                  <span className="inline-block">↓</span>
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
