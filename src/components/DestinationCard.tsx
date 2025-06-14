type DestinationCardProps = {
  image: string;
  title: string;
  subtitle: string;
};

export default function DestinationCard({ image, title, subtitle }: DestinationCardProps) {
  return (
    <div className="w-[120px] sm:w-[140px] md:w-[160px] cursor-pointer group transition-transform duration-500 transform hover:scale-110 hover:-translate-y-1 ">
      <div
        className="rounded-xl overflow-hidden shadow-md h-[180px] sm:h-[200px] md:h-[220px] relative"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1 "
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/60 to-transparent z-10">
          <h3 className="text-white text-sm font-semibold">{title}</h3>
          <p className="text-white/70 text-xs">{subtitle}</p>
        </div>

        {/* Camada escura para manter o texto legível mesmo com zoom */}
        <div className="absolute inset-0 bg-black/10 z-0 rounded-xl"></div>
      </div>
    </div>
  );
}
