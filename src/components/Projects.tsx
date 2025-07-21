import React from 'react';
import { Code, Database, Gamepad, Video, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "Mr.CRM",
      description: "Sistema híbrido de CRM e CMS personalizável",
      icon: Database,
      tech: ["PHP", "Laravel", "Vue.js", "MySQL"]
    },
    {
      name: "MiniApp-i",
      description: "Microsserviços modulares com frontend estático",
      icon: Code,
      tech: ["Node.js", "Docker", "React", "MongoDB"]
    },
    {
      name: "Plataforma Neo Saber",
      description: "Sistema EAD gamificado completo",
      icon: Gamepad,
      tech: ["PHP", "Laravel", "Unity", "PostgreSQL"]
    },
    {
      name: "2BeLive",
      description: "Ambiente de colaboração com áudio/vídeo em tempo real",
      icon: Video,
      tech: ["WebRTC", "Node.js", "React", "Redis"]
    },
    {
      name: "CTRe (SP)",
      description: "Sistema de rastreamento de resíduos com blockchain e IA",
      icon: Shield,
      tech: ["Python", "Blockchain", "TensorFlow", "PostgreSQL"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Projetos Técnicos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-[#FF914D]/20 rounded-lg">
                    <IconComponent className="w-6 h-6 text-[#FF914D]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.name}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                    >
                      {tech}
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
};

export default Projects;