import React, { useState } from "react";
import {
  Flex,
  Avatar,
  Text,
  Link,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  IconButton,
  Box,
  useToast,
} from "@chakra-ui/react";
import doctors from "./doctors";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Schedule from "../schedule";

const DoctorsList = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = () => {
    toast({
      title: "Appointment scheduled",
      position: "bottom",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={1} mt="30px">
      {doctors.map((doctor) => {
        return (
          <Box
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            color="#e4e4e4"
            cursor="pointer"
          >
            <Flex
              gridGap={2}
              as="a"
              align="left"
              w="380px"
              rounded="lg"
              py={3}
              px={5}
              mr="10"
              mb="5"
              color="#2e2e2e"
              bgColor="#ededed"
              flexDirection="column"
              onClick={onOpen}
            >
              <Flex flexDirection="row" alignItems="center" id={doctor.id}>
                <Avatar size="lg" name={doctor.name} />
                <Flex flexDirection="column" ml="5">
                  <Text className="active" fontSize="xl">
                    Name: <b>{doctor.name}</b>
                  </Text>
                  <Text className="active" fontSize="xl">
                    Subject: <b>{doctor.specialisation}</b>
                  </Text>
                </Flex>
              </Flex>
              {/* <DoctorModal
                id={doctor.id}
                name={doctor.name}
                specialisation={doctor.specialisation}
              /> */}
            </Flex>
          </Box>
        );
      })}
      <Modal isCentered isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent w="90%" bgColor="#fff" color="#2e2e2e">
          <ModalHeader fontSize="2xl">Appoint meeting with doctor</ModalHeader>
          <ModalBody>
            <Schedule />
          </ModalBody>
          <ModalFooter>
            <Button
              mr={3}
              onClick={onClose}
              bgColor="#363636"
              color="#e6e6e6"
              _focus={{ bgColor: "#363636" }}
              _hover={{ bgColor: "#363636" }}
            >
              No
            </Button>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Grid>
  );
};

export default DoctorsList;
