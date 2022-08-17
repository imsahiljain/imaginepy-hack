import React, { useState } from "react";
import {
  Flex,
  Text,
  Button,
  Avatar,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function ProfileCard(props) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  let currUser = Cookies.get("username") || "Teacher";
  let userEmail = Cookies.get("email");
  let userName = Cookies.get("username");
  let userType = Cookies.get("usertype");

  let navigate = useNavigate();
  const handleLogout = () => {
    navigate(`/logout`);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      flexDir="row"
      alignItems="center"
      mb={10}
      mt={5}
      mx="auto"
      as="a"
      align="center"
      w="80%"
      rounded="md"
      py={1}
      px={5}
      bgColor={props.bg}
      ref={btnRef}
      cursor="pointer"
      onClick={onOpen}
    >
      <Avatar mx="4" my={2} name={userName} />
      <Text textAlign="center" fontSize="xl" mx="4">
        {userName}
      </Text>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#212121">
          <DrawerCloseButton color="#e4e4e4" />
          <DrawerHeader mt="10" fontSize="2xl" color="#e2e2e2">
            Your Profile
          </DrawerHeader>

          <DrawerBody>
            <VStack>
              <Avatar my={2} name={currUser} size="2xl" />
              <Flex align={"center"} justify={"center"}>
                <Stack spacing={4} mx={"auto"} w="260px" maxW={"xl"} py={12}>
                  <Stack spacing={4}>
                    <FormControl id="name" isRequired>
                      <FormLabel color="#efefef">Name</FormLabel>
                      <Input
                        isDisabled
                        type="name"
                        className="loginName"
                        color="#efefef"
                        value={userName}
                        onChange={(e) => {
                          setLoginEmail(e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormControl id="email" isRequired>
                      <FormLabel color="#efefef">Email address</FormLabel>
                      <Input
                        isDisabled
                        type="email"
                        className="loginEmail"
                        color="#efefef"
                        value={userEmail}
                        onChange={(e) => {
                          setLoginEmail(e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel color="#efefef">Role</FormLabel>
                      <InputGroup>
                        <Input
                          isDisabled
                          className="loginPassword"
                          color="#efefef"
                          value={userType}
                          onChange={(e) => {
                            setLoginPassword(e.target.value);
                          }}
                        />
                        <InputRightElement h={"full"}></InputRightElement>
                      </InputGroup>
                    </FormControl>
                  </Stack>
                  {/* </Box> */}
                </Stack>
              </Flex>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              onClick={onClose}
              bgColor="#363636"
              color="#e6e6e6"
              _focus={{ bgColor: "#363636" }}
              _hover={{ bgColor: "#363636" }}
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
