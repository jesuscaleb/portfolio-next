import React, { useState, useRef, useEffect } from 'react';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);
  const trackRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Material",
      description: "Un prototipo de seguridad de sesión con uso de tokens y CMS incluido en desarrollo.",
      image: "/assets/material.png",
      year: "2021",
      techStack: ["Angular", "NodeJS", "MongoDB"],
      techColors: ["bg-red-100 text-red-700", "bg-indigo-100 text-indigo-700", "bg-green-100 text-green-700"]
    },
    {
      id: 2,
      title: "MyApi",
      description: "API REST que proporciona endpoints para gestionar recursos, autenticación y solicitudes CRUD a MyAngular.",
      image: "/assets/myapi.png",
      year: "2021",
      techStack: ["Javascript","Express", "NodeJS"],
      techColors: ["bg-yellow-100 text-yellow-700", "bg-blue-100 text-blue-700", "bg-indigo-100 text-indigo-700"]
    },
    {
      id: 3,
      title: "MyAngular",
      description: "Un blog con funcionalidades CRUD y autenticación, construido con Angular para el frontend y GraphQL para la gestión de datos.",
      image: "/assets/myangular.png",
      year: "2021",
      techStack: ["Angular", "NodeJS", "MongoDB"],
      techColors: ["bg-red-100 text-red-700", "bg-indigo-100 text-indigo-700", "bg-green-100 text-green-700"]
    }
  ];

  useEffect(() => {
    const updateCarouselMetrics = () => {
      if (!trackRef.current) return;
      
      const firstCard = trackRef.current.firstElementChild;
      if (!firstCard) return;
      
      const cardWidthValue = firstCard.offsetWidth + 24;
      setCardWidth(cardWidthValue);
      
      const trackWidth = trackRef.current.clientWidth;
      const totalContentWidth = projects.length * cardWidthValue;
      
      // If content fits entirely in view, no pagination needed
      if (totalContentWidth <= trackWidth) {
        setTotalPages(1);
      } else {
        const pages = Math.ceil(totalContentWidth / trackWidth);
        setTotalPages(pages);
      }
    };

    const timer = setTimeout(updateCarouselMetrics, 100);
    window.addEventListener('resize', updateCarouselMetrics);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateCarouselMetrics);
    };
  }, [projects.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      if (cardWidth === 0) return;
      const trackWidth = track.clientWidth;
      const pageIndex = Math.round(track.scrollLeft / trackWidth);
      const safeIndex = Math.min(Math.max(pageIndex, 0), totalPages - 1);
      setActiveIndex(safeIndex);
    };

    track.addEventListener('scroll', handleScroll);
    return () => track.removeEventListener('scroll', handleScroll);
  }, [cardWidth, totalPages]);

  const scrollCarousel = (direction) => {
    if (!trackRef.current || cardWidth === 0) return;
    const trackWidth = trackRef.current.clientWidth;
    const scrollAmount = direction * trackWidth;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const scrollToPage = (pageIndex) => {
    if (!trackRef.current || cardWidth === 0) return;
    const trackWidth = trackRef.current.clientWidth;
    const scrollPosition = pageIndex * trackWidth;
    trackRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    setActiveIndex(pageIndex);
  };

  return (
    <section id="projects" className="relative w-full py-12 bg-white dark:bg-gray-900">
      <div className="flex flex-col place-items-center mb-10 px-2 max-w-7xl mx-auto">
        <div>
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">Proyectos Recientes</h3>
        </div>
        <div className="flex space-x-4 mt-6 ">
          <button
            aria-label="Previous project"
            className="p-3 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition focus:outline-none focus:ring-2 focus:ring-primary group"
            onClick={() => scrollCarousel(-1)}
          >
            <span className="material-icons group-hover:-translate-x-1 transition-transform">←</span>
          </button>
          <button
            aria-label="Next project"
            className="p-3 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition focus:outline-none focus:ring-2 focus:ring-primary group"
            onClick={() => scrollCarousel(1)}
          >
            <span className="material-icons group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

      <div className="relative group max-w-7xl mx-auto">
        <div
          ref={trackRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-12 pt-4 px-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {projects.map((project) => (
            <div key={project.id} className="snap-center flex-shrink-0 w-full sm:w-[400px] lg:w-[450px]">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <span className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                    {project.year}
                  </span>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-1">{project.description}</p>
                  <div className="mb-6">
                    <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${project.techColors[index]}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    className="inline-flex items-center text-primary font-semibold hover:text-blue-400 dark:hover:text-blue-300 transition group/link"
                    href="#"
                  >
                    Ver proyecto
                    <span className="material-icons text-sm ml-1 group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            aria-label={`Go to page ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              activeIndex === index ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary'
            }`}
            onClick={() => scrollToPage(index)}
          />
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;