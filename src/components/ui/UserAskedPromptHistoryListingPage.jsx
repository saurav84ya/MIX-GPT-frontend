import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deletePromptHistory, getPromptFullDetaild } from "../../store/promptSlice";
import OutPutBox from "./OutPutBox";
import LoadingDark from "./LoadingDark";
import { MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";

export default function UserAskedPromptHistoryListingPage() {
  const { user } = useSelector((state) => state.authSlice);
  const { promptFullDetailedLoading } = useSelector(
    (state) => state.promptSlice
  );

  const { id } = useParams();
  const dispatch = useDispatch();

  const [responses, setResponses] = useState();
  const [showDelete ,setShowDelete] = useState(false)


  useEffect(() => {
    // console.log("user?.id , id" ,user?.id , id)
    dispatch(getPromptFullDetaild({ userId: user?.id, promptId: id })).then(
      (data) => {
        setResponses(() => [
          {
            question: data?.payload?.promptAns[0].prompt,
            response:
              data?.payload?.promptAns[0].answer.candidates[0].content.parts[0]
                .text,
          },
        ]);

        if (data.payload.success) {
          // toast.success(data?.payload?.message);
        } else {
          toast.error(data?.payload?.message || "something went wrong");
        }
      }
    );
  }, []);

  const navigate = useNavigate()


  const deleteFun = () => {

    dispatch(deletePromptHistory({ userId: user?.id, promptId: id }))
    .then(
        (data) => {
          if (data.payload.success) {
            toast.success(data?.payload?.message);
            setShowDelete(false)
            navigate("/home")
          } else {
            toast.error(data?.payload?.message || "something went wrong");
          }
        }
      );
    

  }

  return (
    <div className="flex items-center relative justify-center h-[100vh] ">
      {promptFullDetailedLoading ? (
        <div>
          <LoadingDark />
          <h1 className="font-bold mt-5">Wait</h1>
        </div>
      ) : (
        <>



          <div className="absolute top-2 right-3 ">
            <button onClick={() => setShowDelete(true)} className="p-3 bg-gray-200 rounded-full " >
              <MdDeleteOutline size={50} />
            </button>
          </div>



         { showDelete && <div className="bg-[#FFFDF0] w-[300px] shadow-2xl rounded-xl border flex flex-col  items-center p-5  absolute    ">
            <h1 className="font-bold opacity-70 text-[14px] my-4 ">
             
              Are you sure you want to delete ?
            </h1>

            <div className="flex items-center justify-around w-full   ">
              <button
                className="text-blue-500 font-bold "
                onClick={() => setShowDelete(false)}
              >
                Cancle
              </button>

              <button onClick={deleteFun} className="bg-blue-500 font-bold text-white px-5 py-3 rounded-2xl ">
                Delete
              </button>
            </div>
          </div>}




          <OutPutBox responses={responses} user={user} isFull={true} />
        </>
      )}
    </div>
  );
}
