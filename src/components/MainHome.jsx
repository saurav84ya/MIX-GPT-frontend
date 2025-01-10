import React, { useEffect, useRef, useState } from "react";
import { BiIntersect, BiMenu } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { LuNotebookText, LuSend } from "react-icons/lu";
import { MdDone } from "react-icons/md";
import { PiNeedle } from "react-icons/pi";
import { RxOpenInNewWindow } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { authPromptAskRequest } from "../store/promptSlice";
import LoadingDark from "./ui/LoadingDark";
import toast from "react-hot-toast";
import OutPutBox from "./ui/OutPutBox";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import { logoutUser } from "../store/authSlice";

export default function MainHome({ isOpen, setIsOpen ,user}) {

    const [miniMenu , setMiniMenu] = useState(false)
    const [greet , setGreet] = useState(true)
    const[logout , setLogout] = useState(false)

    // console.log("user",user?.name?.slice(0,1))

      const menuRef = useRef(null);
    
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMiniMenu(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);



      const dispatch = useDispatch()
      const {loadingPostPromptRequest,promptResponse} = useSelector((state) =>  state.promptSlice)

      // console.log("promptResponse : ",promptResponse?.candidates[0].content.parts[0].text )

 const [formData, setFormData] = useState({
    prompt: "",
    email: user?.email,
  });

  const [responses, setResponses] = useState([])


  // console.log("responses",responses)

  const onSubmit = async() => {

    dispatch(authPromptAskRequest(formData))
      .then((data) => {
        if(data.payload.success){

          setResponses((prevResponses) => [
            ...prevResponses,
            { question: formData.prompt, response:data?.payload.response.candidates[0].content.parts[0].text }, 
          ])

          setFormData({
            prompt: "",
            email : user?.email
          })
          setGreet(false)
          toast.success(data?.payload?.message);
        }else{
          toast.error(data?.payload?.message);
        }
      })
    // console.log("formData" ,formData)
  }

  // console.log("user?.email" ,user?.email)


  const logoutFun = () => {
    dispatch(logoutUser())
      .then((data) => {
        toast.success(data?.payload?.message);
      })
  }



  return (
  <>


{logout &&  <div className="flex fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " >
    <div className="bg-[#FFFDF0] w-[300px] shadow-2xl rounded-xl border flex flex-col  items-center p-5     " >

      <div className="p-5 bg-gray-300 rounded-full mb-1 "  > 
      <HiOutlineLogout size={50}/>
      </div>
      <h1 className="font-bold text-2xl " >Logout</h1>

      <h1 className="font-bold opacity-70 text-[14px] my-4 " > Are you sure you want to logout ? </h1>






      <div className="flex items-center justify-around w-full   " >


      <button className="text-blue-500 font-bold "  onClick={() => setLogout(false)} >
          Cancle
        </button>



        <button onClick={logoutFun} className="bg-blue-500 font-bold text-white px-5 py-3 rounded-2xl " >
          Logout
        </button>
        
      </div>



    </div>
  </div>}
  
  
  
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

      { miniMenu &&  <div className="absolute top-[70px] right-0  "  ref={menuRef} >
          <div  className=" bg-[#FFFDF0] w-[200px] p-4  border-[3px] rounded-xl" >
                  <Link to="/home/myAsks"><div className="flex gap-3 cursor-pointer py-2 px-1 border-[2px] rounded-lg  border-[#FFFDF0] hover:border-black " >  <span><LuNotebookText size={30}  /></span> My Asks </div></Link>
                  <div className="flex gap-3 cursor-pointer py-2   px-1 border-[2px] rounded-lg  border-[#FFFDF0] hover:border-black " > <span><IoSettingsOutline size={30}  /></span> Setting</div>
                  <Link to="/home/userProfile" ><div className="flex gap-3 cursor-pointer py-2  px-1 border-[2px] rounded-lg  border-[#FFFDF0] hover:border-black " ><span><FaRegUser size={30}  /></span>Account</div></Link>
                  <div onClick={()=> setLogout(true) } className="flex gap-3 cursor-pointer py-2  px-1 border-[2px] rounded-lg  border-[#FFFDF0] hover:border-black " ><span><IoLogOutOutline size={30}  /></span>Logout</div>
          </div>
      </div>}


  </div>
</div>

<div className="mx-auto">
  {/* output */}
  <div className="px-4" >
              <OutPutBox responses={responses}  user={user} />
          </div>

  {/* input */}

  { greet && <h1 className="text-center font-bold text-2xl my-4 ">
    What can I help with?
  </h1>}

  <div className=" rounded-xl bg-white border p-4 mt-4 shadow-xl ">
    <textarea
    onChange={(e) =>
      setFormData({ ...formData, prompt: e.target.value })
    }
    value={formData.prompt}
      name="prompt"
      className=" md:w-[70vw] w-[80vw] lg:w-[700px] xl:w-[900px]   rounded-xl bg-white border h-[100px] p-4 "
      id=""
    ></textarea>

    <div className="flex justify-between mt-3">
      <div className="flex gap-5">
        <PiNeedle className="cursor-pointer" size={30} />
        <BiIntersect size={30} className="cursor-pointer" />
      </div>

      { !loadingPostPromptRequest ? <button >
      <LuSend onClick={onSubmit} size={30} className="cursor-pointer  " />
      </button> : <div>
        <LoadingDark/>
      </div> }

      
    </div>
  </div>
</div>
</div>

</>
  );
}
