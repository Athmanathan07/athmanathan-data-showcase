
import { useEffect, useState } from "react";
import { BadgeCheck, Cloud, GraduationCap } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  icon: JSX.Element;
}

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    const section = document.getElementById('certifications');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const certifications: Certification[] = [
    {
      id: 1,
      title: "Power BI Data Analyst Associate",
      issuer: "Microsoft",
      date: "May 2024",
      icon: <BadgeCheck className="text-white" />
    },
    {
      id: 2,
      title: "Machine Learning Engineer – Associate",
      issuer: "AWS",
      date: "Jan 2023",
      icon: <Cloud className="text-white" />
    },
    {
      id: 3,
      title: "Python Data Structures & Algorithms + LEETCODE",
      issuer: "Udemy",
      date: "Apr 2022",
      icon: <GraduationCap className="text-white" />
    }
  ];

  return (
    <section id="certifications" className="bg-white dark:bg-portfolio-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title colourful-underline animate-fade-in">Certifications</h2>

        <div className="max-w-3xl mx-auto">
          {certifications.map((certification, index) => (
            <div
              key={certification.id}
              className={`mb-6 bg-white dark:bg-portfolio-gray-800 rounded-lg shadow-md p-6 flex items-start gap-2 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mr-4 w-12 h-12 bg-portfolio-accent/90 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                {certification.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
                  <span className="text-portfolio-accent">🎖️</span> 
                  {certification.title}
                </h3>
                <p className="text-portfolio-gray-500 dark:text-portfolio-gray-400">
                  {certification.issuer}
                </p>
                <p className="text-portfolio-gray-500 dark:text-portfolio-gray-400 text-sm mt-1">
                  {certification.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
