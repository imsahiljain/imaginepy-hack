import React from "react";
import { Routes, Route } from "react-router-dom";
import Axios from "axios";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import LogoutPage from "./pages/logout";
import RegisterPage from "./pages/register";
import DoctorDashboard from "./pages/doctor/index";
import PatientDashboard from "./pages/patient/index";
import AllDoctors from "./pages/patient/doctors";
import ViewReports from "./pages/patient/reports";
import Patients from "./pages/doctor/patients";
import CreateReports from "./pages/doctor/reports";
import Appointments from "./pages/doctor/appointments";
import LearnMore from "./pages/patient/learn-more";

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
        <Route path="/doctor/all-patients" element={<DoctorDashboard />} />
        <Route path="/doctor/reports" element={<CreateReports />} />
        <Route path="/doctor/appointments" element={<Appointments />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/patient/profile" element={<PatientDashboard />} />
        <Route path="/patient/all-doctors" element={<AllDoctors />} />
        <Route path="/patient/reports" element={<ViewReports />} />
        <Route path="/patient/learn-more" element={<LearnMore />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
