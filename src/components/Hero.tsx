// Componente principal da página
import { MessageCircle, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Felipe Machado Goose
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-[#FF914D] font-semibold mb-8">
          Desenvolvedor Full Stack Sênior
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          São quase 30 anos de experiência 
          desenvolvendo sistemas robustos, escaláveis e personalizados.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="https://wa.me/5512997902911"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#FF914D] text-black font-semibold rounded-lg hover:bg-[#e67d3f] transition-all duration-200 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            Falar no WhatsApp
          </a>
          
          <a
            href="https://www.linkedin.com/in/mrgoose/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200 transform hover:scale-105"
          >
            <Linkedin className="w-5 h-5 mr-3" />
            Ver LinkedIn
          </a>
        </div>

        {/* Resume download button */}
        <div className="flex justify-center mb-12">
          <a
            href="https://docs.google.com/document/d/1YYA86u0znM9H7E6EsyzuxjeZ2HiqePUA_VB4dGGx_sw/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-700 hover:text-white hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-4 h-4 mr-2" />
            Baixar Currículo
          </a>
        </div>

        {/* Positioning statement */}
        <p className="text-gray-400 italic text-lg font-medium">
          Clientes selecionados e exclusivos. Não atendo a qualquer demanda.
        </p>
      </div>

      {/* Logo centralizada */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <img 
          src="/image.png" 
          alt="Mr.Goose Logo" 
          className="h-[188px] w-auto"
        />
      </div>
    </section>
  );
};

export default Hero;