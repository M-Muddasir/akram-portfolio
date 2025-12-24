import { Code, Server, Cloud, GraduationCap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive UIs with React, Next.js, and Tailwind CSS",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Designing RESTful APIs with Node.js, Express, and databases",
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "Deploying with Docker, AWS, and CI/CD pipelines",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "BS Computer Science from GC University, Lahore (2018-2022)",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I&apos;m a passionate Full Stack Engineer with 3 years of experience
              specializing in the MERN stack. I love building applications that are
              not only functional but also provide great user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              My journey in software development has taken me through various
              domains including e-commerce, healthcare, SaaS, and banking
              applications. I take pride in writing clean, maintainable code and
              staying up-to-date with the latest technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              When I&apos;m not coding, I enjoy exploring new technologies, contributing
              to open-source projects, and continuously improving my skills through
              learning and experimentation.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
