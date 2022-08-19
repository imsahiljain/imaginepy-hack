import { Button, Input, useToast, Text, Flex } from "@chakra-ui/react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 8, 11),
    end: new Date(2022, 8, 13),
  },
  {
    title: "Vacation",
    start: new Date(2022, 6, 7),
    end: new Date(2022, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2022, 6, 20),
    end: new Date(2022, 6, 23),
  },
];

function Schedule() {
  const toast = useToast();
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
    toast({
      title: "Appointment added",
      position: "bottom",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    // setNewEvent(" ");
  }
  //   setNewEvent(" ");

  return (
    <div mt="5">
      <Input
        type="text"
        placeholder="Meeting Purpose"
        value={newEvent.title}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        h="45px"
        variant="filled"
        fontSize="md"
        mr="10px"
        mt="5"
        mb="5px"
        w="35%"
        backgroundColor="#e4e4e4"
        color="#141414"
        _hover={{ bgColor: "#e4e4e4" }}
        _active={{
          bg: "#e4e4e4",
        }}
        _focus={{ bgColor: "#e4e4e4" }}
        _placeholder={{ color: "#6e6e6e" }}
      />
      <style>
        {`.date-picker input {
          background-color: #e4e4e4;
            color: #141414 !important;
            _placeholder={{ color: "#6e6e6e" }}
            font-size: 1.2rem;
            padding: 7px;
            padding-left: 17px;
            border-radius: 5px;
            margin-bottom: 5px;
            margin-right: 10px;
            width: 35%;
            height: 45px;
            
        
      }`}
      </style>
      <Flex flexDirection="row" mt="3">
        <DatePicker
          wrapperClassName="date-picker"
          placeholderText="From"
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
      </Flex>
      <Flex flexDirection="row" mt="3">
        <DatePicker
          wrapperClassName="date-picker"
          placeholderText="Till"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
      </Flex>
      <Button
        bg={"blue.500"}
        color={"white"}
        _hover={{
          bg: "blue.600",
        }}
        _active={{ bg: "blue.600" }}
        mt="4"
        onClick={handleAddEvent}
      >
        Confirm
      </Button>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, marginTop: "50px" }}
      />
    </div>
  );
}

export default Schedule;
