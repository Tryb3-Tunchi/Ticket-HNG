import { useState } from "react";
import "./App.css";
import TicketForm from "./components/TicketForm";
import HomePage from "./Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AttendeeDetails from "./components/AttendeeDetails";
import Upload from "./Upload";
import Confirmation from "./ConfirmTicket";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Attendee" element={<Upload />} />
          <Route path="/confirm" element={<Confirmation />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
