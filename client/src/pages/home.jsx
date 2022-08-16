import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import "../styles/globals.css";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

export default function Home() {
  //   let navigate = useNavigate();
  //   useEffect(() => {
  //     let userAuthenticated = Cookies.get("usertype");
  //     if (userAuthenticated == "student") {
  //       navigate("/student/classes");
  //     } else if (userAuthenticated == "teacher") {
  //       navigate("/teacher/classes");
  //     }
  //   }, []);
  return (
    <Box
      maxH="100vh"
      bgImage="url(/bg.svg)"
      // bgColor='#0e0e10'
      bgPosition="center"
      bgSize="cover"
      w="full"
      overflowX="hidden"
      overflowY="hidden"
    >
      <Navbar />
      <Hero />
    </Box>
  );
}
