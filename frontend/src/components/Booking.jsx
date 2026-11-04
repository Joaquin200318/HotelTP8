import RoomCard from './RoomCard';

export default function Booking() {
  const rooms = [
    { 
      id: 1, 
      title: 'Suite Presidencial', 
      price: '$200/noche', 
      img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 2, 
      title: 'Habitación Doble', 
      price: '$120/noche', 
      img: 'https://images.unsplash.com/photo-1560067174-c5a3a8f37060?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 3, 
      title: 'Habitación Simple', 
      price: '$80/noche', 
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 4, 
      title: 'Familiar Deluxe', 
      price: '$150/noche', 
      img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop' 
    },
  ];

  return (
    <section className="py-16 px-8 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Nuestras Habitaciones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms.map(room => (
          <RoomCard key={room.id} title={room.title} price={room.price} img={room.img} />
        ))}
      </div>
    </section>
  );
}