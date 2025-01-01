import React, { useState } from "react";

export default function Reg() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Check if the button should be disabled (at least one field is empty)
  const btnDisabled =
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.password.trim() ||
    !formData.confirmPassword.trim() 

  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
      <div className="bg-white w-[480px] px-[20px] py-5 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold">Welcome to MIX GPT</h1>
        <p className="opacity-70">Create a free account by filling in the data below</p>

        <div className="flex flex-col mt-2">
          {/* Name Input */}
          <label className="font-bold text-[14px] mt-3">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 mt-1 rounded-md border border-[#EEEEF4]"
            type="text"
            placeholder="Your name"
          />

          {/* Email Input */}
          <label className="font-bold text-[14px] mt-3">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 mt-1 rounded-md border border-[#EEEEF4]"
            type="email"
            placeholder="Your email"
          />

          {/* Password Input */}
          <label className="font-bold text-[14px] mt-3">Password</label>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-2 mt-1 rounded-md border border-[#EEEEF4]"
            type="password"
            placeholder="Your password"
          />

          {/* Confirm Password Input */}
          <label className="font-bold text-[14px] mt-3">Repeat Password</label>
          <input
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="p-2 mt-1 rounded-md border border-[#EEEEF4]"
            type="password"
            placeholder="Repeat your password"
          />

          {/* Submit Button */}
          <button
            disabled={btnDisabled}
            className={`p-2 font-semibold text-white rounded-xl mt-7 ${
              btnDisabled ? "bg-gray-300" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
