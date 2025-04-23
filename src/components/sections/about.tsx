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
    <section
      id="about"
      className="bg-white dark:bg-portfolio-gray-900 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title colourful-underline">About Me</h2>

        <div
          className={`flex flex-col md:flex-row gap-10 items-center transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative group">
              <img
                src="/athma.jpg"
                alt="Athmanathan M T A"
                className="w-64 h-64 object-cover rounded-full border-4 border-white dark:border-portfolio-gray-800 shadow-lg z-10 relative group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-4">
                I am a curious and motivated individual with a deep interest in
                understanding how data shapes the world around us. I believe in
                the power of observation, pattern recognition, and thoughtful
                analysis to uncover meaningful insights that can drive change
                and innovation.
              </p>
              <p className="text-lg">
                With a background rooted in engineering and a growing passion
                for analytics, I aim to contribute to projects that are
                purposeful and data-driven. I enjoy working through challenges,
                continuously learning, and finding clarity in complexity — all
                while staying grounded, focused, and eager to make a
                positive impact.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center gap-2 shadow-md hover:scale-105 transition-transform"
                >
                  <Mail className="w-5 h-5 mr-1" />
                  Contact Me
                </a>
                <a
                  href="https://drive.google.com/file/d/1lsUCymRLmFfyXZW5pYHvZTPZ9g69VAF7/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2 border-2 border-portfolio-accent shadow-sm hover:shadow-lg transition-all"
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
