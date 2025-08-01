'use client';

import React, { useState } from 'react';
import EventCard from '@/components/cards/EventCard';
import Sidebar from '@/components/layout/EventSidebar'; 
import Container from '@/components/layout/Container';
const eventData = [
  { id: 1, title: 'Festival', name: 'Holi Celebration', image: '/images/dummy.jpg' },
  { id: 2, title: 'Competition', name: 'Debate Contest', image: '/images/dummy.jpg' },
  { id: 3, title: 'Festival', name: 'Diwali Night', image: '/images/dummy.jpg' },
  { id: 4, title: 'Competition', name: 'Coding Hackathon', image: '/images/dummy.jpg' },
  { id: 5, title: 'Social', name: 'Blood Donation Camp', image: '/images/dummy.jpg' },
];

const filters = ['All','Cloth Donation', 'Sports Day', 'Republic Day', 'Origami','Diwali', 'Holi', 'Indepentdence Day', 'Drawing compititon'];

const EventPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredEvents = selectedFilter === 'All'
    ? eventData
    : eventData.filter(event => event.title === selectedFilter);

  return (
    <Container>
    <div className="flex pt-[180px] px-4 md:px-10 gap-6">
      <Sidebar filters={filters} selected={selectedFilter} onSelect={setSelectedFilter} />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
    </Container>
  );
};

export default EventPage;
