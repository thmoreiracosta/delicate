import HeroSection from "./components/HeroSection";
import DestinationsSection from "./components/DestinationsSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      <HeroSection />
      <Navbar />
      <DestinationsSection />
    </div>
  );
}

export default App;
