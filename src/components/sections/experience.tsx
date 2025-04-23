import { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  location: string;
  logo: string;
}

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("experience");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Data Science Intern",
      company: "Futurense",
      duration: "June 2024 – August 2024",
      location: "Remote, India",
      description: `
      Gained hands-on experience with modern data engineering tools and led key initiatives, including the backend development of a Byju’s replica website and real-time analytics for the US Pathway project. Designed and implemented a scalable end-to-end data pipeline using Azure and Databricks, delivering actionable insights and driving business performance.
      `,
      logo: "/public/futurense_logo.jpg",
    },
  ];

  return (
    <section id="experience" className="bg-white dark:bg-portfolio-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title colourful-underline">Work Experience</h2>
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-portfolio-gray-200 dark:bg-portfolio-gray-700 z-0"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`mb-8 pl-12 relative z-10 transition-opacity duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 w-6 h-6 bg-portfolio-accent rounded-full flex items-center justify-center shadow-lg">
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              <div className="bg-white dark:bg-portfolio-gray-800 rounded-lg shadow-md p-6 hover:scale-105 hover:shadow-xl transition-transform duration-300 flex-1 flex flex-col items-center">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-16 h-16 mb-4 object-contain rounded-full border-2 border-purple-400 shadow-md bg-white dark:bg-portfolio-gray-800"
                />
                <h3 className="text-xl font-medium mb-1 flex items-center gap-2">
                  {exp.title}
                </h3>
                <p className="text-portfolio-gray-500 dark:text-purple-400 mb-2">
                  {exp.company} – {exp.location}{" "}
                  <span className="ml-2 text-xs bg-portfolio-gray-100 dark:bg-portfolio-gray-700 px-2 py-0.5 rounded-full">
                    {exp.duration}
                  </span>
                </p>
                <p className="text-portfolio-gray-600 dark:text-portfolio-gray-300">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
