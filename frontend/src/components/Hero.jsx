import fondoHero from '../assets/descargar.jpg';

export default function Hero() {
  return (
    <section 
      className="relative py-32 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${fondoHero})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-white mb-4">BIENVENIDO A HOTELTP9
        </h1>
        <p className="text-xl text-gray-200">Tu descanso ideal a un clic de distancia.</p>
      </div>
    </section>
  );
}