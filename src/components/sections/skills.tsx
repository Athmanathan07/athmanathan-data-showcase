
import { useEffect, useState } from "react";
import { Code, Terminal, Cpu, Users, Globe } from "lucide-react";

interface Skill {
  name: string;
  icon: JSX.Element;
  items: string[];
}

const skillIcons = {
  "Programming Languages": <Code className="text-portfolio-accent mr-2 inline-block animate--once" />,
  "Developer Tools": <Terminal className="text-portfolio-accent mr-2 inline-block " />,
  "Frameworks/Libraries": <Cpu className="text-portfolio-accent mr-2 inline-block " />,
  "Soft Skills": <Users className="text-portfolio-accent mr-2 inline-block animate-" />,
  "Languages Spoken": <Globe className="text-portfolio-accent mr-2 inline-block animate--once" />
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skillCategories: Skill[] = [
    {
      name: "Programming Languages",
      icon: skillIcons["Programming Languages"],
      items: ["Python", "Java", "HTML", "CSS", "SQL"]
    },
    {
      name: "Developer Tools",
      icon: skillIcons["Developer Tools"],
      items: ["GitHub", "Power BI", "Google Colab", "Microsoft Azure", "Automation Anywhere"]
    },
    {
      name: "Frameworks/Libraries",
      icon: skillIcons["Frameworks/Libraries"],
      items: ["NumPy", "Pandas", "Seaborn", "Scikit-learn", "Advanced Excel"]
    },
    {
      name: "Soft Skills",
      icon: skillIcons["Soft Skills"],
      items: ["Leadership", "Communication", "Decision-Making", "Time Management"]
    },
    {
      name: "Languages Spoken",
      icon: skillIcons["Languages Spoken"],
      items: ["English", "Tamil", "Hindi"]
    }
  ];

  return (
    <section id="skills" className="bg-portfolio-gray-50 dark:bg-portfolio-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title colourful-underline animate-fade-in">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className={`card relative hover:shadow-portfolio-accent/40 ${isVisible ? 'animate-slide-up' : 'opacity-0'} skill- transition-transform hover:scale-105`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-portfolio-accent flex items-center">
                <span className="mr-2">{category.icon}</span> {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-portfolio-gray-100 dark:bg-portfolio-gray-700 rounded-full text-sm hover:bg-portfolio-accent/20 transition-all duration-300 icon- font-medium shadow-sm flex items-center gap-1"
                  >
                    {/* Fun animated bullet point with accent color */}
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-portfolio-accent animate-pulse"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
