import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authPromptListByUser, getPromptFullDetaild } from "../../store/promptSlice";
import LoadingDark from "./LoadingDark";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";

export default function MyAsks() {
  const { allPromptListByUser, allPromptListByUserLoading ,promptFullDetailedLoading} = useSelector(
    (state) => state.promptSlice
  );
  const { user } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();

  const [responses, setResponses] = useState({});

  useEffect(() => {
    if (allPromptListByUser == null) {
      if (user?.email) {
        dispatch(authPromptListByUser(user?.id)).then((data) => {
          if (!data.payload.success) {
            toast.error(data?.payload?.message);
          }
        });
      }
    }
  }, [dispatch, allPromptListByUser, user]);

  
  const loadAns = (id) => {
    dispatch(getPromptFullDetaild({ userId: user?.id, promptId: id })).then(
      (data) => {
        if (data.payload.success) {
          setResponses((prevResponses) => ({
            ...prevResponses,
            [id]: {
              question: data?.payload?.promptAns[0].prompt,
              response:
                data?.payload?.promptAns[0].answer.candidates[0].content.parts[0]
                  .text,
            },
          }));
        } else {
          toast.error(data?.payload?.message || "something went wrong");
        }
      }
    );
  };

  return (
    <>
      {allPromptListByUserLoading ? (
        <div className="h-[100vh] flex justify-center items-center ">
          <LoadingDark />
        </div>
      ) : (
        <div className="min-h-[100vh] ">
          <div className=" xl:w-[1200px] lg:w-[900px] md:w-[600px] w-[90%] mt-10 mx-auto ">
            {allPromptListByUser?.map((item, index) => (
              <div onClick={() => loadAns(item._id)} key={index}>
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${item._id}`}>
                    <AccordionTrigger>{item.prompt}</AccordionTrigger>
                    <AccordionContent>
                      { promptFullDetailedLoading ? (<div> <LoadingDark/> </div>) : (responses[item._id]?.response)}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
