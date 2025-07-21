// Componente de rodapé

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-0 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <a href="#" className="flex items-center">
              <img 
                src="/image.png" 
                alt="Mr.Goose Logo" 
                className="h-[140px] w-auto"
              />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-center md:text-right">
            <p>© {currentYear} Mr.Goose. Todos os direitos reservados.</p>
            <p className="text-sm mt-1">Desenvolvedor Full Stack Sênior</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;