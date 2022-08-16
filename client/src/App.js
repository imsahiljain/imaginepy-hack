import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  return (
    <div className="App">
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Page404 />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
