'use client';

import React, { useState, useRef } from 'react';
import Container from '@/components/layout/Container';
import GalleryCard from '@/components/cards/GalleryCard';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const categories = [
  'All', 'Sports Day', 'Farewell', 'Cloth Donaton',
  'Republic Day', 'Diwali', 'Independence day', 'Origami',
  'Drawing Compititon', 'Holi', 'Other',
];

const galleryData = [
  { image: '/images/dummy.jpg', text: 'Sports Day', category: 'Sports Day' },
  { image: '/images/dummy.jpg', text: 'Farewell', category: 'Farewell' },
  { image: '/images/dummy.jpg', text: 'Cloth Donation', category: 'Cloth Donaton' },
  { image: '/images/dummy.jpg', text: 'Diwali', category: 'Diwali' },
  { image: '/images/dummy.jpg', text: 'Republic Day', category: 'Republic Day' },
  { image: '/images/dummy.jpg', text: 'Holi', category: 'Holi' },
  { image: '/images/dummy.jpg', text: 'Origami', category: 'Origami' },
  { image: '/images/dummy.jpg', text: 'Independence Day', category: 'Independence day' },
  { image: '/images/dummy.jpg', text: 'Drawing Competition', category: 'Drawing Compititon' },
  { image: '/images/dummy.jpg', text: 'Other', category: 'Other' },
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [zoomImage, setZoomImage] = useState(null);
  const scrollRef = useRef(null);

  const filteredGallery =
    selectedCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -150 : 150,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="pt-[150px] mx-5">
      <Container>
        <h1 className="text-[#FF7043] font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-8">
          Gallery
        </h1>

        {/* Scrollable Category List */}
        <div className="relative mb-6">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow lg:hidden"
          >
            <FaChevronLeft size={16} />
          </button>

          <div ref={scrollRef} className="overflow-x-auto scrollbar-hide px-8 sm:px-0">
            <ul className="flex gap-3 sm:gap-4 md:gap-5 whitespace-nowrap">
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer px-3 py-1 border rounded-full text-sm sm:text-base transition ${
                    selectedCategory === category
                      ? 'bg-[#FF7043] text-white'
                      : 'text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow lg:hidden"
          >
            <FaChevronRight size={16} />
          </button>
        </div>

        <hr className="text-gray-300 mb-8" />

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={index}
              onClick={() => setZoomImage(item.image)}
              className="cursor-zoom-in"
            >
              <GalleryCard image={item.image} text={item.text} />
            </div>
          ))}
        </div>
      </Container>

      {/* Zoom Modal */}
      {zoomImage && (
        <div
          onClick={() => setZoomImage(null)}
          className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center"
        >
          <div className="relative max-w-3xl w-full p-4">
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-0 right-0 cursor-pointer hover:text-[#FF7043] text-white text-xl"
            >
              <FaTimes />
            </button>
            <img
              src={zoomImage}
              alt="Zoomed"
              className="w-full h-auto object-contain rounded shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;