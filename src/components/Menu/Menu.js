import { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Nosotros</a>
              <a href="#proyectos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Proyectos</a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Servicios</a>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Hablemos</button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;