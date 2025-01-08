import React, { useEffect, useState } from "react";
import Nevagtion from "./Nevagtion";
import { BiMenu } from "react-icons/bi";
import MainHome from "./MainHome";
import { useDispatch, useSelector } from "react-redux";
import { authPromptListByUser } from "../store/promptSlice";
import toast from "react-hot-toast";

export default function Home() {
  const [isOpen,setIsOpen] = useState(false)
  const {user} = useSelector((state) => state.authSlice)

  const dispatch = useDispatch()
        const {allPromptListByUser,allPromptListByUserLoading} = useSelector((state) =>  state.promptSlice)



  useEffect(() => {
    if(user?.email){
      dispatch(authPromptListByUser(user?.id))
        .then((data) => {
          if(!data.payload.success){
            toast.error(data?.payload?.message);
          }
        })
    }
    
  },[dispatch])

  // console.log(isOpen)
  return (
    <div>
      <div className="flex relative  ">

        <Nevagtion isOpen={isOpen} setIsOpen={setIsOpen} allPromptListByUser={allPromptListByUser} />


        <div className="flex-1 relative h-[100vh] overflow-hidden   ">
        <h1  className="cursor-pointer font-bold text-center mt-2 " >Mix Gpt</h1>

         <MainHome isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
        </div>

      </div>
    </div>
  );
}
