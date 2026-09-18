const Skills = () => {
  const skills = [
    { name: "React.js", image: "/skills/React.webp" },
    { name: "Next.js", image: "/skills/next.jpeg" },
    { name: "JavaScript", image: "/skills/js.jpg" },
    { name: "HTML", image: "/skills/html.png" },
    { name: "CSS", image: "/skills/css.webp" },
    { name: "Tailwind css", image: "/skills/tailwind-css.png" },
    { name: "Bootstrap", image: "/skills/bootstrap.png" },
    { name: "Ant Design", image: "/skills/ant-design.png" },


    { name: "Node.js", image: "/skills/node.png" },
    { name: "Express.js", image: "/skills/express-js.png" },
    { name: "REST APIs / API Integration", image: "/skills/rest-api.webp" },
    { name: "MongoDB", image: "/skills/mongo.png" },
    { name: "SQL", image: "/skills/sql-logo.png" },
    { name: "Git", image: "/skills/git.png" },
    { name: "WordPress", image: "/skills/wordpress.png" },

    // { name: "Nest.js", image: "/skills/nest.webp" },
    // { name: "Java", image: "/skills/java.png" },
    // { name: "Python", image: "/skills/python.png" },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-cyan-400">Skills</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the
            technologies I work with
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10 border border-gray-800 hover:border-cyan-400/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-lg bg-gray-800/50 group-hover:bg-gray-700/50 transition-all duration-300 mb-4">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base group-hover:text-cyan-400 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-2xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Always Learning
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current
              with the latest trends, frameworks, and best practices in web
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
