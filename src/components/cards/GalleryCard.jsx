import Image from 'next/image';
import React from 'react';

const GalleryCard = ({ image, text }) => {
  return (
    <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
      <Image
        src={image}
        alt={text}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute top-3 left-3 bg-[#FF7043] text-white px-3 py-1 rounded text-xs sm:text-sm font-semibold shadow">
        {text}
      </div>
    </div>
  );
};

export default GalleryCard;
