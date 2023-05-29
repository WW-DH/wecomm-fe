import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { Navbar } from "./components/Navbar";
import { LoginPage } from "./components/LoginPage";
import { SignUpPage } from "./components/SignUpPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-body">
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/sign-up"} element={<SignUpPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
