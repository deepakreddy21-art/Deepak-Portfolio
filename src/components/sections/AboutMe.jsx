import { RevealOnScroll } from "../RevealOnScroll";

export const AboutMe = ({ isDarkMode }) => {
  return (
    <section
      id="about-me"
      className={`pt-16 md:pt-20 pb-16 md:pb-20 ${isDarkMode ? 'bg-black text-gray-200' : 'bg-white text-gray-800'} px-4 relative overflow-hidden min-h-screen`}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">About Me</span>
          </h2>
          
          <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 md:p-8 shadow-xl border`}>
            <div className="space-y-6">
              <div className="space-y-4">
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-base md:text-lg leading-relaxed`}>
                  Full-Stack Software Engineer with 4+ years of experience building and scaling cloud-native web and backend systems. Strong expertise in Java, Python, Spring Boot, microservices, and React/Angular/TypeScript/JavaScript, with end-to-end ownership from development to production.
                </p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-base md:text-lg leading-relaxed`}>
                  At USAA and Dell, delivered platforms serving millions of users with 99.99% availability, improved latency, and faster releases using AWS, Kafka, Terraform, and CI/CD automation.
                </p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-base md:text-lg leading-relaxed`}>
                  Master's in IT from Illinois Institute of Technology.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}; 