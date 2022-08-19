import { Container, Stack, Heading, Text, Button } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container maxW={"8xl"} h="100vh" fontFamily="Europa-Reg" mt="5">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            fontFamily="Europa-Bold"
            letterSpacing="-4px"
          >
            <Text
              as={"span"}
              fontSize="8xl"
              position={"relative"}
              color="#2e2e2e"
            >
              Best Possible Care.
            </Text>
            <br />
            <Text color="#5e5e5e" fontSize="6xl" letterSpacing="-3px">
              By Best Possible People.
            </Text>
          </Heading>
          <Text color="gray.600" fontSize="2xl">
            Medexa is an online gateway that allows doctors and patients to
            interact fluently with a few clicks, arrange online appointments,
            and produce reports directly on the website.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              bg="#212123"
              color="#e4e4e4"
              _hover={{ bg: "#303033" }}
              _active={{ bg: "#212123" }}
            >
              Get started
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
