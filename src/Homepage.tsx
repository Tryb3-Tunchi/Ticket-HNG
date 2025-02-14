// src/pages/HomePage.tsx
import React from 'react';
import Header from './components/Header';
import TicketSelection from './components/TicketSelection';

const HomePage: React.FC = () => {
  return (
    <div className='bg-[#032830]'>
      <Header />
      <TicketSelection />
    </div>
  );
};

export default HomePage;
