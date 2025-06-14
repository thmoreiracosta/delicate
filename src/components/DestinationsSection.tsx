import DestinationCard from './DestinationCard';





export default function DestinationsSection() {
  return (
    <div className="absolute bottom-4 right-4 flex gap-4 px-4 py-2 overflow-x-auto backdrop-blur-sm rounded-xl ">
      {destinations.map((dest, idx) => (
        <DestinationCard
          key={idx}
          image={dest.image}
          title={dest.title}
          subtitle={dest.subtitle}
        />
      ))}
    </div>
  );
}
