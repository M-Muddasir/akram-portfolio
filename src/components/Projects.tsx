import { ExternalLink, Layers, Users, FileText } from "lucide-react";

const projects = [
  {
    title: "URQA",
    subtitle: "ERP & Learning Platforms",
    description:
      "A modular ERP solution designed for performance and scalability, along with a robust LMS and CMS platform to manage learning content, users, and administrative workflows efficiently.",
    icon: Layers,
    tags: ["MERN Stack", "Microservices", "LMS", "CMS", "Admin Panel"],
    color: "purple",
  },
  {
    title: "MyRep",
    subtitle: "Medical Practice Management",
    description:
      "A scheduling and relationship management platform for medical practices and reps. It simplifies appointment booking, compliance tracking, and communication, helping practices stay organized and reps manage visits more effectively.",
    icon: Users,
    tags: ["React", "Node.js", "Scheduling", "Healthcare", "CRM"],
    color: "blue",
  },
  {
    title: "Grantrack",
    subtitle: "Millennium Strategies",
    description:
      "A web-based grant management platform that helps organizations track grant applications, awards, and compliance. It supports the full grant lifecycle—from discovery to reporting—through an intuitive admin panel.",
    icon: FileText,
    tags: ["Full Stack", "Grant Management", "Dashboard", "Reporting"],
    color: "green",
  },
];

const colorClasses: Record<string, { gradient: string; icon: string; tag: string }> = {
  purple: {
    gradient: "from-purple-500 to-purple-700",
    icon: "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400",
    tag: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  },
  blue: {
    gradient: "from-blue-500 to-blue-700",
    icon: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400",
    tag: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  },
  green: {
    gradient: "from-green-500 to-green-700",
    icon: "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400",
    tag: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  },
};

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = colorClasses[project.color];
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Project Header */}
                <div
                  className={`h-32 bg-gradient-to-br ${colors.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <project.icon className="w-16 h-16 text-white/90" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {project.subtitle}
                      </p>
                    </div>
                    <button
                      className={`p-2 rounded-lg ${colors.icon} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      aria-label="View project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 text-xs rounded-md ${colors.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
