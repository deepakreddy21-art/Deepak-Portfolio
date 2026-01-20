import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = ({ isDarkMode }) => {
  const experiences = [
    {
      company: "USAA",
      period: "Jan 2024 - Present",
      position: "Software Engineer",
      gradient: "from-blue-500 to-green-500",
      logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/b4/ff/6c/b4ff6cb4-53c3-55a6-b122-0d5b37072cb3/AppIcon-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-85-220.png/1200x630wa.png",
      details: [
        "Engineered scalable backend services (Java, Python, REST, GraphQL) on AWS sustaining millions of daily requests with 99.99% availability, and developed performant frontend workflows (React, Redux, TypeScript) improving page latency by 28%",
        "Orchestrated event-driven architecture with Kafka, PostgreSQL, and Redis, offloading synchronous API paths by 35% during peak traffic. Standardized IaC with Terraform and Docker, reducing environment provisioning by 40%",
        "Enforced production quality through Cypress, WebdriverIO, and unit tests in CI/CD pipelines, preventing 45% of regressions. Operationalized observability with Datadog and ELK Stack, achieving p95 response times under 200ms"
      ]
    },
    {
      company: "Dell Technologies",
      period: "Dec 2020 - Dec 2022",
      position: "Software Engineer",
      gradient: "from-blue-600 to-blue-800",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/1200px-Dell_Logo.svg.png",
      details: [
        "Delivered full-stack applications (Java, Spring Boot, React, REST APIs) handling thousands of concurrent sessions. Implemented Node.js and Python integrations connecting internal platforms, reducing manual processing by 20%",
        "Introduced Kafka message-based processing and event-driven workflows with Postgres and DynamoDB, reducing request latency by 27% and cutting database contention by 35% during peak loads",
        "Implemented Selenium UI tests and backend validation suites, decreasing post-release defects by 38% across successive deployments"
      ]
    }
  ];

  return (
    <section id="experience" className={`pt-1 pb-12 md:pt-1 md:pb-16 px-4 relative ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-black' : 'bg-white'} opacity-100`}></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <RevealOnScroll key={index}>
                <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg p-6 shadow-lg border transition-all duration-300 hover:shadow-xl`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`mr-4 flex-shrink-0 ${isDarkMode ? 'bg-white' : 'bg-white'} rounded p-1 shadow-sm w-14 h-14 flex items-center justify-center overflow-hidden`}>
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                          className="max-h-[85%] max-w-[85%] object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/100x100?text=" + exp.company;
                          }}
                        />
                      </div>
                      <div>
                        <h3 className={`text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${exp.gradient}`}>
                          {exp.company}
                        </h3>
                        <h4 className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.position}</h4>
                      </div>
                    </div>
                    <div className={`mt-2 md:mt-0 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} font-medium`}>
                      {exp.period}
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 ml-12">
                    {exp.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}; 