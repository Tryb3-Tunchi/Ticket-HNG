
import "./App.css";

import HomePage from "./Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
