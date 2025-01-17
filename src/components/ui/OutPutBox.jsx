import React, { useEffect } from "react";

export default function OutPutBox({ responses ,user , isFull}) {

  useEffect(() => {
    console.log("Fetched responses:", responses);
    if (responses.length > 0) {
      console.log("Type of response:", typeof responses[0].response);
    }
  }, [responses]);
  
    // console.log(responses[0])
  return (
    <div className={`overflow-y-scroll ${ isFull ? " xl:w-[60%]  lg:w-[70%] md:w-[80%] w-[90%] mx-auto max-h-[80vh] " : " max-h-[60vh] md:w-[70vw] w-[80vw] lg:w-[700px] xl:w-[900px] " } ` }>
      {responses?.map((item, index) => (
        <div key={index} className="p-2 border-b mb-9 ">
          {/* Display the question */}
          <div className="font-semibold flex  justify-end pr-3  items-center gap-3 mb-2"> 
                <div className="w-[40px] h-[40px] bg-gray-200 flex items-center justify-center rounded-full " >
                    <h1>{user?.name.slice(0,1)}</h1>
                </div>
             <h1>
                {item.question}
             </h1>
             
             
            </div>

          {/* Render response content dynamically */}
          <div className="text-gray-700">
  {(item.response ?? "").split("\n").map((line, idx) => {
    if (line.startsWith("**")) {
      return (
        <p key={idx} className="font-bold mt-2">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.startsWith("*")) {
      return (
        <p key={idx} className="ml-4 list-disc">
          {line.replace(/\*/g, "")}
        </p>
      );
    } else {
      return (
        <p key={idx} className="mt-1">
          {line}
        </p>
      );
    }
  })}
</div>

        </div>
      ))}
    </div>
  );
}
