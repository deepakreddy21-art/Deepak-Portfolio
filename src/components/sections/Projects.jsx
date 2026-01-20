import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Compliance Copilot",
      description: "AI-powered compliance assistant for SaaS startups. Automates compliance workflows and helps navigate regulatory requirements.",
      technologies: ["TypeScript", "AI/ML", "SaaS"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      githubUrl: "https://github.com/deepakreddy21-art/compliance-copilot"
    },
    {
      title: "Uber Clone",
      description: "Full Stack Uber Clone with Spring Boot, React Native, and ML Microservice. Real-time ride-sharing application with driver-rider matching.",
      technologies: ["Spring Boot", "React Native", "TypeScript", "ML Microservice"],
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      githubUrl: "https://github.com/deepakreddy21-art/uber-clone"
    },
    {
      title: "Turbo Auto Rentals",
      description: "Automated car rental platform with streamlined booking and management system.",
      technologies: ["TypeScript", "Full Stack"],
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50",
      githubUrl: "https://github.com/deepakreddy21-art/turboautorentals"
    },
  ];

  return (
    <section id="projects" className={`pt-1 pb-12 md:pt-1 md:pb-16 px-4 relative ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-black' : 'bg-white'} opacity-100`}></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600">Projects</span>
          </h2>
          <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg mb-10 max-w-3xl mx-auto`}>
            Showcasing innovative solutions and technical implementations
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg overflow-hidden border shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer block`}
              >
                <div className={`h-3 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  <h3 className={`text-xl md:text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>
                    {project.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm md:text-base mb-4`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'} py-1 px-3 text-xs md:text-sm rounded-full border shadow-sm`}
                      >
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} font-medium`}>
                          {tech}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
