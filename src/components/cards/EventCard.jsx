import Button from "../atoms/Button";

const EventCard = ({ event,onClick }) => {
  return (
    <div className="relative w-full h-60  rounded overflow-hidden">
      <img
        src={event.image}
        alt={event.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-2 left-2 bg-[#FF7043] text-white text-xs font-semibold px-2 py-1 rounded">
        {event.title}
      </div>

      <button className="absolute bottom-2 right-2 text-sm bg-[#FF7043] text-white px-2 py-0.5 rounded hover:bg-[#ff7043] transition-all duration-300 cursor-pointer"   onClick={onclick}>View Details</button>

    </div>
  );
};

export default EventCard;
