// src/components/HeroSection.tsx
const cities = [
  { name: 'Bali', image: 'https://source.unsplash.com/80x60/?bali' },
  { name: 'Paris', image: 'https://source.unsplash.com/80x60/?paris' },
  { name: 'Roma', image: 'https://source.unsplash.com/80x60/?rome' },
  { name: 'Veneza', image: 'https://source.unsplash.com/80x60/?venice' },
];

export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-start text-white"
      style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?venice)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 p-10 max-w-2xl">
        <h1 className="text-6xl font-bold mb-4">Veneza</h1>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem ab voluptas dicta facilis eos sed animi, est error placeat? Sed, illo provident.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition-all">SAIBA MAIS</button>
          <button className="px-6 py-2 bg-white text-black rounded hover:bg-gray-300 transition-all">ACESSAR</button>
        </div>
      </div>

      <div className="absolute bottom-5 right-5 flex space-x-4 z-10">
        {cities.map((city) => (
          <div key={city.name} className="bg-white bg-opacity-90 p-2 rounded shadow text-black text-center w-24 hover:scale-105 transition-transform">
            <img src={city.image} alt={city.name} className="rounded mb-1 w-full h-auto" />
            <span className="text-sm font-semibold">{city.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
