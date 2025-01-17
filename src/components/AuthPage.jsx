import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../context/MyContext";
import toast from "react-hot-toast";

export default function AuthPage() {
  const navigate = useNavigate();
  const [isGuestMode, setIsGuestMode] = useState(false);
  const [inputName, setInputName] = useState("");

  // Check if the name is in localStorage on page load


  const handleGuestContinue = () => {
    if (inputName.trim()) {
      localStorage.setItem("name", inputName.trim());
      setIsGuestMode(false);
      
      // Delay the navigation to ensure state and localStorage are updated
      setTimeout(() => {
        navigate("/home");
        toast.success(`Welcome, ${inputName}!`);
      }, 300);
    } else {
      toast.error("Please enter a valid name");
    }
  };

  const closeModal = () => {
    setIsGuestMode(false);
  };

  return (
    <div className="relative flex items-center justify-center h-screen ">
      {/* Main Content */}
      <div
        className={`bg-white p-8 rounded-lg shadow-lg text-center z-10 ${
          isGuestMode ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to Mix GPT
        </h1>
        <div className="space-y-4">
          <Link to="/authPage/login">
            <button className="w-full py-2 px-4 mb-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Login
            </button>
          </Link>
          <Link to="/authPage/reg">
            <button className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              Sign Up
            </button>
          </Link>
          
        </div>
      </div>

      {/* Guest Mode Modal */}
      {isGuestMode && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-20"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            onClick={(e) => e.stopPropagation()} // Prevent modal click from closing it
          >
            <h2 className="text-lg font-semibold mb-4">Enter your name</h2>
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              className="p-2 w-full mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Your name"
            />
            <button
              onClick={handleGuestContinue}
              disabled={!inputName.trim()}
              className={`w-full py-2 px-4 rounded-lg transition ${
                inputName.trim()
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>

);
}

