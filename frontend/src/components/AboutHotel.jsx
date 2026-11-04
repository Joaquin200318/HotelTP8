export default function AboutHotel() {
  return (
    <section 
      className="relative py-24 px-8 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop')" }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-6">Sobre Nosotros</h2>
        <p className="text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed">
          Somos un hotel boutique enfocado en brindar el mejor confort y servicio. Nuestras instalaciones cuentan con tecnología de punta, spa, y restaurante de nivel internacional.
        </p>
      </div>
    </section>
  );
}