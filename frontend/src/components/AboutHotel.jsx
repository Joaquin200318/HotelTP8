export default function AboutHotel() {
  return (
    <section className="py-16 px-8 bg-gray-950">
      <div className="max-w-4xl mx-auto text-gray-300">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Acerca de nosotros</h2>
        
        <div className="bg-gray-900 p-8 md:p-10 rounded-xl shadow-lg border border-gray-800">
          <p className="text-lg mb-4 font-semibold text-white">
            📍 Ubicación: Salta Capital, Argentina.
          </p>
          
          <p className="text-lg mb-10 leading-relaxed">
            Descubrí el equilibrio perfecto entre relax y entretenimiento en el corazón de Salta. Nuestro hotel te ofrece instalaciones de primer nivel para que vivas una estadía inolvidable.
          </p>

          <h3 className="text-xl font-bold text-blue-400 mb-4 border-b border-gray-800 pb-2">
            Nuestras Instalaciones:
          </h3>
          <ul className="space-y-4 mb-10">
            <li>🎰 <strong className="text-white">Casino Privado:</strong> Mesas de juego en vivo y tragamonedas de última generación.</li>
            <li>🏊‍♀️ <strong className="text-white">Pileta y Solárium:</strong> Piscina al aire libre con vista a los cerros para disfrutar del sol salteño.</li>
            <li>☕ <strong className="text-white">Salas de Estar:</strong> Diferentes espacios comunes, desde un lounge silencioso para lectura hasta rincones cálidos para relajarse con un buen vino.</li>
          </ul>

          <h3 className="text-xl font-bold text-blue-400 mb-4 border-b border-gray-800 pb-2">
            Nuestras Habitaciones:
          </h3>
          <ul className="space-y-4">
            <li>👑 <strong className="text-white">Suite Presidencial:</strong> Máximo lujo y amplitud. Cama king, jacuzzi, comedor privado y vistas panorámicas.</li>
            <li>👨‍👩‍👧‍👦 <strong className="text-white">Familiar Deluxe (5 personas):</strong> Espacio ideal para familias. Dos ambientes conectados, baño completo y todas las comodidades para compartir.</li>
            <li>🛏️ <strong className="text-white">Habitación Doble:</strong> Perfecta para parejas. Cama matrimonial o camas separadas, diseño cálido y moderno.</li>
            <li>💼 <strong className="text-white">Habitación Simple:</strong> Acogedora y funcional, ideal para el viajero solo o por negocios.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}