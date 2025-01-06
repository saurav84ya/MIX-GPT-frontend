import React from "react";
import { BiIntersect, BiMenu } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { MdDone } from "react-icons/md";
import { PiNeedle } from "react-icons/pi";
import { RxOpenInNewWindow } from "react-icons/rx";

export default function MainHome({ isOpen, setIsOpen }) {
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
