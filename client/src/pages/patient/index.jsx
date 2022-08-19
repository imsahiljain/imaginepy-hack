import React from "react";
import {
  Flex,
  Heading,
  Text,
  Icon,
  Button,
  VStack,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import PatientSidebar from "../../components/patient/sidebar";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import LogoutButton from "../../components/logout-button";
import DoctorsList from "../../components/patient/doctors-list";

export default function PatientDashboard() {
  let currUser = Cookies.get("username") || "Doctor";
  let navigate = useNavigate();
  let userEmail = Cookies.get("email");
  let userName = Cookies.get("username");
  let userType = Cookies.get("usertype");

  return (
    <Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    >
      {/* Column 1 */}

      <PatientSidebar dashFor="patients" />

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
          w="100%"
          maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
          alignItems="stretch"
          mt="7"
        >
          <HStack>
            <VStack
              borderRadius="lg"
              // w="100%"
              maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
              alignItems="stretch"
              // mt="7"
            >
              <Heading
                mt="7"
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
                My Profile
              </Heading>
              {/* <Avatar my={2} name={currUser} size="2xl" /> */}
              <Flex
                gridGap={2}
                as="a"
                align="left"
                w="380px"
                rounded="lg"
                py={3}
                px={5}
                mr="10"
                mt="10"
                mb="100px"
                color="#2e2e2e"
                bgColor="#ededed"
                flexDirection="column"
              >
                <Flex flexDirection="row" alignItems="center">
                  <Avatar size="xl" name={currUser} />
                  <Flex flexDirection="column" ml="5">
                    <Text className="active" fontSize="xl">
                      Name: <b>{userName}</b>
                    </Text>
                    <Text className="active" fontSize="xl">
                      Role: <b>{userType}</b>
                    </Text>
                    <Text className="active" fontSize="xl">
                      Age: <b>26</b>
                    </Text>
                    <Text className="active" fontSize="xl">
                      Gender: <b>Male</b>
                    </Text>
                  </Flex>
                </Flex>

                {/* <DoctorModal
                id={doctor.id}
                name={doctor.name}
                specialisation={doctor.specialisation}
              /> */}
              </Flex>
            </VStack>
            <VStack
              borderRadius="lg"
              pl="80px"
              // w="100%"
              maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
              alignItems="stretch"
              // mt="7"
            >
              <Heading
                mt="-7"
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
                Family members
              </Heading>
              {/* <Avatar my={2} name={currUser} size="2xl" /> */}
              <Flex
                gridGap={2}
                as="a"
                align="left"
                w="380px"
                rounded="lg"
                py={3}
                px={5}
                mr="10"
                mt="10"
                mb="100px"
                color="#2e2e2e"
                bgColor="#ededed"
                flexDirection="column"
              >
                <Flex flexDirection="row" alignItems="center">
                  <Avatar size="md" name="John Doe" />
                  <Flex flexDirection="column" ml="5">
                    <Text className="active" fontSize="xl">
                      John Doe
                    </Text>
                    <Text className="active" fontSize="xl">
                      56
                    </Text>
                  </Flex>
                </Flex>

                {/* <DoctorModal
                id={doctor.id}
                name={doctor.name}
                specialisation={doctor.specialisation}
              /> */}
              </Flex>
            </VStack>
          </HStack>
          <Heading
            pt="10"
            pb="4"
            fontWeight="normal"
            letterSpacing="tight"
            fontFamily="Europa-Reg"
            fontSize="3xl"
            // alignItems="left"
            textAlign="left"
            color="#2e2e2e"
          >
            Upcoming appontments
          </Heading>
          <Flex
            gridGap={2}
            as="a"
            align="left"
            w="380px"
            rounded="lg"
            py={3}
            px={5}
            mr="10"
            mt="10"
            mb="100px"
            color="#2e2e2e"
            bgColor="#ededed"
            flexDirection="column"
            cursor="pointer"
          >
            <Flex flexDirection="row" alignItems="center">
              {/* <Avatar size="xl" name={currUser} /> */}
              <Flex flexDirection="column" ml="5">
                <Text className="active" fontSize="xl">
                  Doctor: <b>Dr. Leo Bech</b>
                </Text>
                <Text className="active" fontSize="xl">
                  Agenda: <b>Headache</b>
                </Text>
                <Text className="active" fontSize="xl">
                  Date: <b>24/08/2022</b>
                </Text>
              </Flex>
            </Flex>

            {/* <DoctorModal
                id={doctor.id}
                name={doctor.name}
                specialisation={doctor.specialisation}
              /> */}
          </Flex>
        </VStack>
      </Flex>

      {/* Column 3 */}
      <LogoutButton />
    </Flex>
  );
}
