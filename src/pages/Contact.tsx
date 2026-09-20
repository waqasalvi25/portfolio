import { Mail, Linkedin, Github, MessageSquare, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      name: 'Email',
      value: 'waqasalvi26@gmail.com',
      href: 'mailto:waqasalvi26@gmail.com',
      icon: Mail,
      color: 'text-red-400 hover:text-red-300',
      bgColor: 'bg-red-400/10 hover:bg-red-400/20',
      borderColor: 'border-red-400/30 hover:border-red-400/50',
    },
    {
      name: 'LinkedIn',
      value: 'Connect with me',
      href:"https://www.linkedin.com/in/waqas-alvi-01161b110/",
      icon: Linkedin,
      color: 'text-blue-400 hover:text-blue-300',
      bgColor: 'bg-blue-400/10 hover:bg-blue-400/20',
      borderColor: 'border-blue-400/30 hover:border-blue-400/50',
    },
    {
      name: 'GitHub',
      value: 'View my projects',
      href : "https://github.com/waqasalvi25",
      icon: Github,
      color: 'text-gray-400 hover:text-gray-300',
      bgColor: 'bg-gray-400/10 hover:bg-gray-400/20',
      borderColor: 'border-gray-400/30 hover:border-gray-400/50',
    },
    {
      name: 'WhatsApp',
      value: 'Say Hello',
      href: "https://wa.me/+923423391289",
      icon: MessageSquare,
      color: 'text-green-400 hover:text-green-300',
      bgColor: 'bg-green-400/10 hover:bg-green-400/20',
      borderColor: 'border-green-400/30 hover:border-green-400/50',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact methods */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-8">Let's Connect</h2>
            
            {contactMethods.map((method, index) => (
              <a
                key={method.name}
                href={method.href}
                target={method.name !== 'Email' ? '_blank' : '_self'}
                rel={method.name !== 'Email' ? 'noopener noreferrer' : ''}
                className={`block p-6 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${method.bgColor} ${method.borderColor}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${method.color} transition-colors duration-300`}>
                    <method.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {method.name}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {method.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          {/* <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-all duration-300 hover:scale-105 font-semibold group"
              >
                <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </button>
            </form>
          </div> */}
        </div>

        {/* Additional info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
            <MapPin className="text-cyan-400 mx-auto mb-4" size={32} />
            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-400">Available Worldwide</p>
          </div>
          
          <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
            <Phone className="text-cyan-400 mx-auto mb-4" size={32} />
            <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
            <p className="text-gray-400">Within 24 hours</p>
          </div>
          
          <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
            <Mail className="text-cyan-400 mx-auto mb-4" size={32} />
            <h3 className="text-lg font-semibold text-white mb-2">Availability</h3>
            <p className="text-gray-400">Open for new projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;