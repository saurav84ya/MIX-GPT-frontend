import React, { useState } from "react";
import { BiIntersect, BiMenu } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { LuNotebookText, LuSend } from "react-icons/lu";
import { MdDone } from "react-icons/md";
import { PiNeedle } from "react-icons/pi";
import { RxOpenInNewWindow } from "react-icons/rx";

export default function MainHome({ isOpen, setIsOpen ,user}) {

    const [miniMenu , setMiniMenu] = useState(false)

    // console.log("user",user?.name?.slice(0,1))


  return (
    <div className="h-[100%]  flex items-center ">




      <div className=" lg:hidden absolute top-2 flex items-center gap-4 left-2 ">

        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <BiMenu size={30} />
        </div>
        <div>
          <RxOpenInNewWindow className="cursor-pointer" size={30} />
        </div>
        
      </div>

      <div className=" absolute top-2 right-4 " >
        <div className="relative" >
            <div 

                onClick={() => setMiniMenu(!miniMenu)}
                
                className="h-[50px] w-[50px] cursor-pointer  flex justify-center items-center bg-violet-100 rounded-full " >

                <h1 className="font-bold text-2xl " >{user?.name?.slice(0,1) || "X"}</h1>

            </div> 

            { miniMenu &&  <div className="absolute top-[70px] right-0 " >
                <div  className=" bg-[#FFFDF0] w-[200px] p-4  border-[3px] rounded-xl" >
                        <h1 className="flex gap-3 cursor-pointer py-2 px-1 border-[2px] rounded-lg  border-[#FFFDF0] hover:border-black " >  <span><LuNotebookText size={30}  /></span> My Asks </h1>
                        <h1 className="flex gap-3 cursor-pointer py-2   px-1 border-[2px] rounded-lg  border-[#FFFDF0] hover:border-black " > <span><IoSettingsOutline size={30}  /></span> Setting</h1>
                        <h1 className="flex gap-3 cursor-pointer py-2  px-1 border-[2px] rounded-lg  border-[#FFFDF0] hover:border-black " ><span><FaRegUser size={30}  /></span>Account</h1>
                        <h1 className="flex gap-3 cursor-pointer py-2  px-1 border-[2px] rounded-lg  border-[#FFFDF0] hover:border-black " ><span><IoLogOutOutline size={30}  /></span>Logout</h1>
                </div>
            </div>}


        </div>
      </div>

      <div className="mx-auto">
        {/* output */}
        <div className="px-4" >
                    <div className=" overflow-y-scroll max-h-[60vh]  " >

                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1> <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            <h1>Ans : - india </h1>
                            
                    </div>
                </div>

        {/* input */}

        <h1 className="text-center font-bold text-2xl my-4 ">
          What can I help with?
        </h1>

        <div className=" rounded-xl bg-white border p-4 mt-4 ">
          <textarea
            name="prompt"
            className=" md:w-[70vw] w-[80vw] lg:w-[700px] xl:w-[900px]   rounded-xl bg-white border h-[100px] p-4 "
            id=""
          ></textarea>

          <div className="flex justify-between mt-3">
            <div className="flex gap-5">
              <PiNeedle className="cursor-pointer" size={30} />
              <BiIntersect size={30} className="cursor-pointer" />
            </div>

            <LuSend size={30} className="cursor-pointer  " />
          </div>
        </div>
      </div>
    </div>
  );
}
