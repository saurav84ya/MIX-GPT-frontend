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
          <h1 className="cursor-pointer font-bold text-center mt-2">Mix Gpt</h1>

          <MainHome isOpen={isOpen} setIsOpen={setIsOpen} user={user} />

          {showSearch && (
            <>
              <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm "></div>
              <div
                ref={menuRef}
                className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded shadow-2xl"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                  <div>
                    <div className="flex  w-[100px] bg-red-500 " >
                    <IoSettings size={70} />
                    <div className="flex flex-col items-center justify-center gap-2 " >
                    <FaUser size={20} />
                    <IoLogOut size={20} />
                    </div>
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
