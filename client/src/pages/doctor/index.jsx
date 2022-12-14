import React from "react";
import { Flex, Heading, Text, Icon, Button, VStack } from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import Sidebar from "../../components/doctor/sidebar";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import LogoutButton from "../../components/logout-button";
import PatientList from "../../components/doctor/patient-list";

export default function DoctorDashboard() {
  let currUser = Cookies.get("username") || "Doctor";
  let navigate = useNavigate();

  return (
    <Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    >
      {/* Column 1 */}

      <Sidebar dashFor="doctors" />

      {/* Column 2 */}
      <Flex
        w="90%"
        p="3%"
        mt={-2}
        bgColor="#fafafa"
        flexDir="column"
        overflow="auto"
        minH="100vh"
      >
        <Heading
          fontWeight="normal"
          letterSpacing="tight"
          fontFamily="Europa-Reg"
          fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
          alignItems="center"
          color="#1c1c1c"
        >
          Welcome back,{" "}
          <Flex display="inline-flex" fontWeight="bold">
            {currUser}
          </Flex>
        </Heading>
        <VStack
          borderRadius="lg"
          // w="100%"
          maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
          alignItems="stretch"
          // mt="7"
        >
          <Heading
            mt="70px"
            // mb="5"
            // mt="30px"
            pb="4"
            fontWeight="normal"
            letterSpacing="tight"
            fontFamily="Europa-Reg"
            fontSize="3xl"
            // alignItems="left"
            textAlign="left"
            color="#2e2e2e"
          >
            My Patients
          </Heading>
          <PatientList />
        </VStack>
      </Flex>

      {/* Column 3 */}
      <LogoutButton />
    </Flex>
  );
}
