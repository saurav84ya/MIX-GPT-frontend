import React, { useState } from "react";
import Nevagtion from "./Nevagtion";
import { BiMenu } from "react-icons/bi";
import MainHome from "./MainHome";

export default function Home() {
  const [isOpen,setIsOpen] = useState(false)

  console.log(isOpen)
  return (
    <div>
      <div className="flex relative  ">

        <Nevagtion isOpen={isOpen} setIsOpen={setIsOpen} />


        <div className="flex-1 relative h-[100vh] overflow-hidden  ">
        <h1  className="cursor-pointer font-bold text-center mt-2 " >Mix Gpt</h1>

         <MainHome isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

      </div>
    </div>
  );
}
