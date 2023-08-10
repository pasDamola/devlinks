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
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email. Please enter a valid email address",
  }),
  password: z
    .string()
    .min(8, { message: "The password must be 8 characters or more" }),
});

type FormInput = z.infer<typeof FormSchema>;

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="10">
        <HStack
          mb="5"
          justifyContent={{ base: "flex-start", sm: "center" }}
          px={{ base: 6 }}
        >
          <img src="/public/logo.svg" />
        </HStack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "6", sm: "10" }}
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing="5">
                <FormControl>
                  <FormLabel
                    color={errors?.email?.message ? "#FF3939" : "#737373"}
                    fontSize="xs"
                    htmlFor="email"
                  >
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
                    <Input
                      _focus={
                        errors?.email?.message
                          ? {
                              border: "1px solid #FF3939",
                            }
                          : {
                              boxShadow:
                                "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
                            }
                      }
                      focusBorderColor={
                        errors?.email?.message ? "#FF3939" : "#633CFF"
                      }
                      placeholder="alex@gmail.com"
                      id="email"
                      type="text"
                      borderColor={errors?.email?.message && "#FF3939"}
                      {...register("email")}
                    />
                    {errors?.email?.message && (
                      <InputRightElement mx="2" width="4.5rem">
                        <Text fontSize="x-small" color="#FF3939">
                          Can't be invalid
                        </Text>
                      </InputRightElement>
                    )}
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel
                    color={errors?.password?.message ? "#FF3939" : "#737373"}
                    fontSize="xs"
                    htmlFor="password"
                  >
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
                      _focus={
                        errors?.password?.message
                          ? {
                              border: "1px solid #FF3939",
                            }
                          : {
                              boxShadow:
                                "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
                            }
                      }
                      focusBorderColor={
                        errors?.password?.message ? "#FF3939" : "#633CFF"
                      }
                      id="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      borderColor={errors?.password?.message && "#FF3939"}
                      {...register("password")}
                    />
                    {errors?.password?.message && (
                      <InputRightElement mx="2" width="5.5rem">
                        <Text fontSize="x-small" color="#FF3939">
                          Please check again
                        </Text>
                      </InputRightElement>
                    )}
                  </InputGroup>
                </FormControl>
                <Stack>
                  <Button
                    type="submit"
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
              </Stack>
            </form>
            <HStack
              spacing={{ base: "none", sm: 1 }}
              justifyContent="center"
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Text color="fg.muted">Don't have an account? </Text>
              <Link style={{ color: "#633CFF" }} to="/signup">
                Create account
              </Link>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default Login;
