import React, { useEffect, useRef, useState } from "react";
import Nevagtion from "./Nevagtion";
import { BiMenu } from "react-icons/bi";
import MainHome from "./MainHome";
import { useDispatch, useSelector } from "react-redux";
import { authPromptListByUser } from "../store/promptSlice";
import toast from "react-hot-toast";
import { IoLogOut, IoSettings } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.authSlice);
  const [showSearch, setShowSearch] = useState(false);

  const dispatch = useDispatch();
  const { allPromptListByUser, allPromptListByUserLoading } = useSelector(
    (state) => state.promptSlice
  );

  useEffect(() => {
    if (user?.email) {
      dispatch(authPromptListByUser(user?.id)).then((data) => {
        if (!data.payload.success) {
          toast.error(data?.payload?.message);
        }
      });
    }
  }, [dispatch]);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className={`flex relative`}>
        <Nevagtion
          isOpen={isOpen}
          setShowSearch={setShowSearch}
          setIsOpen={setIsOpen}
          allPromptListByUser={allPromptListByUser}
        />

        <div className={`flex-1 relative h-[100vh] overflow-hidden`}>
          <div className="flex justify-center items-center " >
          <h1 className="cursor-pointer font-bold text-center   px-6 py-2 rounded-b-2xl shadow-2xl  ">Mix Gpt</h1>
          </div>

          <MainHome isOpen={isOpen} setIsOpen={setIsOpen} user={user} />

          {showSearch && (
            <>
              <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex items-center justify-center p-4">
  <div
    ref={menuRef}
    className="relative w-full max-w-lg bg-white p-6 rounded-lg shadow-2xl border border-gray-200"
  >
    {/* Close Button */}
    <button 
      className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition duration-300"
      onClick={() => setShowSearch(false)}
    >
      ✖
    </button>

    {/* Search Input */}
    <div className="flex items-center space-x-3 mb-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
      />
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Clear
      </button>
    </div>

    {/* Settings & User Icons Section */}
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-md">
      <IoSettings size={40} className="text-blue-600 hover:text-blue-800 transition duration-300" />
      <div className="flex flex-col items-center justify-center space-y-2">
        <FaUser size={24} className="text-gray-700 hover:text-gray-900 transition duration-300" />
        <IoLogOut size={24} className="text-red-500 hover:text-red-700 transition duration-300" />
      </div>
    </div>
  </div>
</div>

            </>
          )}
        </div>
      </div>
    </div>
  );
}
