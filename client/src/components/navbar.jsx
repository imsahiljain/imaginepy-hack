import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      py={3}
      px={10}
      h="10vh"
      w="100vw"
    >
      <Text fontFamily="Europa-Bold" fontSize="3xl" letterSpacing="-0.7px">
        medexa
      </Text>
      <Flex fontWeight={500} fontSize="sm" gridGap={10}>
        <Link to="/">
          <Text as="a" fontSize="lg">
            Home
          </Text>
        </Link>
        <Link to="/login">
          <Text as="a" fontSize="lg">
            Login
          </Text>
        </Link>
        <Link to="/register">
          <Text as="a" fontSize="lg">
            Register
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}
