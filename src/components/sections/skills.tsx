
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  items: string[];
}

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
      items: ["Python", "Java", "HTML", "CSS", "SQL"]
    },
    {
      name: "Developer Tools",
      items: ["GitHub", "Power BI", "Google Colab", "Microsoft Azure", "Automation Anywhere"]
    },
    {
      name: "Frameworks/Libraries",
      items: ["NumPy", "Pandas", "Seaborn", "Scikit-learn", "Advanced Excel"]
    },
    {
      name: "Soft Skills",
      items: ["Leadership", "Communication", "Decision-Making", "Time Management"]
    },
    {
      name: "Languages Spoken",
      items: ["English", "Tamil", "Hindi"]
    }
  ];

  return (
    <section id="skills" className="bg-portfolio-gray-50 dark:bg-portfolio-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name}
              className={`card ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-medium mb-4 text-portfolio-accent">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-portfolio-gray-100 dark:bg-portfolio-gray-700 rounded-full text-sm"
                  >
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
