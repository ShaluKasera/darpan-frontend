const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={event.image} alt={event.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{event.name}</h3>
        <p className="text-sm text-gray-500">{event.title}</p>
      </div>
    </div>
  );
};

export default EventCard;
