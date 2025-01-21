import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Choose your preferred theme

export default function OutPutBox({ responses, user, isFull }) {
  console.log("res", responses);

  return (
    <div
      className={`overflow-y-scroll ${
        isFull
          ? "xl:w-[60%] lg:w-[70%] md:w-[80%] w-[90%] mx-auto max-h-[80vh]"
          : "max-h-[60vh] md:w-[70vw] w-[80vw] lg:w-[700px] xl:w-[900px]"
      }`}
    >
      {responses?.map((item, index) => {
        // Extract code block using regex
        const codeBlockMatch = item.response.match(/```([a-zA-Z]*)\n([\s\S]*?)```/);

        return (
          <div key={index} className="p-4 border-b mb-6">
            {/* User Question */}
            <div className="font-semibold flex justify-end pr-3 items-center gap-3 mb-3">
              <div className="w-[40px] h-[40px] bg-gray-200 flex items-center justify-center rounded-full">
                <h1>{user?.name?.charAt(0)}</h1>
              </div>
              <h1>{item.question}</h1>
            </div>

            {/* Render Response Content */}
            <div className="text-gray-800">
              {String(item.response ?? "")
                .split("\n")
                .map((line, idx) => {
                  if (line.startsWith("```")) return null; // Skip code markers

                  if (line.startsWith("**")) {
                    return (
                      <p key={idx} className="font-bold text-lg mt-2">
                        {line.replace(/\*\*/g, "")}
                      </p>
                    );
                  } else if (line.startsWith("* **")) {
                    return (
                      <p key={idx} className="ml-4 list-disc font-semibold">
                        {line.replace(/\* \*\*/g, "")}
                      </p>
                    );
                  } else if (line.startsWith("*")) {
                    return (
                      <p key={idx} className="ml-6 list-disc">
                        {line.replace(/\*/g, "")}
                      </p>
                    );
                  } else {
                    return <p key={idx} className="mt-1">{line}</p>;
                  }
                })}
            </div>

            {/* Render Code Block if Detected */}
            {codeBlockMatch && (
              <SyntaxHighlighter
                language={codeBlockMatch[1] || "plaintext"} // Auto-detect language
                style={dracula}
                className="rounded-lg mt-3 p-3"
              >
                {codeBlockMatch[2]}
              </SyntaxHighlighter>
            )}
          </div>
        );
      })}
    </div>
  );
}
