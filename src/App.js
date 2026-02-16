import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import { useState } from 'react';
import { projects } from './data/projects';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    window.scrollTo(0, 0);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  const handleNavigate = (sectionId) => {
    if (selectedProject) {
      setSelectedProject(null);
    }
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {selectedProject ? (
        <>
          <Navigation onNavigate={handleNavigate} />
          <ProjectDetail 
            project={selectedProject} 
            onBack={handleBackToProjects}
            allProjects={projects}
            onProjectSelect={handleProjectSelect}
            onNavigate={handleNavigate}
          />
          <Footer />
        </>
      ) : (
        <>
          <Navigation onNavigate={handleNavigate} />
          <Hero onNavigate={handleNavigate} />
          <About />
          <Services />
          <Projects onProjectSelect={handleProjectSelect} />
          <ContactForm />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
