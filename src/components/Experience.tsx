import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Engineer",
    company: "Beelogix",
    location: "Lahore",
    period: "Aug 2024 - Present",
    responsibilities: [
      "Developed and maintained 10+ full-stack applications for e-commerce, healthcare, and SaaS clients using the MERN stack",
      "Built reusable React components and improved frontend performance by 27% through code splitting and lazy loading",
      "Implemented RESTful APIs with Express and Node, ensuring data integrity and secure authentication using JWT and OAuth",
      "Integrated third-party tools like Stripe, Twilio, and SendGrid",
      "Deployed applications on AWS and Heroku with CI/CD pipelines using GitHub Actions",
      "Worked with MongoDB Aggregation Framework for building advanced reports and filters",
    ],
  },
  {
    title: "MERN Stack Developer",
    company: "AbizSol",
    location: "Lahore",
    period: "Sep 2023 - Aug 2024",
    responsibilities: [
      "Contributed to the development of a modular ERP system based on microservices architecture, resulting in improved performance and scalability",
      "Helped build a Learning Management System (LMS) and Content Management System (CMS) by improving frontend usability and API integrations",
      "Worked on a banking application, delivering secure user authentication and transaction modules with third-party financial services",
      "Developed features for an organizational productivity app, including real-time collaboration, task tracking, and user role management",
      "Built and maintained core modules of an e-commerce platform including product management, checkout process, and order tracking",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200 dark:bg-purple-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <div
                    className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                        <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-gray-600 dark:text-gray-300 text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for timeline alignment */}
                <div className="hidden md:block flex-1 md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
