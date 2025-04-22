
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "../ui/button";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('contact');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        
        // Reset after showing success message
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  const contactInfo = [
    {
      id: 1,
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "athmanathanmta@gmail.com",
      link: "mailto:athmanathanmta@gmail.com"
    },
    {
      id: 2,
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "linkedin.com/in/athmanathan-mta",
      link: "https://linkedin.com/in/athmanathan-mta"
    },
    {
      id: 3,
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      value: "github.com/Athmanathan07",
      link: "https://github.com/Athmanathan07"
    },
    {
      id: 4,
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Sivakasi, Tamil Nadu",
      link: null
    }
  ];

  return (
    <section id="contact" className="bg-portfolio-gray-50 dark:bg-portfolio-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={isVisible ? 'animate-slide-up' : 'opacity-0'}>
            <h3 className="text-2xl font-medium mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map(item => (
                <div key={item.id} className="flex items-start">
                  <div className="p-3 bg-white dark:bg-portfolio-gray-900 rounded-full shadow-md mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-portfolio-gray-600 dark:text-portfolio-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-portfolio-gray-600 dark:text-portfolio-gray-300">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`bg-white dark:bg-portfolio-gray-900 rounded-lg shadow-md p-6 ${isVisible ? 'animate-slide-up animate-delay-200' : 'opacity-0'}`}>
            <h3 className="text-2xl font-medium mb-6">Send Me a Message</h3>
            
            {isSubmitted ? (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 text-green-800 dark:text-green-300 rounded-md">
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`contact-input ${errors.name ? 'border-red-500 dark:border-red-500' : ''}`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                
                <div className="mb-4">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`contact-input ${errors.email ? 'border-red-500 dark:border-red-500' : ''}`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`contact-input resize-none ${errors.message ? 'border-red-500 dark:border-red-500' : ''}`}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
