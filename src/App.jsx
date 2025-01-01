import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Recovery from "./components/Recovery";
import NoPage from "./components/NoPage";
import AuthPage from "./components/AuthPage";
import MyContext from "./context/MyContext";
import Reg from "./components/Reg";
import Login from "./components/Login";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const user = {
    name: "saurav",
    email: "saurav@gmail.com",
    id: "234412412",
  };

  const name = localStorage.getItem("name");

  // const {name} = useContext(MyContext)

  console.log("name", name);

  useEffect(() => {
    if (name) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [name]);

  // console.log("theme, setTheme" ,theme, setTheme)

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
