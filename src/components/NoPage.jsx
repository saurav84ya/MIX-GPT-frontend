import React from 'react';
import { Link } from 'react-router-dom';

export default function NoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFFDF0] text-black">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-2">Oops! The page you're looking for does not exist.</p>
      <p className="text-lg italic mb-6">Or maybe coming soon in the next update.</p>
      <Link to="/" className="bg-black text-[#FFFDF0] py-2 px-4 rounded hover:bg-gray-800 transition duration-300">
        Go to Home
      </Link>
    </div>
  );
}
