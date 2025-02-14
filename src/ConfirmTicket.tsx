// src/pages/HomePage.tsx
import React from "react";
import Header from "./components/Header";
import TicketConfirmation from "./components/Confirmation";

const Confirmation: React.FC = () => {
  return (
    <div className="bg-[#032830]">
      <Header />
      <TicketConfirmation />
    </div>
  );
};

export default Confirmation;
