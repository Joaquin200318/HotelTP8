import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutHotel from './components/AboutHotel';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
        <Header />
        <Routes>
          {/* Ruta principal que muestra toda la landing */}
          <Route path="/" element={
            <main>
              <Hero />
              <AboutHotel />
              <Booking />
              <Contact />
            </main>
          } />
          {/* Rutas individuales para las nuevas pestañas */}
          <Route path="/hotel" element={<div className="p-10"><AboutHotel /></div>} />
          <Route path="/habitaciones" element={<div className="p-10"><Booking /></div>} />
          <Route path="/contacto" element={<div className="p-10"><Contact /></div>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;