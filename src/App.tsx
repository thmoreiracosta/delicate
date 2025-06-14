// src/App.tsx
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="relative min-h-screen font-sans">
      
      <Navbar />
      <HeroSection />
    </div>
  );
}
