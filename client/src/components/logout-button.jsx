import React from "react";
import { Flex, Heading, Text, Icon, Button } from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    navigate(`/logout`);
  };
  return (
    <Flex
      w="16%"
      bgColor="#fafafa"
      p="3%"
      mt={-2}
      flexDir="column"
      overflow="auto"
    >
      <Flex alignContent="center">
        <Button
          bgColor="#2e2e2e"
          // colorScheme="gray"
          color="#e4e4e4"
          _focus={{ bgColor: "#2e2e2e" }}
          _hover={{ bgColor: "#2e2e2e" }}
          size="lg"
          p="5"
          onClick={() => handleLogout()}
        >
          <Icon
            as={MdOutlineLogout}
            fontSize="3xl"
            className="active-icon"
            px="1"
          />{" "}
          <Text fontSize="xl" fontFamily="Europa-Reg">
            Logout
          </Text>{" "}
        </Button>
      </Flex>
    </Flex>
  );
};

export default LogoutButton;
