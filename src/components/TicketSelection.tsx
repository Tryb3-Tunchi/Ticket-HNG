import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TicketSelection: React.FC = () => {
  const [selectedTicket, setSelectedTicket] = useState<string>("free");
  const [ticketCount, setTicketCount] = useState<number>(1);

  const navigate = useNavigate();

  return (
    <main className="p-8 max-w-3xl mx-auto rounded-xl shadow-lg bg-[#041E23]">
      {/* <div className="border border-[#24A0B5] bg-[#07373f] rounded-xl p-6 m-4"> */}
      {/* Header Section */}
      

      
      <div className="border border-[#24A0B5] rounded-xl p-6 "><div className="flex justify-between items-center border-b-2 border-[#24A0B5] mb-8">
        <h1 className="text-lg font-bold text-white text-left mb-4">Ticket Selection</h1>
        <p className="text-white mb-4 text-sm">Step 1/3</p>
      </div>
        <div className="border border-[#24A0B5] shadow-inner bg-[#07373f] rounded-xl p-4">
          <h2 className="text-3xl font-bold text-[#24A0B5] text-center mb-4">
            Techember Fest ”25
          </h2>
          <p className="text-white text-sm text-center mb-4">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <p className="text-white text-sm text-center mb-2">
            📍 [Event Location]
          </p>
          <p className="text-white text-sm text-center mb-4">
            March 15, 2025 | 7:00 PM
          </p>
        </div>

        {/* Ticket Selection */}
        <div className="text-white border-b border-[#24A0B5] p-6 mb-6">
          <p className="text-lg font-semibold text-center">
            Select Ticket Type:
          </p>
          <div className="flex flex-wrap sm:flex-row justify-center sm:space-x-8 md:space-x-12 mt-4">
            {["free", "$150 VIP", "$155 VVIP"].map((ticketType) => (
              <button
                key={ticketType}
                onClick={() => setSelectedTicket(ticketType)}
                className={`${
                  selectedTicket === ticketType
                    ? "bg-[#24A0B5] text-white"
                    : "bg-[#197686] text-white"
                } px-4 py-2 rounded-md w-full sm:w-1/3 md:w-auto flex flex-col items-center transition duration-300 hover:bg-[#24A0B5] my-2`}
              >
                <div>
                  {ticketType.charAt(0).toUpperCase() + ticketType.slice(1)}
                </div>
                <div>Access</div>
                <div className="text-xs py-2 text-left">20/52</div>
              </button>
            ))}
          </div>
        </div>

        {/* Number of Tickets Input */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-white">
            Number of Tickets
          </label>
          <input
            type="number"
            value={ticketCount}
            onChange={(e) => setTicketCount(Number(e.target.value))}
            className="mt-2 w-full px-4 py-2 border border-[#24A0B5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#24A0B5] bg-[#07373F] text-white"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between mt-6">
          <button className="w-full sm:w-1/3 bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 mb-4 sm:mb-0">
            Cancel
          </button>
          <button
            onClick={() =>
              navigate("Attendee", {
                state: { ticketType: selectedTicket, ticketCount },
              })
            }
            className="w-full sm:w-1/3 bg-[#197686] text-white py-2 rounded-md hover:bg-[#24A0B5] transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default TicketSelection;
