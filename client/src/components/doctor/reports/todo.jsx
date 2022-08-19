import { useToast, HStack } from "@chakra-ui/react";
import TaskList from "./tasks";
import AddTask from "./AddTask";
import { useState, useEffect } from "react";

function ReportCreator() {
  const toast = useToast();
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
  }

  function checkTask(id) {
    const newTasksCheck = tasks.map((task, index, array) => {
      if (task.id === id) {
        task.check = !task.check;
      }
      return task;
    });

    setTasks(newTasksCheck);
  }

  function updateTask(id, body, onClose) {
    const info = body.trim();

    if (!info) {
      toast({
        title: "Enter some task",
        position: "bottom",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });

      return;
    } else {
      toast({
        title: "Task is updated",
        position: "bottom",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
    const newTasksUpdate = tasks.map((task, index, array) => {
      if (task.id === id) {
        task.body = body;
        task.check = false;
      }
      return task;
    });

    setTasks(newTasksUpdate);

    onClose();
  }

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  return (
    <HStack mt="5%" pb={28} alignItems="left">
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        checkTask={checkTask}
      />
    </HStack>
  );
}

export default ReportCreator;
