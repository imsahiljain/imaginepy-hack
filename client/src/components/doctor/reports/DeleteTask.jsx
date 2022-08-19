import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { FiTrash2 } from "react-icons/fi";

function DeleteTask({ task, deleteTask }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        icon={<FiTrash2 />}
        size="lg"
        onClick={onOpen}
        bgColor="#e4e4e4"
        color="#414141"
        _hover={{
          bg: "#e4e4e4",
        }}
        _active={{ bg: "#e4e4e4" }}
      />

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90%" bgColor="#212121" color="#e4e4e4">
          <ModalHeader>
            Are you sure you want to delete this report?
          </ModalHeader>
          <ModalFooter>
            <Button
              colorScheme="blue"
              onClick={() => deleteTask(task.id, onClose)}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export { DeleteTask };
