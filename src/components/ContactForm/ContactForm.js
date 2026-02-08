import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You could add email sending logic, API calls, etc.
  };

  return (
    <section id="contact" className="relative flex items-center justify-center py-12 lg:py-24 grid-bg overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent-purple/10 dark:bg-accent-purple/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          
          {/* Left side - Contact info */}
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              Contacto
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              ¿Listo para empezar tu próximo proyecto?
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg">
              Ya sea que tengas una idea clara o necesites asesoramiento técnico, estoy aquí para ayudarte a construir soluciones digitales robustas y escalables.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-card-dark shadow-sm border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">Email</p>
                  <a className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary transition-colors" href="mailto:hola@devstudio.com">
                    jcaleb.obastos@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-card-dark shadow-sm border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">Ubicación</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Remoto / Lima</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="bg-white dark:bg-card-dark rounded-3xl p-8 lg:p-10 shadow-2xl shadow-blue-500/5 border border-gray-100 dark:border-white/5 relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
                  Nombre completo
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-6 h-6 text-gray-400 group-focus-within:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    className="block w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-background-dark/50 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent rounded-xl dark:text-white transition-all outline-none"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ej. Juan Pérez"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                  Correo electrónico
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-6 h-6 text-gray-400 group-focus-within:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    className="block w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-background-dark/50 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent rounded-xl dark:text-white transition-all outline-none"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
                  Mensaje
                </label>
                <div className="relative">
                  <textarea
                    className="block w-full p-4 bg-gray-50 dark:bg-background-dark/50 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent rounded-xl dark:text-white transition-all outline-none min-h-[160px] resize-none"
                    id="message"
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto, objetivos y plazos..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <button
                className="w-full flex justify-center items-center py-4 px-6 rounded-xl text-base font-bold text-white bg-primary hover:bg-blue-600 active:scale-[0.98] transition-all shadow-lg shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                type="submit"
              >
                Enviar mensaje
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;