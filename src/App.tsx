import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HiMail, HiLockClosed } from "react-icons/hi";

function App() {
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <HStack justifyContent="center">
          <img src="/public/logo.svg" />
        </HStack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="2">
              <Text fontSize="3xl" fontWeight="bold">
                Login
              </Text>
              <Text color="#737373">
                Add your details below to get back into the app
              </Text>
            </Stack>
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <InputGroup>
                  <InputLeftElement>
                    <IconButton
                      variant="text"
                      icon={<HiMail />}
                      aria-label={""}
                    />
                  </InputLeftElement>
                  <Input placeholder="alex@gmail.com" id="email" type="email" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                  <InputLeftElement>
                    <IconButton
                      variant="text"
                      icon={<HiLockClosed />}
                      aria-label={""}
                    />
                  </InputLeftElement>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    required
                  />
                </InputGroup>
              </FormControl>
            </Stack>
            <Stack spacing="6">
              <Button
                variant="solid"
                borderRadius="8px"
                bg="#633CFF"
                color="white"
                _hover={{
                  bg: "#BEADFF",
                  boxShadow: "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
                }}
              >
                Login
              </Button>
            </Stack>
            <Text textAlign="center" color="fg.muted">
              Don't have an account?{" "}
              <Link color="#633CFF" href="#">
                Create account
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
