import { useState } from 'react';

export default function Booking() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const rooms = [
    { id: 1, title: 'Suite Presidencial', price: '$200/noche', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop' },
    { id: 2, title: 'Habitación Doble', price: '$120/noche', img: 'https://images.unsplash.com/photo-1560067174-c5a3a8f37060?q=80&w=800&auto=format&fit=crop' },
    { id: 3, title: 'Habitación Simple', price: '$80/noche', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop' },
    { id: 4, title: 'Familiar Deluxe', price: '$150/noche', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop' },
  ];

  const handleReserva = (titulo) => {
    if (!checkIn || !checkOut) {
      alert("Por favor, selecciona un rango de fechas en el calendario antes de reservar.");
      return;
    }
    alert(`¡Reserva confirmada!\nHabitación: ${titulo}\nIngreso: ${checkIn}\nSalida: ${checkOut}`);
  };

  return (
    <section className="py-16 px-8 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Reservas</h2>
      
      {/* Selector de Rango de Fechas (Calendario) */}
      <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-xl mb-10 flex flex-col md:flex-row gap-6 justify-center items-center border border-gray-700">
        <div>
          <label className="block text-gray-300 mb-2 font-bold">Fecha de Ingreso:</label>
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-gray-300 mb-2 font-bold">Fecha de Salida:</label>
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms.map(room => (
          <div key={room.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <img src={room.img} alt={room.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2 text-white">{room.title}</h3>
              <p className="text-blue-400 font-semibold mb-4">{room.price}</p>
              <button onClick={() => handleReserva(room.title)} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                Reservar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}