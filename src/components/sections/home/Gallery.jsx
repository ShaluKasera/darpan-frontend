import React from 'react';
import StudentCard from '@/components/cards/StudentCard';
import Container from '@/components/layout/Container';
import Link from 'next/link';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import HomeGalleryCard from '@/components/cards/HomeGalleryCard';
import Button from '@/components/atoms/Button';

const gallery = [
    {
        image: '/images/dummy.jpg',
        title: 'Sport Day',
    },
    {
        image: '/images/dummy.jpg',
        title: 'Sport Day',
    },
    {
        image: '/images/dummy.jpg',
        title: 'Sport Day',
    },
    {
        image: '/images/dummy.jpg',
        title: 'Sport Day',
    },
];

const Gallery = () => {
    return (

        <section className="py-10 px-8 md:px-32  bg-[#FBF9F6] ">
            {/* Title Centered */}
            <h2 className="text-[#FF7043] font-bold text-5xl text-center mb-10">From Our Gallery</h2>


            {/* Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {gallery.map((gallery, idx) => (
                    <div
                        key={idx}
                        className={`
        ${idx > 0 ? 'hidden' : ''} 
        md:${idx > 1 ? 'hidden' : ''} 
        lg:block
      `}
                    >
                        <HomeGalleryCard image={gallery.image} title={gallery.title} />
                    </div>
                ))}
            </div>

            <div className="flex justify-center mb-10">
                <Button className="w-[150px]" text="View Gallery" />
            </div>
        </section>

    );
};

export default Gallery;
