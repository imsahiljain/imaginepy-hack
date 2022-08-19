import React from "react";
import { DeleteTask } from "./DeleteTask";
import { HStack, VStack, Flex, Text, Link, Heading } from "@chakra-ui/react";

function TaskList({ tasks, deleteTask }) {
  if (!tasks.length) {
    return <></>;
  }
  return (
    <>
      <VStack
        borderRadius="lg"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
        alignItems="stretch"
        mt="4"
      >
        <Heading
          fontWeight="normal"
          letterSpacing="tight"
          fontFamily="Europa-Reg"
          fontSize="3xl"
          alignItems="center"
          color="#2e2e2e"
          // mt="3"
          mb="4"
        >
          All reports
        </Heading>
        {tasks.map((task) => (
          <HStack
            key={task.id}
            opacity={task.check == true ? "0.2" : "1"}
            mb="10px"
          >
            <Flex
              id={task.id}
              gridGap={2}
              as="a"
              align="left"
              w="500px"
              rounded="md"
              py={3}
              px={5}
              mr="10"
              mb="5"
              bgColor="#e4e4e4"
              color="#333333"
              flexDirection="column"
            >
              <Text className="active" fontSize="xl">
                Report for: <b>{task.body[1]}</b>
              </Text>
            </Flex>
            <DeleteTask task={task} deleteTask={deleteTask} />
          </HStack>
        ))}
      </VStack>
    </>
  );
}

export default TaskList;
