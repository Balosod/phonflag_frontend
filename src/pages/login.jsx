import { Box, Heading, HStack, Link } from "@chakra-ui/react";
import {
  Image,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Divider,
  Button,
  Icon,
} from "@chakra-ui/react";
import logo from "/home/sodiq/rapidmvp/frontend/phonflag/src/logo.png";
import arrow from "/home/sodiq/rapidmvp/frontend/phonflag/src/arrow.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link as RouteLink } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <Box bg="#BFBFBF" h="100vh">
        <Box bg="#1F162A" h={{ lg: "100vh" }}>
          <Box
            justifyContent="center"
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Box
              display={{ base: "none", lg: "block" }}
              ml="40px"
              mr="0px"
              pt={{ lg: "110px" }}
            >
              <Image src={logo} alt="logo" />
              <Stack spacing={{ lg: 1 }} my={{ lg: "40px" }}>
                <Text fontSize="3xl" color="white">
                  Manage your device from one
                </Text>
                <Text fontSize="3xl" color="white">
                  place and enjoy{" "}
                  <Box as="span" color="#823ED1">
                    mental clarity.
                  </Box>{" "}
                </Text>
                <Text fontSize="3xl" color="white">
                  login to get started
                </Text>
              </Stack>
              <Image src={arrow} alt="arrow" />
            </Box>

            <Box
              borderRadius="10px"
              bg="#FFFFFF"
              w={{ base: "85%", sm: "90%", md: "75%", lg: "537px" }}
              h={{ base: "90%", lg: "620px" }}
              m={{ base: "auto", lg: "0px" }}
              mb={{ base: "100px", lg: null }}
              mt={{ base: "50px", lg: "100px" }}
              ml={{ lg: "115px" }}
            >
              <Box m={{ base: "20px", md: "50px", lg: "50px" }}>
                <Box mb={{ lg: "20px" }}>
                  <Heading
                    color="#353535"
                    fontWeight={{ base: 700, lg: 700 }}
                    fontSize={{ base: "30px", lg: "36px" }}
                  >
                    Log in
                  </Heading>
                  <Text
                    mt={{ base: "7px", lg: "20px" }}
                    color="#8A8A8A"
                    fontWeight={{ base: 500, lg: 500 }}
                    fontSize={{ base: "12px", lg: "13px" }}
                  >
                    Welcome back please login into your account
                  </Text>
                </Box>
                <Box>
                  <FormControl mt={{ base: "15px", lg: "15px" }}>
                    <FormLabel
                      //bg={{base:"yellow",sm:"green",md:"red",lg:"purple"}}
                      fontSize="13px"
                      fontWeight={700}
                    >
                      Email
                    </FormLabel>
                    <Input
                      fontSize="13px"
                      fontWeight={700}
                      borderColor={"neutral.400"}
                      placeholder="Your Email"
                    />
                  </FormControl>
                  <FormControl mt={{ base: "15px", lg: "15px" }}>
                    <FormLabel fontSize="13px" fontWeight={700}>
                      Password
                    </FormLabel>
                    <Input
                      fontSize="13px"
                      fontWeight={700}
                      borderColor={"neutral.400"}
                      type="password"
                      placeholder="Your Password"
                    />
                  </FormControl>
                  <HStack
                    justifyContent={"space-between"}
                    mt={{ base: "20px", lg: "20px" }}
                  >
                    <Checkbox fontSize="13px" fontWeight={700} color="#353535">
                      Remember me
                    </Checkbox>
                    <Link>
                      <Text fontSize="13px" fontWeight={700} color="#823ED1">
                        Forgot Password?
                      </Text>
                    </Link>
                  </HStack>
                  <Link href={"/"}>
                    <Button
                      mt="20px"
                      bg="#823ED1"
                      variant={"primary"}
                      fontSize={{ base: "11px", md: "13px" }}
                      fontWeight="700"
                      color="white"
                      cursor={"pointer"}
                      w="100%"
                    >
                      Log in
                    </Button>
                  </Link>

                  <HStack gap="10px" my="20px">
                    <Divider fontSize="13px" fontWeight={700} />
                    <Text
                      color="#8A8A8A"
                      whiteSpace={"nowrap"}
                      fontSize="10px"
                      fontWeight={600}
                    >
                      Or login with
                    </Text>
                    <Divider />
                  </HStack>
                  <HStack gap="15px">
                    <Button w="50%" variant={"secondary"} borderWidth="1px">
                      <Icon as={FcGoogle} mr="6px" />
                      <Text fontSize="13px" fontWeight={700} color="#8A8A8A">
                        Google
                      </Text>
                    </Button>
                    <Button w="50%" variant={"secondary"} borderWidth="1px">
                      <Icon as={FaFacebookSquare} mr="6px" />
                      <Text fontSize="13px" fontWeight={700} color="#8A8A8A">
                        Facebook
                      </Text>
                    </Button>
                  </HStack>
                  <Box mt="40px" textAlign="center">
                    <Text fontSize="13px" fontWeight={700}>
                      Don't have an Account?{" "}
                      <RouteLink color="#823ED1" to="/register">
                        Sign up
                      </RouteLink>{" "}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box bg="#BFBFBF">
          <Box
            ml="20px"
            pt={{ base: "49px", lg: "80px" }}
            pb={{ base: "49px", lg: "80px" }}
          >
            <HStack gap="10px">
              <BsTwitter style={{ cursor: "pointer" }} />
              <BsLinkedin style={{ cursor: "pointer" }} />
              <BsFacebook style={{ cursor: "pointer" }} />
              <BsInstagram style={{ cursor: "pointer" }} />
              <Text
                fontSize={{ base: "11px", md: "13px" }}
                fontWeight="600"
                color="neutral.800"
              >
                Copyright {new Date().getFullYear()} PhoneFlag. All rights
                reserved.
              </Text>
            </HStack>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Signin;
