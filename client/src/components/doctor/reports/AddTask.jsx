import React from "react";
import { useState } from "react";
import {
  Button,
  Input,
  useToast,
  useDisclosure,
  VStack,
  Textarea,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import Axios from "axios";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";

function AddTask({ addTask }) {
  const toast = useToast();
  const [docName, setdocName] = useState("");
  const [patName, setpatName] = useState("");
  const [patDisease, setpatDisease] = useState("");
  const [patDesc, setpatDesc] = useState("");
  const [patMed, setpatMed] = useState("");
  const [statusInput, setStatusInput] = useState(true);
  const [det, setDet] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const taskText = [
      docName.trim(),
      patName.trim(),
      patDisease.trim(),
      patDesc.trim(),
      patMed.trim(),
    ];

    if (!taskText) {
      toast({
        title: "Add all details",
        position: "bottom",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });

      return setdocName("");
    } else {
      toast({
        title: "Report created",
        position: "bottom",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }

    const task = {
      id: nanoid(),
      body: taskText,
      check: false,
    };

    setDet(task);
    addTask(task);
    var doc = new jsPDF("p", "pt");
    var imgData = "/logo.png";
    doc.setFontSize(20);
    doc.addImage(imgData, "PNG", 160, 10, 300, 200);
    doc.text(20, 300, "Doctor name: ");
    doc.text(200, 300, docName);

    doc.text(20, 330, "Patient name: ");
    doc.text(200, 330, patName);

    doc.text(20, 360, "Patient disease: ");
    doc.text(200, 360, patDisease);

    doc.text(20, 390, "Disease details: ");
    doc.text(200, 390, patDesc);

    doc.text(20, 420, "Medication: ");
    doc.text(200, 420, patMed);

    doc.save("report.pdf");
    setdocName("");
    setpatName("");
    setpatDisease("");
    setpatDesc("");
    setpatMed("");
  }

  if (docName && !statusInput) {
    setStatusInput(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <VStack mt="4" mb="10" w="100%" mr="100px" pr="100px">
        <Input
          h="50px"
          placeholder="Enter Doctor name"
          type="text"
          fontSize="lg"
          value={docName}
          onChange={(e) => setdocName(e.target.value)}
          bgColor="#ebebeb"
          _placeholder={{ color: "#9c9c9c" }}
          color="#2e2e2e"
          isRequired
        />
        <Input
          h="50px"
          placeholder="Enter Patient name"
          fontSize="lg"
          value={patName}
          onChange={(e) => setpatName(e.target.value)}
          bgColor="#ebebeb"
          _placeholder={{ color: "#9c9c9c" }}
          color="#2e2e2e"
          isRequired
        />
        <Input
          h="50px"
          placeholder="Enter Patient disease"
          fontSize="lg"
          type="text"
          value={patDisease}
          onChange={(e) => setpatDisease(e.target.value)}
          bgColor="#ebebeb"
          _placeholder={{ color: "#9c9c9c" }}
          color="#2e2e2e"
          isRequired
        />
        <Textarea
          h="50px"
          placeholder="Enter disease description"
          fontSize="lg"
          type="text"
          value={patDesc}
          onChange={(e) => setpatDesc(e.target.value)}
          bgColor="#ebebeb"
          _placeholder={{ color: "#9c9c9c" }}
          color="#2e2e2e"
          isRequired
        />
        <Input
          h="50px"
          placeholder="Enter medicine name"
          fontSize="lg"
          type="text"
          value={patMed}
          onChange={(e) => setpatMed(e.target.value)}
          bgColor="#ebebeb"
          _placeholder={{ color: "#9c9c9c" }}
          color="#2e2e2e"
          isRequired
        />
      </VStack>
      <Button
        bg={"blue.500"}
        color={"white"}
        _hover={{
          bg: "blue.600",
        }}
        _active={{ bg: "blue.600" }}
        px="8"
        h="44px"
        type="submit"
        alignItems="center"
        mb="10"
        // onClick={reportGenerator}
      >
        Create the report
      </Button>
    </form>
  );
}

export default AddTask;
