import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="#" className="flex items-center">
              <img 
                src="/image.png" 
                alt="Mr.Goose Logo" 
                className="h-[70px] w-auto"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Início
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Sobre
            </a>
            <a 
              href="#experience" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Experiência
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Projetos
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Contato
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white" 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 py-4">
            <nav className="flex flex-col space-y-4 px-6">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#experience" 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Experiência
              </a>
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;