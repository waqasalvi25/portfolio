import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Welcome text */}
        <div className="mb-8">
          <p className="text-cyan-400 text-lg sm:text-xl mb-4 tracking-widest uppercase pt-16 md:pt-0">
            Welcome to my world
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Muhammad Waqas Alvi
            </span>
          </h1>

          <div className="text-2xl sm:text-4xl lg:text-5xl font-light text-gray-300 mb-8">
            <span className="text-cyan-400">a</span> Frontend Developer.
          </div>
        </div>

        {/* Bio */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
            I am a passionate Frontend Developer with 4+ years of experience
            building modern, responsive, and user-friendly web applications. I
            specialize in React.js, JavaScript, HTML, CSS, and modern frontend
            technologies, with strong experience in creating interactive and
            visually engaging user interfaces. I also have hands-on experience
            with REST API development and integration, connecting frontend
            applications with backend services and ensuring smooth data
            communication. I work with databases, authentication, third-party
            APIs, and dynamic web applications while focusing on clean,
            scalable, and maintainable code. In addition to React.js, I have
            experience working with WordPress, custom websites, landing pages,
            and converting designs from Figma/PSD into fully responsive and
            functional websites. I enjoy turning ideas and designs into
            high-quality digital experiences that perform smoothly across
            desktop, tablet, and mobile devices. I am continuously learning and
            exploring modern web technologies to build efficient, scalable, and
            reliable solutions for every project I work on.
          </p>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/waqasalvi25"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/waqas-alvi-01161b110/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:waqasalvi26@gmail.com"
            className="p-3 bg-gray-800 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

export default Home;
