export default function RoomCard({ title, price, img }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-blue-400 font-semibold mb-4">{price}</p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
          Reservar
        </button>
      </div>
    </div>
  );
}