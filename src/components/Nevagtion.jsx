import React, { useContext, useEffect, useRef } from "react";
import { BiNews, BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { CgAdd } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { RxOpenInNewWindow } from "react-icons/rx";
import { Link } from "react-router-dom";
import MyContext from "../context/MyContext";

export default function Nevagtion({ isOpen, setIsOpen, setShowSearch,allPromptListByUser }) {

  const {newDiloge} = useContext(MyContext)
  // console.log(allPromptListByUser);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* dasktop */}
      <div className=" px-4 py-8 w-[300px] hidden lg:flex h-[100vh] overflow-hidden border-r-[3px] ">
        <div className=" w-full ">
          <div className="flex py-4 justify-between ">
            <BsSearch onClick={() => setShowSearch(true)} size={30} className="cursor-pointer" />
            <RxOpenInNewWindow       onClick={newDiloge} size={30} className="cursor-pointer" />
          </div>

          <h1 className="font-bold text-2xl text-center ">Mix Gpt</h1>
          <div className="flex justify-between mt-5 items-center ">
            <h1>Select Model</h1>
            <select
              className="p-2 font-bold border border-black  "
              name="Model"
              id=""
            >
              <option className="" value="gimini">
                Gimini
              </option>
              <option value="chatGpt">chatGpt</option>
            </select>
          </div>

          <div className="relative">
            <h1 className="font-bold mt-5">History</h1>
            <div className="pl-3 mt-3 overflow-y-scroll h-[60vh]">
            {allPromptListByUser?.map((item, index) => (
                <div    key={item._id || index} className="relative">
                  <Link to={`/home/userAskedPrompt/${item._id}`}>
                  <h1 className="p-3 border-b  rounded-lg cursor-pointer opacity-80 hover:opacity-100 ">
                    {item.prompt.length > 25
                      ? item.prompt.slice(0, 25) + "..."
                      : item.prompt}
                  </h1>
                  </Link>
                  
                </div>
              
              ))}
            </div>
          </div>

          <div className="flex mx-auto justify-around mt-8 border-y-[2px] py-2 ">
            <CiSettings size={30} className="cursor-pointer" />
            <Link to="/home/userProfile">
              <BiUser size={30} className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div
        ref={menuRef}
        className={`fixed top-1 left-0 w-[300px] shadow-2xl bg-[#FFFDF0] z-50  px-4 py-8 
            transform transition-transform duration-300 border-r-[3px] rounded-xl  ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden`}
      >
        <div className=" w-full ">
          <div className="flex py-4 justify-between ">
            <BsSearch onClick={() => setShowSearch(true)} size={30} className="cursor-pointer" />
            <RxOpenInNewWindow   onClick={newDiloge}   size={30} className="cursor-pointer" />
          </div>

          <h1 className="font-bold text-2xl text-center ">Mix Gpt</h1>
          <div className="flex justify-between mt-5 items-center ">
            <h1>Select Model</h1>
            <select
              className="p-2 font-bold border border-black  "
              name="Model"
              id=""
            >
              <option className="" value="gimini">
                Gimini
              </option>
              <option value="chatGpt">chatGpt</option>
            </select>
          </div>

          <div>
      <h1 className="font-bold mt-5">History</h1>
      <div className="pl-3 mt-3 overflow-y-scroll h-[50vh]">
        {allPromptListByUser?.length === 0 ? (
          <div className="text-center text-gray-400 mt-5">No History</div>
        ) : (
          <>
            {allPromptListByUser?.map((item, index) => (
              <div key={item._id || index} className="relative">
                <Link to={`/home/userAskedPrompt/${item._id}`}>
                  <h1 className="p-3 border-b rounded-lg cursor-pointer opacity-80 hover:opacity-100">
                    {item.prompt.length > 25
                      ? item.prompt.slice(0, 25) + '...'
                      : item.prompt}
                  </h1>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </div>

          <div className="flex mx-auto justify-around mt-8 border-y-[2px] py-2 ">
            <CiSettings size={30} className="cursor-pointer" />
            <Link to="/home/userProfile">
              <BiUser size={30} className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
