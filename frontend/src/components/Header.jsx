import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-950 border-b border-gray-800 py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-blue-500">HotelTP8</Link>
      <nav className="flex gap-6">
        <Link to="/hotel" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Hotel</Link>
        <Link to="/habitaciones" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Habitaciones</Link>
        <Link to="/contacto" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Contacto</Link>
      </nav>
    </header>
  );
}