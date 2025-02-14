// src/pages/HomePage.tsx
import React from "react";
import Header from "./components/Header";
import AttendeeDetails from "./components/AttendeeDetails";

const Upload: React.FC = () => {
  return (
    <div className="bg-[#02191D]">
      <Header />
      <AttendeeDetails />
    </div>
  );
};

export default Upload;
