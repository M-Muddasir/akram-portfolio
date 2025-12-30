const skillCategories = [
  {
    title: "Frontend",
    color: "purple",
    skills: ["React.js", "Redux", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    color: "blue",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "WebSockets", "Socket.io"],
  },
  {
    title: "Database",
    color: "green",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "MySQL", "Supabase", "Firebase"],
  },
  {
    title: "DevOps & Cloud",
    color: "orange",
    skills: ["Docker", "AWS (EC2, S3, RDS)", "Vercel", "Heroku", "Netlify", "Render", "GitHub Actions"],
  },
  {
    title: "AI & LLM Integration",
    color: "teal",
    skills: [
      "OpenAI API",
      "ChatGPT 4.0",
      "RAG",
      "Semantic Search",
      "Embeddings",
      "LangChain",
      "Vector DBs (Pinecone, ChromaDB)",
      "Prompt Engineering",
    ],
  },
  {
    title: "Version Control & Tools",
    color: "pink",
    skills: ["Git", "GitHub", "Postman", "ClickUp", "Agile (Scrum)", "Jira", "API Integration", "CI/CD", "System Monitoring"],
  },
];

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    border: "border-purple-200 dark:border-purple-800",
    text: "text-purple-700 dark:text-purple-300",
  },
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-700 dark:text-blue-300",
  },
  green: {
    bg: "bg-green-100 dark:bg-green-900/30",
    border: "border-green-200 dark:border-green-800",
    text: "text-green-700 dark:text-green-300",
  },
  orange: {
    bg: "bg-orange-100 dark:bg-orange-900/30",
    border: "border-orange-200 dark:border-orange-800",
    text: "text-orange-700 dark:text-orange-300",
  },
  pink: {
    bg: "bg-pink-100 dark:bg-pink-900/30",
    border: "border-pink-200 dark:border-pink-800",
    text: "text-pink-700 dark:text-pink-300",
  },
  teal: {
    bg: "bg-teal-100 dark:bg-teal-900/30",
    border: "border-teal-200 dark:border-teal-800",
    text: "text-teal-700 dark:text-teal-300",
  },
  indigo: {
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
    border: "border-indigo-200 dark:border-indigo-800",
    text: "text-indigo-700 dark:text-indigo-300",
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color];
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 text-sm rounded-full border ${colors.bg} ${colors.border} ${colors.text}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
