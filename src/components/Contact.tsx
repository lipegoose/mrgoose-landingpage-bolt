import React from 'react';
import { MessageCircle, Linkedin, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Contato direto. Sem intermediários.
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Não uso formulários. Se quiser conversar sobre um projeto estratégico, 
          consultoria técnica ou desenvolvimento sob medida, pode me chamar 
          direto pelo WhatsApp ou pelo LinkedIn.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
          <a
            href="https://wa.me/5512997902911"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#FF914D] text-black font-semibold rounded-lg hover:bg-[#e67d3f] transition-all duration-200 transform hover:scale-105 min-w-[200px]"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            WhatsApp
          </a>
          
          <a
            href="https://www.linkedin.com/in/mrgoose/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200 transform hover:scale-105 min-w-[200px]"
          >
            <Linkedin className="w-5 h-5 mr-3" />
            LinkedIn
          </a>
        </div>

        {/* Resume download section */}
        <div className="flex justify-center mb-8">
          <a
            href="https://docs.google.com/document/d/1YYA86u0znM9H7E6EsyzuxjeZ2HiqePUA_VB4dGGx_sw/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-6 py-3 bg-transparent border border-[#FF914D]/30 text-[#FF914D] font-medium rounded-lg hover:bg-[#FF914D]/10 hover:border-[#FF914D]/50 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF914D]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <Download className="w-4 h-4 mr-2 group-hover:animate-pulse group-hover:-translate-y-0.5 transition-all duration-300" />
            Baixar Currículo Completo
          </a>
        </div>

        <p className="text-gray-400 italic text-lg font-medium">
          Atendo poucos projetos por vez. Trabalho com quem valoriza soluções sob medida.
        </p>
      </div>
    </section>
  );
};

export default Contact;