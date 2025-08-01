    const Sidebar = ({ filters, selected, onSelect }) => {
  return (
     <>
    
    <div className="w-50 flex flex-col gap-1">
        <p className="text-[#FF7043] font-bold text-xl sm:text-2xl md:text-4xl  mb-0">
          Events
        </p>
        <div className="h-1 w-[120px] bg-yellow-300 rounded-md mb-4"/>
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => onSelect(filter)}
          className={`px-3 py-2 rounded-md cursor-pointer text-left font-medium
            ${selected === filter
              ? 'bg-[#FF7043] text-white'
              : ' hover:bg-[#f4bba9] text-black '}`}
        >
          {filter}
        </button>
      ))}
    </div>
     </>
  );
};

export default Sidebar;
