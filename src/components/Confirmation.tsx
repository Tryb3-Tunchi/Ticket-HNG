import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TicketConfirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get data from the previous page
  const { ticketType, ticketCount, name, email, specialRequest, imageUrl } =
    location.state || {};

  return (
    <main className="p-8 max-w-3xl mx-auto rounded-xl shadow-lg bg-[#041E23] text-white">
      {/* Navigation Header */}
      <div className="flex justify-between items-center border-b-2 border-[#24A0B5] pb-4 mb-6">
        <h1 className="text-xl font-bold">Ready</h1>
        <p className="text-sm">Step 3/3</p>
      </div>

      {/* Ticket Confirmation Section */}
      <div className=" rounded-xl py-4 text-center">
        <h2 className="text-2xl font-bold text-[#24A0B5] mb-2">
          Your Ticket is Booked!
        </h2>
        <p className="text-sm">
          Check your email for a copy or you can download it below.
        </p>
      </div>

      {/* Ticket Display */}
      <div className=" bg-[#062e35] border p-4 pb-6 rounded-2xl">
        <div className="my-6 border border-[#24A0B5] bg-[#07373f] rounded-xl p-2 flex flex-col items-center m-auto md:w-2/4">
          <h3 className="text-2xl pb-1 font-bold text-[#24A0B5]">
            Techember Fest ‘25
          </h3>
          <p className="text-sm">📍 04 Rumens road, Ikoyi, Lagos</p>
          <p className="text-sm">📅 March 15, 2025 | 7:00 PM</p>
          <div>
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Ticket"
                className="w-32 h-32 rounded-lg mb-4"
              />
            )}
          </div>

          <div className="mt-6 shadow-lg w-full m-auto border-[#24A0B5] bg-[#06323a] rounded-xl p-4">
            <div className="text-xs ">
              <div className="">
                <div className="border-t flex justify-between">
                  <p className="py-4 text-left text-[#24A0B5]">
                    Enter your name:
                    <p className="text-white  py-2 mx-2">{name}</p>
                  </p>

                  <p className="py-4 text-right text-[#24A0B5]">
                    Enter your email:
                    <p className="text-white  py-2 mx-2">{email}</p>
                  </p>
                </div>

                <div className="border-y flex justify-between">
                  <p className="py-4 text-left text-[#24A0B5]">
                    Ticket Type:
                    <p className="text-white py-2 mx-2">{ticketType}</p>
                  </p>

                  <p className="py-4 text-right text-[#24A0B5]">
                    Ticket for:
                    <p className="text-white py-2 mx-2">{ticketCount}</p>
                  </p>
                </div>
                <div>
                  <p className="py-4 text-left text-[#24A0B5]">
                    Special Request:
                    <p className="text-left text-white p-2">
                      {specialRequest || "Nil"}
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-6 bg-[#07373f] border-t-2 border-b-2 border-[#24A0B5] py-4 flex flex-col items-center">
            <div className="w-3/4 h-12 bg-gradient-to-r from-white via-black to-white flex justify-center items-center">
              <div className="w-1 h-full bg-black mx-1"></div>
              <div className="w-2 h-full bg-white mx-1"></div>
              <div className="w-1 h-full bg-black mx-1"></div>
              <div className="w-4 h-full bg-white mx-1"></div>
              <div className="w-1 h-full bg-black mx-1"></div>
              <div className="w-3 h-full bg-white mx-1"></div>
              <div className="w-1 h-full bg-black mx-1"></div>
              <div className="w-5 h-full bg-white mx-1"></div>
            </div>
            <p className="text-white text-lg mt-2 tracking-wider ">
              234067 891026
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-around sm:flex-row mt-10 ">
        <button
          onClick={() => navigate("/")}
          className="w-full md:w-full m-auto md:m-2 bg-[#197686] text-white py-2 rounded-md hover:bg-[#24A0B5] mb-4 sm:mb-0 transition duration-300"
        >
          Book Another Ticket
        </button>
        <button
          onClick={() => alert("Downloading Ticket...")}
          className="w-full md:w-full m-auto bg-[#24A0B5] text-white py-2 rounded-md hover:bg-[#197686] transition duration-300"
        >
          Download Ticket
        </button>
      </div>
    </main>
  );
};

export default TicketConfirmation;
