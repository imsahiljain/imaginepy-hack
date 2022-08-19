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
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import patients from "./patient";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Schedule from "../schedule";

const PatientList = () => {
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
      {patients.map((doctor) => {
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
            >
              <Flex flexDirection="row" alignItems="center" id={doctor.id}>
                <Avatar size="lg" name={doctor.name} />
                <Flex flexDirection="column" ml="5">
                  <Text className="active" fontSize="xl">
                    Name: <b>{doctor.name}</b>
                  </Text>
                  <Text className="active" fontSize="xl">
                    Subject: <b>{doctor.disease}</b>
                  </Text>
                </Flex>
              </Flex>
              <Tag size="lg" bgColor={doctor.color} borderRadius="lg">
                <TagLabel>{doctor.label}</TagLabel>
              </Tag>
              {/* <DoctorModal
                id={doctor.id}
                name={doctor.name}
                disease={doctor.disease}
              /> */}
            </Flex>
          </Box>
        );
      })}
    </Grid>
  );
};

export default PatientList;
