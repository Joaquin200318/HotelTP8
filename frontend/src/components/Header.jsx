import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-950 border-b border-gray-800 py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-blue-500">HotelTP9</Link>
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-blue-400 transition-colors">Inicio</Link>
        <Link to="/acerca" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Acerca de nosotros</Link>
        <Link to="/reservas" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Reservas</Link>
        <Link to="/contacto" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Contacto</Link>
      </nav>
    </header>
  );
}