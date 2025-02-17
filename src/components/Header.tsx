import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className=" px-8  p-1 bg-[#041E23] ">
        <div className="border-y-2 rounded-lg text-white p-2 mt-2 border-[#24A0B5]  flex justify-between items-center">
          <div className="text-xl font-semibold bg-[#06262c] p-1 ml-4 rounded-md">
            <img onClick={() => navigate("/")} src="logo.png" alt="" />
          </div>
          <div className=" space-x-4 hidden md:flex">
            <button className="hover:text-indigo-400">Events</button>
            <button className="hover:text-indigo-400">My Tickets</button>
            <button className="hover:text-indigo-400">About Project</button>
          </div>
          <div>
            <button className="bg-white text-black px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-200">
              <span>My Tickets</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 3l7 7-7 7-1.5-1.5L14 10H3V8h11L9.5 4.5 10 3z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
