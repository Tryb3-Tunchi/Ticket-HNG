import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

const TicketConfirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get data from the previous page
  const { ticketType, ticketCount, name, email, specialRequest, imageUrl } =
    location.state || {};

  const handleDownloadTicket = () => {
    const ticketElement = document.getElementById("ticket");

    if (ticketElement) {
      html2canvas(ticketElement).then((canvas) => {
        const link = document.createElement("a");
        link.download = "ticket.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    }
  };

  return (
    <main className="p-8 max-w-3xl mx-auto rounded-xl shadow-lg bg-[#041E23] text-white">
      {/* Navigation Header */}
      <div className="flex justify-between items-center border-b-2 border-[#24A0B5] pb-4 mb-6">
        <h1 className="text-xl font-bold">Ready</h1>
        <p className="text-sm">Step 3/3</p>
      </div>

      {/* Ticket Confirmation Section */}
      <div className="rounded-xl py-4 text-center">
        <h2 className="text-2xl font-bold text-[#24A0B5] mb-2">
          Your Ticket is Booked!
        </h2>
        <p className="text-sm">
          Check your email for a copy or you can download it below.
        </p>
      </div>

      {/* Ticket Display */}
      <div
        id="ticket"
        className="bg-[#062e35] border p-4 pb-6 rounded-2xl relativ
  "
        style={{
          clipPath: `polygon(
      30px 0%, calc(100% - 30px) 0%, 
      100% 20px, 100% calc(100% - 20px), 
      calc(100% - 30px) 100%, 30px 100%, 
      0% calc(100% - 20px), 0% 20px
    )`,
          // maskImage: `radial-gradient(circle 20px at 20px 20px, transparent 20px, black 21px),
          //             radial-gradient(circle 20px at calc(100% - 20px) 20px, transparent 20px, black 21px),
          //             radial-gradient(circle 20px at calc(100% - 20px) calc(100% - 20px), transparent 20px, black 21px),
          //             radial-gradient(circle 20px at 20px calc(100% - 20px), transparent 20px, black 21px)`,
        }}
      >
        <div className="my-6 border border-[#24A0B5] bg-[#07373f] rounded-xl p-2 flex flex-col items-center m-auto md:w-2/4">
          <h3 className="text-3xl italic text-white font-extrabold text-center mb-2">
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

          <div className="my-4 shadow-lg w-3/4 m-auto border-[#249fb5a1] bg-[#06323a] rounded-xl p-4">
            <div className="text-xs ">
              <div className="">
                <div className="border-t border-[#249fb563] flex justify-between">
                  <p className=" pr-3 border-[#249fb56c] border-r-2 text-left text-[#24A0B5]">
                    Enter your name:
                    <p className="text-white  py-2 mx-2">{name}</p>
                  </p>

                  <p className=" text-right text-[#24A0B5]">
                    Enter your email:
                    <p className="text-white  py-2 mx-2">{email}</p>
                  </p>
                </div>

                <div className="border-y border-[#249fb55b]  flex justify-between">
                  <p className=" pr-10 border-r-2 border-[#249fb550] text-left text-[#249fb5f3]">
                    Ticket Type:
                    <p className="text-white py-2 mx-2">{ticketType}</p>
                  </p>

                  <p className=" text-right text-[#24A0B5]">
                    Ticket for:
                    <p className="text-white py-2 mx-2">{ticketCount}</p>
                  </p>
                </div>
                <div>
                  <p className=" text-left text-[#24A0B5]">
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
          <div className="mt-20 bg-[#07373f] border-t-2 border-b-2 border-[#24A0B5] py-4 flex flex-col items-center">
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
          onClick={handleDownloadTicket}
          className="w-full md:w-full m-auto bg-[#24A0B5] text-white py-2 rounded-md hover:bg-[#197686] transition duration-300"
        >
          Download Ticket
        </button>
      </div>
    </main>
  );
};

export default TicketConfirmation;
