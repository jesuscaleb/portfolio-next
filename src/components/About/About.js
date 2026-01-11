import React from 'react';
import portrait from './assets/quOMJEUCgqWm.png';

const About = () => {
  const skills = [
    { name: 'JavaScript', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
    { name: 'React', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' },
    { name: 'Node.js', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
    { name: 'Tailwind CSS', color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' }
  ];

  return (
    <section className="bg-background-light dark:bg-background-dark" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="relative flex items-center justify-center p-8 lg:p-16 xl:p-24 order-2 lg:order-1 bg-gray-50 dark:bg-[#0B1120]">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50"></div>
          </div>
          <div className="relative z-10 max-w-lg">
            <div className="flex items-center space-x-2 mb-6">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">Sobre Mí</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Hola, soy Jesús.
            </h2>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300">
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800/50 shadow-sm backdrop-blur-sm">
                <p className="leading-relaxed">
                  Soy un desarrollador web con más de 4 años de experiencia en desarrollo front y back-end. Me encanta la programación y me considero un autodidacta, gracias a esto siempre estoy aprendiendo cosas nuevas y manteniéndome actualizado.
                </p>
                <p className="mt-4 leading-relaxed">
                  Busco un puesto donde pueda aplicar mis habilidades de desarrollo full-stack, mantener y crear aplicaciones web que marquen la diferencia.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span key={index} className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${skill.color}`}>
                  {skill.name}
                </span>
              ))}
            </div>
            <div className="mt-10">
            <a className="inline-flex items-center text-primary font-semibold hover:text-blue-600 dark:hover:text-blue-400 group" href="/XIQLZujFgSXBGUbUrzcau.pdf" download="XIQLZujFgSXBGUbUrzcau.pdf" aria-label="Descargar CV">
                Descargar CV
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-64 lg:h-auto order-1 lg:order-2 overflow-hidden group">
          <img 
            alt="Retrato profesional de Jesús en blanco y negro" 
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" 
            src={portrait}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-black/20 opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

export default About;