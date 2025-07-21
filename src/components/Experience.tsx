import React from 'react';
import { ExternalLink, Building, Code, Cpu } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Petrobras",
      role: "Java + Spring Boot",
      detail: "via UFAL/EDGE",
      icon: Building,
      highlight: true
    },
    {
      company: "Unimed Seguros",
      role: "Full Stack Developer",
      detail: "React, Laravel",
      icon: Code
    },
    {
      company: "Luwei",
      role: "Tech Lead",
      detail: "AWS, Git, automações",
      icon: Cpu
    },
    {
      company: "2Mundos Inc (EUA)",
      role: "Backend Developer",
      detail: "Laravel + Kubernetes",
      icon: Code
    },
    {
      company: "Angra Games / Neo Saber",
      role: "CTO",
      detail: "Plataforma EAD gamificada",
      icon: Building
    },
    {
      company: "PlataformaVerde / CTRe SP",
      role: "Lead Developer",
      detail: "Python + Blockchain + IA",
      icon: Cpu
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Experiência
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div 
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  exp.highlight 
                    ? 'bg-[#FF914D]/10 border-[#FF914D]/30 hover:border-[#FF914D]/50' 
                    : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${
                    exp.highlight ? 'bg-[#FF914D]/20' : 'bg-gray-700'
                  }`}>
                    <IconComponent className={`w-5 h-5 ${
                      exp.highlight ? 'text-[#FF914D]' : 'text-gray-300'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg ${
                      exp.highlight ? 'text-[#FF914D]' : 'text-white'
                    }`}>
                      {exp.company}
                    </h3>
                    <p className="text-gray-300 font-medium">
                      {exp.role}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      {exp.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/mrgoose/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-400 hover:text-[#FF914D] transition-colors duration-200"
          >
            Ver histórico completo no LinkedIn
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;