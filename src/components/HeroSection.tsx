import { useState } from "react";
import DestinationCard from "./components/DestinationCard";
import bgImage from "/img/veneza-3.jpg"; // substitua pela sua imagem real

export default function HeroSection() {
  const [backgroundImage, setBackgroundImage] = useState("/img/veneza-3.jpg");

  const destinations = [
    { image: "/images/bali.jpg", title: "Bali", subtitle: "Visite Bali" },
    { image: "/images/paris.jpg", title: "Paris", subtitle: "Visite Paris" },
    { image: "/images/roma.jpg", title: "Roma", subtitle: "Visite Roma" },
    { image: "/images/veneza.jpg", title: "Veneza", subtitle: "Visite Veneza" },
  ];


  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundColor: `url(${bgImage})`,
      
      }}
    >
      {/* Filtro escurecido com transparência leve */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-saturate-12"></div>

      {/* Conteúdo em cima da imagem */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10 text-white max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">Veneza</h1>
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem
          ab voluptas dicta facilis eos sed animi, est error placeat? Sed, illo
          provident.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition">
            SAIBA MAIS
          </button>
          <button className="bg-white text-black px-6 py-2 hover:bg-opacity-90 transition">
            ACESSAR
          </button>
        </div>
      </div>
    </div>
  );
}
