import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Recovery from "./components/Recovery";
import NoPage from "./components/NoPage";
import AuthPage from "./components/AuthPage";
import MyContext from "./context/MyContext";
import Reg from "./components/Reg";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./store/authSlice";

export default function App() {

  const { isAuth, user ,isServerLoading } = useSelector((state) => state.authSlice);
  

  console.log("user" ,user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  },[dispatch])


  if (isServerLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center  px-4">
        <div className="text-lg font-semibold text-gray-800 mb-2">
          Just a moment...
        </div>
        <p className="text-base text-gray-600">
          Our server might take a little longer to start as it's hosted on a free plan. 
          Thank you for your patience!
        </p>
        <div className="mt-4">
          <svg
            className="animate-spin h-8 w-8 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }

  return (
       <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuth ? <Navigate to="/home" /> : <Navigate to="/authPage" />
          }
        />
        <Route
          path="/authPage"
          element={isAuth ? <Navigate to="/home" /> : <AuthPage />}
        />
        

        <Route
          path="/authPage/reg"
          element={isAuth ? <Navigate to="/home" /> : <Reg />}
        />

        <Route
          path="/authPage/login"
          element={isAuth ? <Navigate to="/home" /> : <Login />}
        />

        <Route
          path="/home"
          element={isAuth ? <Home /> : <Navigate to="/authPage" />}
        />
        <Route path="/recovry" element={isAuth ? <Home /> : <Recovery />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}
