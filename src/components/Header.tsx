import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className=" border-y-2 text-white p-4 my-4 border-y-white bg-[#0e3f48] flex justify-between items-center">
        <div className="text-xl font-semibold bg-[#06262c] p-1 rounded-md">
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
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L6.707 8.707A1 1 0 015.293 7.293l4-4A1 1 0 0110 3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
