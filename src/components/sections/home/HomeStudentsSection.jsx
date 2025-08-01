'use client';
import React, { useState } from 'react';
import StudentCard from '@/components/cards/StudentCard';
import Container from '@/components/layout/Container';
import Link from 'next/link';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import StudentDetailModal from '@/components/modals/StudentDetailModel';

const students = [
  {
    id: 'S101',
    image: '/images/dummy.jpg',
    name: 'Piyush Pashwan',
    std: '10th',
    gender: 'Male',
    add: 'Delhi',
  },
  {
    id: 'S102',
    image: '/images/dummy.jpg',
    name: 'Aarav Singh',
    std: '9th',
    gender: 'Male',
    add: 'Kolkata',
  },
  {
    id: 'S103',
    image: '/images/dummy.jpg',
    name: 'Riya Kumari',
    std: '11th',
    gender: 'Female',
    add: 'Patna',
  },
  {
    id: 'S104',
    image: '/images/dummy.jpg',
    name: 'Aditya Jha',
    std: '8th',
    gender: 'Male',
    add: 'Ranchi',
  },
];

const HomeStudentsSection = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <Container>
      <section className="py-10 px-8 mb-10">
        <h2 className="text-[#FF7043] font-bold text-5xl text-center mb-4">Our Students</h2>

        <div className="flex justify-end mb-2 px-2">
          <Link
            href="/about/students"
            className="text-black text-sm inline-flex items-center gap-1 hover:text-[#FF7043] transition-all duration-300"
          >
            View more <IoArrowForwardCircleOutline className="text-lg" />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {students.map((student, idx) => (
            <div
              key={idx}
              className={`
                ${idx > 0 ? 'hidden' : ''} 
                md:${idx > 1 ? 'hidden' : ''} 
                lg:block
              `}
            >
              <StudentCard
                image={student.image}
                name={student.name}
                onView={() => setSelectedStudent(student)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedStudent && (
        <StudentDetailModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
          onDelete={() => {
            alert(`Delete ${selectedStudent.name}`);
            setSelectedStudent(null);
          }}
        />
      )}
    </Container>
  );
};

export default HomeStudentsSection;
