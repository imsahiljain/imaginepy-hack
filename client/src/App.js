import React from "react";
import { Routes, Route } from "react-router-dom";
import Axios from "axios";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import LogoutPage from "./pages/logout";
import RegisterPage from "./pages/register";
import DoctorDashboard from "./pages/doctor/index";
import PatientDashboard from "./pages/patient/index";

function App() {
  Axios.defaults.withCredentials = true;
  return (
    <div className="App">
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Page404 />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
