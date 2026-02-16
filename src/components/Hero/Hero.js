import React from 'react';

const Hero = ({ onNavigate }) => {
  const handleNavClick = (sectionId) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <header id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#5b21b6]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7c3aed] to-[#4c1d95]"></div>
      <div className="absolute inset-0 perspective-container pointer-events-none opacity-40">
        <div className="absolute inset-[-50%] w-[200%] h-[200%] hero-grid grid-plane"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#4c1d95] via-transparent to-transparent opacity-80"></div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 drop-shadow-lg">
          Estudio de Desarrollo Web <br className="hidden md:block"/> y Diseño del Mañana
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-purple-100 mb-10 font-light">
          Creamos experiencias digitales que definen el futuro. Transformamos ideas en código limpio y diseño impactante.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium shadow-xl shadow-blue-900/20 transition-all hover:-translate-y-1" onClick={() => handleNavClick('projects')}>
            Descubre nuestro trabajo
          </button>
          <button className="bg-purple-900/40 hover:bg-purple-900/60 backdrop-blur-sm border border-purple-400/30 text-white px-8 py-3 rounded-md text-lg font-medium transition-all hover:-translate-y-1" onClick={() => handleNavClick('services')}>
            Ver Servicios
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .hero-grid {
          background-size: 60px 60px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }
        .perspective-container {
          perspective: 1000px;
          overflow: hidden;
        }
        .grid-plane {
          transform: rotateX(60deg) scale(2);
          transform-origin: top center;
        }
      `}</style>
    </header>
  );
};

export default Hero;