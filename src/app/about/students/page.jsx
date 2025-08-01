'use client';
import React, { useState } from 'react';
import StudentCard from '@/components/cards/StudentCard';
import Container from '@/components/layout/Container';
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

const ITEMS_PER_PAGE = 4;

const StudentAboutPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(students.length / ITEMS_PER_PAGE);
    const [selectedStudent, setSelectedStudent] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentStudents = students.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="pt-[120px]">
      <Container>
        <section className="py-10 px-4 md:px-8 mb-10">
          <h2 className="text-[#FF7043] font-bold text-5xl text-center mb-5">Our Students</h2>
          <p className="text-sm font-bold text-gray-500 mb-6">
            Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} {" "}
            –{" "}
            {Math.min(currentPage * ITEMS_PER_PAGE, students.length)} out of {students.length}
          </p>


          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentStudents.map((student, idx) => (
              <StudentCard
                image={student.image}
                name={student.name}
                onView={() => setSelectedStudent(student)}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-end mt-10">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`w-9 h-9 rounded-full cursor-pointer text-sm font-medium border 
                    ${currentPage === index + 1
                      ? 'bg-[#FF7043] text-white border-[#FF7043]'
                      : 'bg-white text-black border-gray-300 hover:bg-gray-100'
                    }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
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
    </div>
  );
};

export default StudentAboutPage;
