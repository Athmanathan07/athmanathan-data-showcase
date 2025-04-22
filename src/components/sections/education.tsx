
import { useEffect, useState } from "react";

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  score: string;
}

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    const section = document.getElementById('education');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const educations: Education[] = [
    {
      id: 1,
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Lovely Professional University",
      duration: "2022–2026",
      score: "CGPA: 6.7"
    },
    {
      id: 2,
      degree: "Senior Secondary School, 12th",
      institution: "Arasan Model School",
      duration: "",
      score: "79%"
    },
    {
      id: 3,
      degree: "Higher Secondary School, 10th",
      institution: "Arasan Mount Litera Zee School",
      duration: "",
      score: "83%"
    }
  ];

  return (
    <section id="education" className="bg-white dark:bg-portfolio-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title colourful-underline animate-fade-in">Education</h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-portfolio-gray-200 dark:bg-portfolio-gray-700 z-0 animate-glow"></div>

          {educations.map((education, index) => (
            <div
              key={education.id}
              className={`mb-8 pl-12 relative z-10 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot with pulse animation */}
              <div className="absolute left-0 w-6 h-6 bg-portfolio-accent rounded-full flex items-center justify-center shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>

              <div className="bg-white dark:bg-portfolio-gray-800 rounded-lg shadow-md p-6 hover:scale-105 hover:shadow-xl transition-transform duration-300">
                <h3 className="text-xl font-medium mb-1 flex items-center gap-2">
                  {index === 0 ? (
                    <svg className="w-5 h-5 text-portfolio-accent animate-pulse mr-1" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle></svg>
                  ) : null}
                  {education.degree}
                </h3>
                <p className="text-portfolio-gray-500 dark:text-portfolio-gray-400 mb-2">
                  {education.institution} {education.duration && `(${education.duration})`}
                </p>
                <p className="text-sm inline-block bg-portfolio-gray-100 dark:bg-portfolio-gray-700 px-3 py-1 rounded-full">
                  {education.score}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
