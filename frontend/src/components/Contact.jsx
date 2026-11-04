import { useState } from 'react';
import imgIzquierda from '../assets/Hotel London 1889 & Casino.jpg';
import imgDerecha from '../assets/Hotel Presidente.jpg';

export default function Contact() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      e.target.reset(); 
    }, 3000);
  };

  return (
    <section className="py-16 px-8 bg-gray-950">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Contacto</h2>
      
      {/* Contenedor Grid: 1 columna en móvil, 3 columnas en pantallas grandes */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Imagen Izquierda (se oculta en pantallas pequeñas para no amontonar) */}
        <div className="hidden md:block">
          <img 
            src={imgIzquierda} 
            alt="Interior del Casino" 
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Formulario en el centro */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800 w-full max-w-md mx-auto">
          <input 
            required 
            type="text" 
            placeholder="Tu Nombre" 
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500" 
          />
          <input 
            required 
            type="email" 
            placeholder="Tu Email" 
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500" 
          />
          <textarea 
            required 
            placeholder="Tu Mensaje" 
            rows="5" 
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
          ></textarea>
          
          {enviado ? (
            <div className="bg-green-600 text-white text-center font-bold py-3 rounded transition-all">
              ¡Mensaje enviado con éxito!
            </div>
          ) : (
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition-colors"
            >
              Enviar Mensaje
            </button>
          )}
        </form>

        {/* Imagen Derecha (se oculta en pantallas pequeñas) */}
        <div className="hidden md:block">
          <img 
            src={imgDerecha} 
            alt="Exterior del Hotel y Piscina" 
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}