import React from 'react';

const ProjectDetail = ({ project, onBack, allProjects, onProjectSelect, onNavigate }) => {
  if (!project) return null;

  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pt-20 pb-16">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-secondary/10 dark:bg-secondary/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex mb-8">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <button 
                onClick={onBack}
                className="inline-flex items-center text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-white"
              >
                Home
              </button>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-icons-outlined text-text-muted-light dark:text-text-muted-dark text-base">
                  {'>'}
                </span>
                <button 
                  onClick={onBack}
                  className="ml-1 text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-white md:ml-2"
                >
                  Proyectos
                </button>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="material-icons-outlined text-text-muted-light dark:text-text-muted-dark text-base">
                  {'>'}
                </span>
                <span className="ml-1 text-sm font-medium text-gray- md:ml-2">
                  {project.title}
                </span>
              </div>
           </li>
          </ol>
        </nav>

        <div className="mb-12 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
                {project.title}
              </h1>
              <p className="text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl">
                {project.fullDescription}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap justify-center md:justify-start">
              {project.tags.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 group">
            <img 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src={project.image} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sobre el Proyecto</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                {project.about}
              </p>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                {project.about2}
              </p>
            </section>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                  <span className="material-icons-outlined text-red-600 dark:text-red-400">X</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">El Desafío</h4>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                  {project.challenge}
                </p>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <span className="material-icons-outlined text-green-600 dark:text-green-400">O</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">La Solución</h4>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                  {project.solution}
                </p>
              </div>
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Galería de Pantallas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((img, index) => (
                    <img 
                      key={index}
                      alt={`${project.title} screenshot ${index + 1}`} 
                      className="rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300" 
                      src={img} 
                    />
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="space-y-8">
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">Detalles del Proyecto</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark">Cliente</span>
                  <p className="text-base font-medium text-gray-900 dark:text-white mt-1">{project.client}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark">Mi Rol</span>
                  <p className="text-base font-medium text-gray-900 dark:text-white mt-1">{project.role}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark">Fecha</span>
                  <p className="text-base font-medium text-gray-900 dark:text-white mt-1">{project.date}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark">Tecnologías</span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.techStack.map((tech, index) => (
                      <div key={index} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700">
                        {tech.icon}
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 flex flex-col gap-3">
                  <a 
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-lg shadow-blue-500/30" 
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Proyecto en Vivo
                  </a>
                  {project.githubUrl && (
                    <a 
                      className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium py-3 px-4 rounded-lg transition-colors" 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
                      </svg>
                      Ver Código
                    </a>
                  )}
                </div>
              </div>
            </div>

            {project.testimonial && (
              <div className="bg-gradient-to-br from-secondary/10 to-transparent p-6 rounded-2xl border border-secondary/20">
                <span className="material-icons-outlined text-4xl text-secondary mb-4">format_quote</span>
                <blockquote className="text-sm italic text-gray-700 dark:text-gray-300 mb-4">
                  "{project.testimonial.quote}"
                </blockquote>
                <cite className="not-italic text-sm font-bold text-gray-900 dark:text-white">
                  - {project.testimonial.author}
                </cite>
              </div>
            )}
          </aside>
        </div>

        <div className="mt-12 pt-12 flex justify-between items-center">
          <div 
            className="cursor-pointer group"
            onClick={() => onProjectSelect(nextProject)}
          >
            <span className="text-sm text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">Siguiente Proyecto</span>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group cursor-pointer hover:text-primary transition-colors">
              {nextProject.title} →
            </h4>
          </div>
          <button 
            onClick={() => onNavigate('projects')}
            className="hidden md:inline-flex items-center text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-white transition-colors"
          >
            Ver todos los proyectos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
