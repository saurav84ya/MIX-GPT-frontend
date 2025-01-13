import React from 'react'

export default function AskUi({ title, setFun, fun }) {
  return (
    <div className="flex flex-col  items-center justify-center  bg-gray-100 p-4">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">
        Are you sure you want to {title}?
      </h1>
      <div className="flex space-x-4">
        <button
          onClick={ () =>  fun()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Yes
        </button>
        <button
          onClick={() => setFun(false)}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          No
        </button>
      </div>
    </div>
  )
}
