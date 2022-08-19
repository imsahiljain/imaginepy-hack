import React, { useEffect } from "react";
import { Flex, Heading, Text, Icon, useToast } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  MdWeb,
  MdTask,
  MdOutlineClass,
  MdPeopleOutline,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import Cookies from "js-cookie";
import ProfileCard from "../profile-card";

const LinkItems = [
  {
    id: 1,
    name: "My Profile",
    href: "/profile",
    icon: MdPeopleOutline,
  },
  {
    id: 2,
    name: "Doctors",
    icon: MdOutlineHealthAndSafety,
    href: "/all-doctors",
  },
  {
    id: 3,
    name: "Reports",
    href: "/reports",
    icon: MdTask,
  },
  {
    id: 4,
    name: "Learn more",
    icon: MdPeopleOutline,
    href: "/students",
  },
];

export default function PatientSidebar(props) {
  let currUser = Cookies.get("username");
  let userAuthenticated = Cookies.get("usertype");
  console.log(userAuthenticated);
  let navigate = useNavigate();
  let toast = useToast();
  //   useEffect(() => {
  //     if (userAuthenticated != "doctor") {
  //       toast({
  //         title: "Unallowed to access page!",
  //         position: "bottom",
  //         status: "error",
  //         duration: 2000,
  //         isClosable: true,
  //       });
  //       navigate("/");
  //     }
  //   }, []);
  return (
    // Main area

    <Flex w="16%" flexDir="column" backgroundColor="#1c1c1c" color="#e6e6e6">
      <Flex
        flexDir="column"
        h={[null, null, "100vh"]}
        justifyContent="space-between"
      >
        <Flex flexDir="column" as="nav">
          <Heading
            mt={50}
            mx={10}
            fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
            alignItems="center"
            letterSpacing="tight"
            fontFamily="Europa-Bold"
          >
            Medexa
          </Heading>
          <Text
            fontSize="lg"
            fontFamily="Europa-Reg"
            mx={10}
            mb="20"
            color="#919191"
            alignItems="center"
          >
            Dashboard for{" "}
            <Flex display="inline-flex" fontWeight="bold">
              {props.dashFor}
            </Flex>
          </Text>
          <Flex
            flexDir={["row", "row", "column", "column", "column"]}
            align={["center", "center", "center", "flex-start", "flex-start"]}
            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
            justifyContent="center"
          >
            {/* Link Items */}

            {LinkItems.map((link) => (
              <NavLink to={`/patient${link.href}`}>
                <Flex
                  id={link.id}
                  gridGap={3}
                  as="a"
                  align="center"
                  w="250px"
                  rounded="md"
                  py={3}
                  px={5}
                  mx={7}
                  mb="5"
                  _hover={{ bgColor: "#333333", textDecoration: "none" }}
                >
                  <Icon as={link.icon} fontSize="3xl" className="active-icon" />
                  <Text className="active" fontSize="xl">
                    {link.name}
                  </Text>
                </Flex>
              </NavLink>
            ))}
          </Flex>
        </Flex>
        <ProfileCard bg="#333333" color="#e4e4e4" />
      </Flex>
    </Flex>
  );
}
