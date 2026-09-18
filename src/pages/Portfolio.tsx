import { Github, ExternalLink, Code } from "lucide-react";

type Project = {
  name: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const Portfolio = () => {
  const projects: Project[] = [
    {
      name: "Allele Biotech",
      description:
        "Modern biotech website showcasing stem-cell, iPSC and cell-therapy technologies and services.",
      techStack: [
        "React Vite",
        "Tailwind CSS",
        "MongoDB",
        "Redux",
        "Redux Toolkit Query",
        "API Integration"
      ],
      githubUrl: "https://github.com/waqasalvi25/allele",
      liveUrl: 'http://allelebiotech.com/',
    },
    {
      name: "Bin Budee",
      description:
        "Modern service website for trash-bin pickup, cleaning and smart routing services.",
      techStack: [
        "React Vite",
        "Tailwind CSS",
        "MongoDB",
        "Redux",
        "Redux Toolkit Query",
        "Express.js",
        "API Integration",
      ],
      githubUrl: "https://github.com/waqasalvi25/bin-budee",
      liveUrl: 'https://binbudee.com/',
    },
    {
      name: "iFuntology",
      description:
        "A full-stack ERP platform for managing business operations, with modules for users, workflows, and day-to-day administration.",
      techStack: [
        "React Vite",
        "Nest.js",
        "Tailwind CSS",
        "MongoDB",
        "Redux",
        "Redux Toolkit Query",
      ],
      liveUrl: "https://ifuntology.com/",
    },
    {
      name: "Golden Desserts",
      description:
        "Responsive food and dessert business website with a modern user-friendly interface.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "API Integration"],
      githubUrl: "https://github.com/waqasalvi25/golden-dessert",
      liveUrl: "https://goldendesserts.com/",
    },
    {
      name: "Funtology Global Institute",
      description:
        "An institute management platform for Funtology Global Institute, covering academic programs, users, and administrative workflows.",
      techStack: [
        "React Vite",
        "Nest.js",
        "Tailwind CSS",
        "MongoDB",
        "Redux",
        "Redux Toolkit Query",
        "API Integration"
      ],
      liveUrl: "https://funtologyglobalinstitute.com/",
    },
    {
      name: "FunTyme Entertainment",
      description:
        "Event and DJ booking platform for weddings, corporate events and private parties.",
      techStack: [
        "React Vite",
        "Nest.js",
        "Tailwind CSS",
        "MongoDB",
        "Redux",
        "Redux Toolkit Query",
        "API Integration"
      ],
      liveUrl: "https://funtologyglobalinstitute.com/",
    },
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      React: "bg-blue-500/20 text-blue-400 border-blue-400/30",
      "Node.js": "bg-green-500/20 text-green-400 border-green-400/30",
      "Next.js": "bg-white/20 text-white border-white/30",
      TypeScript: "bg-blue-400/20 text-blue-300 border-blue-300/30",
      MongoDB: "bg-green-400/20 text-green-300 border-green-300/30",
      PostgreSQL: "bg-blue-600/20 text-blue-300 border-blue-300/30",
      Express: "bg-gray-500/20 text-gray-300 border-gray-300/30",
      Stripe: "bg-purple-500/20 text-purple-400 border-purple-400/30",
      Prisma: "bg-indigo-500/20 text-indigo-400 border-indigo-400/30",
      "Socket.io": "bg-yellow-500/20 text-yellow-400 border-yellow-400/30",
      "D3.js": "bg-orange-500/20 text-orange-400 border-orange-400/30",
      "OpenWeather API": "bg-cyan-500/20 text-cyan-400 border-cyan-400/30",
      Mapbox: "bg-green-600/20 text-green-400 border-green-400/30",
      CSS3: "bg-blue-500/20 text-blue-400 border-blue-400/30",
      JavaScript: "bg-yellow-400/20 text-yellow-300 border-yellow-300/30",
      "Nest.js": "bg-red-500/20 text-red-400 border-red-400/30",
      "React Vite": "bg-cyan-500/20 text-cyan-400 border-cyan-400/30",
      Redux: "bg-purple-500/20 text-purple-400 border-purple-400/30",
      "Redux Toolkit Query":
        "bg-violet-500/20 text-violet-300 border-violet-300/30",
      Redis: "bg-red-600/20 text-red-400 border-red-400/30",
      Docker: "bg-blue-600/20 text-blue-400 border-blue-400/30",
      Sanity: "bg-red-400/20 text-red-300 border-red-300/30",
      "Tailwind CSS": "bg-teal-500/20 text-teal-400 border-teal-400/30",
      Vercel: "bg-white/20 text-white border-white/30",
    };
    return colors[tech] || "bg-gray-500/20 text-gray-400 border-gray-400/30";
  };

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-cyan-400">Portfolio</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            A showcase of my recent projects and the technologies I've used to
            bring ideas to life
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10 border border-gray-800 hover:border-cyan-400/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project header */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-cyan-400/10 rounded-lg">
                  <Code className="text-cyan-400" size={24} />
                </div>
                <div className="flex space-x-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-110"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project details */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {project.name}
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getTechColor(
                      tech,
                    )} transition-all duration-300 hover:scale-105`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-2xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting
              projects. Let's create something amazing together!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-all duration-300 hover:scale-105 font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
