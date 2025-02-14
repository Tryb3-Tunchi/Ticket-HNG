// src/components/AttendeeDetails.tsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AttendeeDetails: React.FC = () => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("hello@avioflagos.io");
  const [specialRequest, setSpecialRequest] = useState<string>("");

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setPhoto(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
    }
  };

  const navigate = useNavigate();
  const { state } = useLocation();
  const { ticketType, ticketCount } = state || {}; // Destructure ticketType and ticketCount

  return (
    <main className="p-8 max-w-3xl mx-auto rounded-xl shadow-lg bg-[#031d21]">
      <div className="border border-[#24A0B5] bg-[#08252B] rounded-xl p-6 ">
        <div className="flex justify-between items-center border-b-2 border-[#24A0B5] mb-8">
          <h1 className="text-lg font-bold text-white text-left mb-2">
            Attendee Details
          </h1>
          <p className="text-white mb-2">Step 2/3</p>
        </div>

        <div className="lg:border border-[#24A0B5]  rounded-xl text-left p-2">
          <div className="border border-[#24A0B5] bg-[#051b1f] shadow-inner rounded-xl p-4">
            <p className="text-md text-left font-semibold text-white mb-4">
              Upload Profile Photo
            </p>
            <div
              onDrop={handleFileDrop}
              onDragOver={(e) => e.preventDefault()}
              className="w-3/4 m-auto h-autno body is there border-2 border-[#24A0B5] rounded-xl bg-[#07373F] text-white flex justify-center items-center  text-center"
            >
              {photo ? (
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Uploaded"
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <div className="p-2">
                  <p>Drag & drop or click to upload</p>
                  <input
                    type="file"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="fileInput"
                  />
                  <label
                    htmlFor="fileInput"
                    className="text-[#24A0B5] cursor-pointer"
                  >
                    Select File
                  </label>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-white">
              Enter your name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Placeholder"
              className="mt-2 w-full px-4 py-2 border border-[#24A0B5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#24A0B5] bg-[#07373F] text-white"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-white">
              Enter your email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-[#24A0B5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#24A0B5] bg-[#07373F] text-white"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-white">
              About the project
            </label>
            <textarea
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-[#24A0B5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#24A0B5] bg-[#07373F] text-white"
            />
          </div>

          <div className="md:flex-row-reverse md:flex m-auto w-full justify-between mt-4">
            <button
              onClick={() =>
                navigate("/confirm", {
                  state: {
                    ticketType,
                    ticketCount,
                    name,
                    email,
                    imageUrl: photo,
                    specialRequest,
                  },
                })
              }
              className="w-full m-1 bg-[#197686] text-white py-2 rounded-md hover:bg-[#24A0B5] transition duration-300"
            >
              Get My Free Ticket
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full m-1 bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AttendeeDetails;
