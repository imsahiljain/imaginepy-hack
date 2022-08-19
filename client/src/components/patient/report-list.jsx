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
  Tooltip,
} from "@chakra-ui/react";
import reports from "./reports";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Schedule from "../schedule";
import fileDownload from "js-file-download";
import Axios from "axios";

const ReportsList = () => {
  const toast = useToast();
  const downloaded = () => {
    setTimeout(() => {
      toast({
        title: "Report downloaded",
        position: "bottom",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }, 2000);
  };
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={1} mt="30px">
      {/* <Link href="/Report1.pdf" download>
        download
      </Link> */}
      {reports.map((doctor) => {
        return (
          <Link
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            color="#e4e4e4"
            cursor="pointer"
            href={doctor.report}
            onClick={downloaded}
            download
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
              <Tooltip
                label="Click the report to download"
                hasArrow
                p="3"
                aria-label="A tooltip"
                rounded="lg"
                bg="#2e2e2e"
                fontSize="md"
              >
                <Flex flexDirection="row" alignItems="center" id={doctor.id}>
                  {/* <Avatar size="lg" name={doctor.name} /> */}
                  <Flex flexDirection="column" ml="5">
                    <Text className="active" fontSize="xl">
                      By: <b>{doctor.name}</b>
                    </Text>
                    <Text className="active" fontSize="xl">
                      Agenda: <b>{doctor.agenda}</b>
                    </Text>
                  </Flex>
                </Flex>
              </Tooltip>

              {/* <DoctorModal
                id={doctor.id}
                name={doctor.name}
                agenda={doctor.agenda}
              /> */}
            </Flex>
          </Link>
        );
      })}
    </Grid>
  );
};

export default ReportsList;
