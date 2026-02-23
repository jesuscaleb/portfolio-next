import { useState, useEffect } from 'react';

const Navigation = ({ onNavigate }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center md:hidden">
            <button 
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none p-2 rounded-md" 
              type="button"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <div className="flex-shrink-0 flex items-center hidden md:flex">
            <button className="text-xl font-bold tracking-tight text-gray-900 dark:text-white" onClick={() => handleNavClick('home')}>
              JCODE<span className="text-primary">LABS</span>
            </button>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute top-16 left-0 right-0 bg-background-light dark:bg-background-dark md:relative md:top-0 md:bg-transparent md:dark:bg-transparent w-full md:w-auto max-w-full border-b border-gray-200 dark:border-gray-800 md:border-0 overflow-x-hidden`}>
              <button className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors w-full text-left" onClick={() => handleNavClick('about')}>Nosotros</button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors w-full text-left" onClick={() => handleNavClick('projects')}>Proyectos</button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors w-full text-left" onClick={() => handleNavClick('services')}>Servicios</button>
            </div>
            
            <div className="flex md:hidden">
              <button className="text-lg font-bold text-gray-900 dark:text-white" onClick={() => handleNavClick('home')}>
                JCODE<span className="text-primary">LABS</span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center">
            <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-transform transform hover:scale-105 shadow-lg shadow-blue-500/30" onClick={() => handleNavClick('contact')}>
              Hablemos
            </button>
            <button 
              className="ml-4 text-gray-500 dark:text-gray-400 focus:outline-none" 
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;