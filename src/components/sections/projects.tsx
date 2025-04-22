
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  results: string;
  image: string;
}

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('projects');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Futurense US Pathway",
      description: "Created interactive Power BI dashboards visualizing marketing campaign results and customer demographics for US expansion strategy.",
      technologies: ["Power BI", "Azure Data Factory", "SQL"],
      results: "Improved decision-making with real-time analytics and automated data pipelines.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      title: "ICC Batting Analysis",
      description: "Developed predictive models to analyze cricket batsmen performance across formats and conditions.",
      technologies: ["Python", "Pandas", "Seaborn", "Scikit-learn"],
      results: "Identified key performance patterns and created visualizations to highlight batting trends across different match formats.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="projects" className="bg-white dark:bg-portfolio-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title colourful-underline animate-fade-in">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`overflow-hidden rounded-lg shadow-md transition-all hover:shadow-portfolio-accent/30 hover:-translate-y-2 hover:scale-105 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                {/* Accent overlay on hover for creativity */}
                <div className="absolute inset-0 bg-portfolio-accent/10 opacity-0 group-hover:opacity-75 transition-all" />
              </div>
              <div className="p-6 bg-white dark:bg-portfolio-gray-800">
                <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
                  {/* Decorative emoji for creativity */}
                  <span className="animate-bounce text-portfolio-accent">🚀</span>
                  {project.title}
                </h3>
                <p className="text-portfolio-gray-600 dark:text-portfolio-gray-300 mb-4">
                  {project.description}
                </p>
                
                <h4 className="text-sm uppercase font-semibold text-portfolio-gray-500 dark:text-portfolio-gray-400 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-portfolio-gray-100 dark:bg-portfolio-gray-700 rounded text-xs font-medium icon-bounce"
                    >
                      {/* Fun accent bullet */}
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-portfolio-accent mr-1 animate-pulse"></span>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-sm uppercase font-semibold text-portfolio-gray-500 dark:text-portfolio-gray-400 mb-2">
                  Results
                </h4>
                <p className="text-portfolio-gray-600 dark:text-portfolio-gray-400 text-sm">
                  {project.results}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
