import React, { useEffect } from "react";
import { Center, Text, Box, useToast } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import "../styles/globals.css";
import Login from "../components/login";
import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

const LoginPage = () => {
  //   let navigate = useNavigate();
  //   const toast = useToast();
  //   useEffect(() => {
  //     let userAuthenticated = Cookies.get("email");
  //     if (userAuthenticated) {
  //       toast({
  //         title: "Already logged in!",
  //         position: "bottom",
  //         status: "warning",
  //         duration: 2000,
  //         isClosable: true,
  //       });
  //       navigate("/");
  //     }
  //   }, []);
  return (
    <Box
      minH="100vh"
      bgImage="url(/bg.svg)"
      bgPosition="center"
      bgSize="cover"
      w="full"
      overflowX="hidden"
    >
      <Navbar />
      <Center pt="60px">
        <Text
          fontFamily="Europa-Bold"
          fontSize="7xl"
          letterSpacing="-3.5px"
          color="#2e2e2e"
        >
          Login
        </Text>
      </Center>
      <Login />
    </Box>
  );
};

export default LoginPage;
