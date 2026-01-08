import { Component } from 'react';

class Slogan extends Component {
  render() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-8 animate-fade-in-up">
          Estudio de Desarrollo Web y Diseño del Mañana
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Descubre nuestro trabajo
          </button>
          <button className="bg-transparent hover:bg-gray-800 text-gray-800 hover:text-white font-semibold py-3 px-8 rounded-lg border-2 border-gray-800 transform transition-all duration-300 hover:scale-105">
            Ver Servicios
          </button>
        </div>
      </div>
    );
  }
}

export default Slogan;