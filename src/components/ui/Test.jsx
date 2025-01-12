import React, { useState } from 'react';

export default function Test() {
  const [pay, setPay] = useState(false);

  return (
    <div className={`relative w-full h-[100vh] flex flex-col items-center justify-center bg-gray-100 text-center ${pay ? 'backdrop-blur' : ''}`}>
      <h1 className='text-3xl font-bold mb-4'>Hi</h1>
      <h3 className='text-xl mb-6'>Make your payment</h3>
      <button
        onClick={() => setPay(true)}
        className='bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-700 transition duration-300'
      >
        Payment
      </button>

      {pay && (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded shadow-lg'>
            <h1 className='text-xl font-bold mb-4'>Are you sure you want to pay?</h1>
            <button className='bg-red-500 text-white py-2 px-4 rounded mr-4 hover:bg-red-700 transition duration-300'>
              Yes
            </button>
            <button
              className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300'
              onClick={() => setPay(false)}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
