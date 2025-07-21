// Componente sobre

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Sobre
        </h2>
        
        <div className="bg-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-800">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 space-y-6">
            <span className="block">
              Sou desenvolvedor full stack sênior com quase 30 anos de experiência. Atualmente,
              dentre outros Projetos, desenvolvo e entrego o Futuro para a Petrobras via 
              Universidade Federal de Alagoas (UFAL), desenvolvendo sistemas 
              em Java com Spring Boot. Ao longo da minha carreira, atuei com projetos robustos 
              em PHP (Laravel, Lumen, Zend, CakePHP), Python, Node.js, frontend com React, Vue 
              e Angular, bancos relacionais e não relacionais, DevOps com Docker, CI/CD, AWS e 
              integrações avançadas.
            </span>
            
            <span className="block">
              Minha especialidade é criar soluções sob medida, com alta performance, segurança 
              e estrutura sólida. Já atendi dezenas de empresas e projetos complexos no Brasil 
              e no exterior, sempre com ética, responsabilidade e foco em resultados.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;