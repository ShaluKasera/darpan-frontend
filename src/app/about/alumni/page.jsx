'use client';
import React, { useState } from 'react';
import StudentCard from '@/components/cards/StudentCard';
import Container from '@/components/layout/Container';
import AlumniDetailModal from '@/components/modals/AlumniDetailModal';

const alumn = [
  { id: 'V01', image: '/images/dummy.jpg', name: 'Piyush Pashwan1', phone: '1234567890', enrollmentId: 'E001', gender: 'Male', year: '2nd', department: 'CSE', email: 'piyush113@example.com', residence: 'Hostel A' },
  { id: 'V02', image: '/images/dummy.jpg', name: 'Piyush Pashwan2', phone: '1234567890', enrollmentId: 'E002', gender: 'Male', year: '2nd', department: 'CSE', email: 'piyush2@example.com', residence: 'Hostel A' },
  { id: 'V03', image: '/images/dummy.jpg', name: 'Piyush Pashwan3', phone: '1234567890', enrollmentId: 'E003', gender: 'Male', year: '2nd', department: 'CSE', email: 'piyush3@example.com', residence: 'Hostel A' },
  { id: 'V04', image: '/images/dummy.jpg', name: 'Piyush Pashwan4', phone: '1234567890', enrollmentId: 'E004', gender: 'Male', year: '2nd', department: 'CSE', email: 'piyush4@example.com', residence: 'Hostel A' },
  { id: 'V05', image: '/images/dummy.jpg', name: 'Piyush Pashwan5', phone: '1234567890', enrollmentId: 'E005', gender: 'Male', year: '2nd', department: 'CSE', email: 'piyush5@example.com', residence: 'Hostel A' },
  { id: 'V06', image: '/images/dummy.jpg', name: 'Piyush Pashwan6', phone: '1234567890', enrollmentId: 'E006', gender: 'Male', year: '2nd', department: 'CSE', email: 'piyush6@example.com', residence: 'Hostel A' },
  { id: 'V07', image: '/images/dummy.jpg', name: 'Piyush Pashwan7', phone: '1234567890', enrollmentId: 'E007', gender: 'Male', year: '2nd', department: 'CSE', email: 'piyush7@example.com', residence: 'Hostel A' },
  { id: 'V08', image: '/images/dummy.jpg', name: 'Piyush Pashwan8', phone: '1234567890', enrollmentId: 'E008', gender: 'Male', year: '2nd', department: 'CSE', email: 'piyush8@example.com', residence: 'Hostel A' },
  { id: 'V09', image: '/images/dummy.jpg', name: 'Piyush Pashwan9', phone: '1234567890', enrollmentId: 'E009', gender: 'Male', year: '2nd', department: 'CSE', email: 'piyush9@example.com', residence: 'Hostel A' },
  { id: 'V10', image: '/images/dummy.jpg', name: 'Piyush Pashwan0', phone: '1234567890', enrollmentId: 'E010', gender: 'Male', year: '2nd', department: 'CSE', email: 'piyush0@example.com', residence: 'Hostel A' },
];

const ITEMS_PER_PAGE = 4;

const AlumnAboutPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAlumn, setSelectedAlumn] = useState(null);

  const totalPages = Math.ceil(alumn.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAlumns = alumn.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="pt-[120px]">
      <Container>
        <section className="py-10 px-4 md:px-8 mb-10">
          <h2 className="text-[#FF7043] font-bold text-5xl text-center mb-5">Our Alumns</h2>
          <p className="text-sm font-bold text-gray-500 mb-6">
            Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} –
            {Math.min(currentPage * ITEMS_PER_PAGE, alumn.length)} out of {alumn.length}
          </p>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentAlumns.map((vol, idx) => (
              <StudentCard
                key={idx}
                image={vol.image}
                name={vol.name}
                onView={() => setSelectedAlumn(vol)}
              />
            ))}
          </div>

          <div className="flex justify-end mt-10">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`w-9 h-9 cursor-pointer rounded-full text-sm font-medium border 
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
      </Container>

      {/* Modal */}
      {selectedAlumn && (
        <AlumniDetailModal
          alumn={selectedAlumn}
          onClose={() => setSelectedAlumn(null)}
          onEdit={() => {
            alert(`Edit ${selectedAlumn.name}`);
            setSelectedAlumn(null);
          }}
        />
      )}
    </div>
  );
};

export default AlumnAboutPage;
