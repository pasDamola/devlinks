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
  Stack,
  Text,
} from "@chakra-ui/react";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { Link } from "react-router-dom";

function Login() {
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
          <Stack spacing="10">
            <Stack>
              <Text fontSize="3xl" fontWeight={900}>
                Login
              </Text>
              <Text color="#737373">
                Add your details below to get back into the app
              </Text>
            </Stack>
            <Stack spacing="5">
              <FormControl>
                <FormLabel color="#737373" fontSize="xs" htmlFor="email">
                  Email address
                </FormLabel>
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
                <FormLabel color="#737373" fontSize="xs" htmlFor="password">
                  Password
                </FormLabel>
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
            <Stack>
              <Button
                variant="solid"
                borderRadius="8px"
                bg="#633CFF"
                color="white"
                _hover={{
                  bg: "#BEADFF",
                  boxShadow: "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
                }}
                py={6}
              >
                Login
              </Button>
            </Stack>
            <Text textAlign="center" color="fg.muted">
              Don't have an account?{" "}
              <Link style={{ color: "#633CFF" }} to="/signup">
                Create account
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default Login;
