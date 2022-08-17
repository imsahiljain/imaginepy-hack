import React from "react";
import { Flex, Heading, Text, Icon, Button } from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import Sidebar from "../../components/doctor/sidebar";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import LogoutButton from "../../components/logout-button";

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
      </Flex>

      {/* Column 3 */}
      <LogoutButton />
    </Flex>
  );
}
