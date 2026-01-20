import { RevealOnScroll } from "../RevealOnScroll";

export const Testimonials = ({ isDarkMode }) => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "Python", "Go", "JavaScript (ES6+)", "TypeScript", "SQL"],
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      category: "Frontend",
      skills: ["HTML5", "CSS3", "Node.js", "React", "Angular", "Redux"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      category: "Backend",
      skills: ["Spring Boot", "Spring Security", "REST APIs", "GraphQL", "gRPC", "HTTP", "JSON", "Serverless APIs"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Git", "GitHub Actions", "GitLab", "Jenkins", "Terraform", "IaC", "Docker", "Kubernetes"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      category: "Messaging & Databases",
      skills: ["Apache Kafka", "ActiveMQ", "RDBS", "DynamoDB", "NoSQL", "PostgreSQL"],
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      category: "Testing & Monitoring",
      skills: ["JUnit", "pytest", "Cypress", "Selenium", "Vitest", "Prometheus", "Grafana", "Elasticsearch", "Kibana"],
      gradient: "from-indigo-500 to-purple-500"
    },
  ];

  return (
    <section id="skills" className={`pt-1 pb-12 md:pt-1 md:pb-20 px-4 relative ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-black' : 'bg-white'} opacity-100`}></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <h2 className="text-5xl md:text-7xl font-bold mb-10 md:mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg p-6 shadow-lg border hover:shadow-xl transition-all duration-300 h-full`}
              >
                <h3 className={`text-xl md:text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${category.gradient} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} pb-2`}>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'} py-1 px-3 text-sm rounded-full mb-2 font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}; 