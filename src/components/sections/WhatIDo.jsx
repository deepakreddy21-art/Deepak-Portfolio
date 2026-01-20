import { RevealOnScroll } from "../RevealOnScroll";

export const WhatIDo = ({ isDarkMode }) => {
  const services = [
    {
      icon: "⚡",
      title: "Backend Development",
      description: "Scalable microservices, REST/GraphQL APIs, event-driven architectures handling millions of requests with 99.99% uptime"
    },
    {
      icon: "🎨",
      title: "Frontend Development",
      description: "Modern React/TypeScript applications with optimized performance, reducing latency by 28% and improving user experience"
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description: "AWS/GCP infrastructure, CI/CD automation, containerization, and Infrastructure-as-Code reducing deployment time by 40%"
    },
    {
      icon: "🔧",
      title: "System Architecture",
      description: "Event-driven integrations, database optimization, and system design cutting peak-load contention by 35%"
    },
    {
      icon: "🛡️",
      title: "Quality & Testing",
      description: "Comprehensive testing strategies preventing 45% of regressions through automated testing and CI/CD integration"
    },
    {
      icon: "📊",
      title: "Performance Optimization",
      description: "Observability, monitoring, and performance tuning achieving p95 response times under 200ms across critical endpoints"
    }
  ];

  return (
    <section id="what-i-do" className={`py-16 md:py-20 px-4 relative ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'}`}>
                What I Do
              </span>
            </h2>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg max-w-2xl mx-auto`}>
              End-to-end software engineering services with measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className={`${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800' : 'bg-white/80 border-gray-200 hover:bg-white'} rounded-xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm h-full`}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className={`text-xl md:text-2xl font-bold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    {service.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm md:text-base leading-relaxed`}>
                    {service.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
