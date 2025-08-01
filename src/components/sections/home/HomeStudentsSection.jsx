import React from 'react';
import StudentCard from '@/components/cards/StudentCard';
import Container from '@/components/layout/Container';
import Link from 'next/link';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const students = [
  {
    image: '/images/dummy.jpg',
    name: 'Piyush Pashwan',
  },
  {
    image: '/images/dummy.jpg',
    name: 'Piyush Pashwan',
  },
  {
    image: '/images/dummy.jpg',
    name: 'Piyush Pashwan',
  },
  {
    image: '/images/dummy.jpg',
    name: 'Piyush Pashwan',
  },
];

const HomeStudentsSection = () => {
  return (
    <Container>
      <section className="py-10 px-8 mb-10">
        {/* Title Centered */}
        <h2 className="text-[#FF7043] font-bold text-5xl text-center mb-4">Our Students</h2>

        {/* View more right aligned */}
        <div className="flex justify-end mb-2 px-2">
          <Link
            href="/about/students"
            className="text-black text-sm inline-flex items-center gap-1 hover:text-[#FF7043] transition-all duration-300"
          >
            View more <IoArrowForwardCircleOutline className="text-lg" />
          </Link>
        </div>

       
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {students.map((students, idx) => (
                    <div
                        key={idx}
                        className={`
        ${idx > 0 ? 'hidden' : ''} 
        md:${idx > 1 ? 'hidden' : ''} 
        lg:block
      `}
                    >
                        <StudentCard image={students.image} name={students.name} />
                    </div>
                ))}
            </div>
      </section>
    </Container>
  );
};

export default HomeStudentsSection;
