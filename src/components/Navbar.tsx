// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-10 px-10 py-6 text-white flex justify-between items-center">      
      <nav className="space-x-10">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Informações</a>
        <a href="#" className="hover:underline">Fale Conosco</a>
      </nav>
    </header>
  );
}