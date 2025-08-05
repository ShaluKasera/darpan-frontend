'use client';

import React, { useState } from 'react';
import EventCard from '@/components/cards/EventCard';
import Sidebar from '@/components/layout/EventSidebar';
import Container from '@/components/layout/Container';
import { FaArrowRight } from 'react-icons/fa';

const eventData = [
  { id: 1, title: 'Festival', name: 'Holi Celebration', image: '/images/dummy.jpg' },
  { id: 2, title: 'Competition', name: 'Debate Contest', image: '/images/dummy.jpg' },
  { id: 3, title: 'Festival', name: 'Diwali Night', image: '/images/dummy.jpg' },
  { id: 4, title: 'Competition', name: 'Coding Hackathon', image: '/images/dummy.jpg' },
  { id: 5, title: 'Social', name: 'Blood Donation Camp', image: '/images/dummy.jpg' },
  { id: 6, title: 'Festival', name: 'Holi DJ Night', image: '/images/dummy.jpg' },
  { id: 7, title: 'Competition', name: 'Math Olympiad', image: '/images/dummy.jpg' },
];

const filters = [
  'All', 'Cloth Donation', 'Sports Day', 'Republic Day', 'Origami',
  'Diwali', 'Holi', 'Indepentdence Day', 'Drawing compititon'
];

const ITEMS_PER_PAGE = 4;

const EventPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEvents =
    selectedFilter === 'All'
      ? eventData
      : eventData.filter(event => event.title === selectedFilter);

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentEvents = filteredEvents.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setCurrentPage(1); // reset page on filter change
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <div className="pt-[150px] md:pt-[120px] px-4 md:px-10">
        {/* Mobile Arrow Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-white top-[100px] text-xl !bg-[#FF7043] p-2 rounded-2xl"
            aria-label="Open Sidebar"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Sidebar - Mobile View */}
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/10 z-30 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
            <div className="fixed top-[130px] left-0 w-[220px] z-40 bg-[#FFE5D0] shadow-md border-r h-full md:hidden">
              <Sidebar
                filters={filters}
                selected={selectedFilter}
                onSelect={(filter) => {
                  handleFilterSelect(filter);
                  setIsSidebarOpen(false);
                }}
              />
            </div>
          </>
        )}

        <div className="flex gap-6">
          {/* Sidebar Desktop */}
          <div className="w-[225px] hidden md:block">
            <div className=" top-[150px]">
              <Sidebar
                filters={filters}
                selected={selectedFilter}
                onSelect={handleFilterSelect}
              />
            </div>
          </div>

          {/* Events Section */}
          <div className="flex-1 flex flex-col gap-6 pb-2">
            {/* Header */}
            <div>
              <p className="text-sm font-bold text-gray-500">
                Showing {startIndex + 1} – {Math.min(startIndex + ITEMS_PER_PAGE, filteredEvents.length)} of {filteredEvents.length}
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {currentEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-end mt-0">
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
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EventPage;
