import { React, useState } from "react";
import {
  Box,
  Center,
  Heading,
  HStack,
  Link,
  ListIcon,
  VStack,
} from "@chakra-ui/react";
import {
  Image,
  Flex,
  Text,
  List,
  ListItem,
  Stack,
  Accordion,
  Spacer,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Wrap,
  WrapItem,
  Input,
  InputGroup,
  InputRightElement,
  Divider,
  Button,
  Icon,
} from "@chakra-ui/react";
import logo2 from "./image/logo2.png";
import logo from "./image/logo.png";
import coinbase from "./image/coinbase.png";
import spotify from "./image/spotify.png";
import slack from "./image/slack.png";
import dropbox from "./image/dropbox.png";
import webflow from "./image/webflow.png";
import zoom from "./image/zoom.png";
import backgroundimage1 from "./image/backgroundimage1.png";
import backgroundimage2 from "./image/backgroundimage2.png";
import one from "./image/one.png";
import two from "./image/two.png";
import three from "./image/three.png";

import user from "./image/user.png";
import radar from "./image/radar.png";
import smartphone from "./image/smartphone.png";
import phone from "./image/phone.png";
import googlebadge from "./image/googlebadge.png";
import appbadge from "./image/appbadge.png";
import indicator from "./image/indicator.png";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import {
  BsArrowRight,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { Link as RouteLink } from "react-router-dom";

const LandingPage = () => {
  let [display, changeDisplay] = useState(false);
  return (
    <Box bg="#F4F4F4" h="100vh">
      {/* Header */}
      <Box display={{ base: "none", lg: "block" }}>
        <Box
          position="absolute"
          display="flex"
          flexDirection={{ lg: "row" }}
          justifyContent={"space-between"}
          mt={{ lg: "40px" }}
        >
          <HStack spacing="30px" ml={{ lg: "90px" }}>
            <Box pr={{ lg: "20px" }}>
              <Image src={logo2} alt="logo" />
            </Box>
            <Box>
              <Link color="#823ED1" fontWeight={700} fontSize="13px">
                Home
              </Link>
            </Box>
            <Box>
              <Link fontWeight={700} fontSize="13px">
                Track
              </Link>
            </Box>
            <Box fontWeight={700} fontSize="13px">
              <Link>Marketplace</Link>
            </Box>
            <Box fontWeight={700} fontSize="13px">
              <Link>Insure</Link>
            </Box>
          </HStack>

          <HStack ml={{ lg: "530px" }}>
            <Box pr="20px">
              <RouteLink to="/login">
                <Text color="#FFFFFF" fontWeight={700} fontSize="13px">
                  Login
                </Text>
              </RouteLink>
            </Box>
            <Box>
              <RouteLink to="/register">
                <Button bg="#FFFFFF" fontWeight={700} fontSize="13px">
                  Signup
                </Button>
              </RouteLink>
            </Box>
          </HStack>
        </Box>
      </Box>

      {/* Hamburger */}
      <Box display={{ base: "block", lg: "none" }}>
        <Flex p="20px" display={display ? "none" : "flex"}>
          <Box p="4">
            <Image src={logo2} alt="logo" />
          </Box>
          <Spacer />
          <Box p="4">
            <RxHamburgerMenu
              onClick={() => changeDisplay(true)}
              size="25px"
              color="#8A8A8A"
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Flex>
      </Box>

      <Box mt="0" mb="0" bg="black">
        <Box display={display ? "block" : "none"}>
          <Box p="4" align="right">
            <AiOutlineClose
              onClick={() => changeDisplay(false)}
              size="25px"
              color="#FFFFFF"
              style={{ cursor: "pointer" }}
            />
          </Box>

          <VStack spacing="30px">
            <Box>
              <Link color="#FFFFFF" fontWeight={700} fontSize="13px">
                Home
              </Link>
            </Box>
            <Box>
              <Link color="#FFFFFF" fontWeight={700} fontSize="13px">
                Track
              </Link>
            </Box>
            <Box color="#FFFFFF" fontWeight={700} fontSize="13px">
              <Link>Marketplace</Link>
            </Box>
            <Box color="#FFFFFF" fontWeight={700} fontSize="13px">
              <Link>Insure</Link>
            </Box>
            <Box>
              <RouteLink to="/login">
                <Text color="#FFFFFF" fontWeight={700} fontSize="13px">
                  Login
                </Text>
              </RouteLink>
            </Box>
            <Box pb="50px">
              <RouteLink to="/register">
                <Button bg="#FFFFFF" fontWeight={700} fontSize="13px">
                  Signup
                </Button>
              </RouteLink>
            </Box>
          </VStack>
        </Box>
      </Box>

      {/* Get Started       */}
      <Flex flexDirection={{ base: "column", lg: "row" }}>
        <Box
          mt={{ base: "1px", lg: "20px" }}
          w={{ base: "100%", lg: "50%" }}
          bg="#F4F4F4"
        >
          <Box
            mt={{ base: "10px", lg: "130px" }}
            ml={{ base: "40px", lg: "90px" }}
          >
            <Box w="85%">
              <Heading
                fontWeight={"800"}
                fontSize={{ base: "25px", lg: "48px" }}
                lineHeight={{ lg: "60px" }}
              >
                Insure, track or sell your{" "}
                <Text as="span" color="#FFA800">
                  digital devices
                </Text>{" "}
                without hassles
              </Heading>
              <Text my="30px">
                Croissant fruitcake tart jujubes bonbon pie cream biscuit
                pudding. Chocolate cake pudding jujubes lollipop cake.
              </Text>
              <RouteLink to="/login">
                <Button
                  color="#FFFFFF"
                  fontSize="13px"
                  fontWeight={700}
                  bg="#823ED1"
                  rightIcon={<BsArrowRight />}
                  variant="#823ED1"
                >
                  Get Started
                </Button>
              </RouteLink>
              <Wrap
                mt="55px"
                mb={{ base: "20px" }}
                spacing={{ base: "25px", lg: "40px" }}
              >
                <WrapItem>
                  <Stack spacing="1px">
                    <Text
                      color="#ABABAB"
                      fontWeight={800}
                      fontSize={{ base: "25px", lg: "36px" }}
                    >
                      2K+
                    </Text>
                    <Text color="#ABABAB" fontWeight={500} fontSize="15px">
                      Devices
                    </Text>
                  </Stack>
                </WrapItem>
                <WrapItem>
                  <Stack spacing="1px">
                    <Text
                      color="#ABABAB"
                      fontWeight={800}
                      fontSize={{ base: "25px", lg: "36px" }}
                    >
                      10K+
                    </Text>
                    <Text color="#ABABAB" fontWeight={500} fontSize="15px">
                      Partners
                    </Text>
                  </Stack>
                </WrapItem>
                <WrapItem>
                  <Stack spacing="1px">
                    <Text
                      color="#ABABAB"
                      fontWeight={800}
                      fontSize={{ base: "25px", lg: "36px" }}
                    >
                      300K+
                    </Text>
                    <Text color="#ABABAB" fontWeight={500} fontSize="15px">
                      Merchants
                    </Text>
                  </Stack>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Box>
        <Image opacity="1" w={{ lg: "50%" }} src={backgroundimage2} />
      </Flex>

      {/* Coinbase spotify slack dropbox webflow and zoom */}

      <Box bg="#EAEAEA" py={{ base: "50px", lg: "40px" }}>
        <Wrap spacingX={120} spacingY={50} justify="center">
          <WrapItem>
            <Image mt={{ lg: "5px" }} src={coinbase} alt="coinbase" />
          </WrapItem>
          <WrapItem>
            <Image src={spotify} alt="spotify" />
          </WrapItem>
          <WrapItem>
            <Image src={slack} alt="slack" />
          </WrapItem>
          <WrapItem>
            <Image src={dropbox} alt="dropbox" />
          </WrapItem>
          <WrapItem>
            <Image mt={{ lg: "5px" }} src={webflow} alt="webflow" />
          </WrapItem>
          <WrapItem>
            <Image mt={{ lg: "5px" }} src={zoom} alt="zoom" />
          </WrapItem>
        </Wrap>
      </Box>

      {/* Device Tracker */}
      <Box display="flex" flexDirection={{ base: "column-reverse", lg: "row" }}>
        <Image
          opacity="1"
          w={{ base: "100%", lg: "50%" }}
          src={backgroundimage2}
        />
        <Box
          bg="#1F162B"
          w={{ base: "100%", md: "100%", lg: "50%" }}
          p={{ base: "30px", lg: "100px" }}
        >
          <Box mt="10px">
            <Heading
              textAlign={{ base: null, md: "center", lg: "left" }}
              mb="15px"
              as="h6"
              size="xl"
              color="#823ED1"
            >
              Device Tracker
            </Heading>
            <Heading
              textAlign={{ base: "null", md: "center", lg: "left" }}
              color="#FFFFFF"
              fontSize={{ base: "25px", lg: "30px" }}
            >
              Locate your device from anywhere
            </Heading>
            <Text
              textAlign={{ base: "null", md: "center", lg: "left" }}
              mt="25px"
              color="#FFFFFF"
              fontSize={{ base: "15px", lg: "20px" }}
            >
              Safeguard your device from theft using smart AI technology
            </Text>
            <InputGroup
              //    justifyContent={{base:"null", md:"center", lg:"null"}}
              mt="50px"
              size="lg"
              w={{ sm: "400px", md: "340px", lg: "447px" }}
              ml={{ md: "auto", lg: "0" }}
              mr={{ md: "auto", lg: "0" }}
              bg="#FFFFFF"
              borderRadius="5px"
            >
              <Input
                pr="4.5rem"
                fontSize="15px"
                color="#8A8A8A"
                fontWeight={500}
                placeholder="Enter device IMEL number"
              />
              <InputRightElement p="auto" width="100px">
                <Button
                  fontSize="13px"
                  variant="#823ED1"
                  fontWeight={700}
                  size="lg"
                  h="38px"
                  color="#FFFFFF"
                  bg="#823ED1"
                >
                  Locate
                </Button>
              </InputRightElement>
            </InputGroup>

            <Box
              mt="50px"
              display={{ md: "grid", lg: "block" }}
              placeItems={{ md: "center" }}
            >
              <List
                spacing={3}
                color="#FFFFFF"
                fontSize={{ base: "15px", lg: "20px" }}
                fontWeight={600}
              >
                <ListItem>
                  <ListIcon as={Image} src={one} />
                  Enter your device IMEI number
                </ListItem>
                <ListItem>
                  <ListIcon as={Image} src={two} />
                  Verify that the device is yours
                </ListItem>
                <ListItem>
                  <ListIcon as={Image} src={three} />
                  Allow PhoneFlag to track your device
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* How it works */}
      <Box justifyContent="center" bg="#EAEAEA">
        <VStack mb={{ base: "35px", lg: "20px" }}>
          <Heading mt="100px" color="#823ED1" fontWeight={700} fontSize="15px">
            HOW IT WORKS
          </Heading>
          <Heading
            color="#353535"
            fontWeight={800}
            fontSize={{ base: "25px", lg: "38px" }}
          >
            Let’s see how it works
          </Heading>
          <Text color="#353535" fontWeight={400} fontSize="15px">
            Safeguard your device from theft using AI technology.
          </Text>
        </VStack>
        <Box
          w="100%"
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          p="6px"
        >
          <Box
            m="auto"
            mb={{ base: "35px", lg: "0" }}
            ml={{ base: "auto", md: "auto", lg: "90px" }}
            mr={{ base: "auto", md: "auto", lg: "20px" }}
            w={{ base: "90%", md: "50%", lg: "27%" }}
            bg="#823ED1"
            p="30px"
            borderRadius="8px"
          >
            <Box mt="25px" w="90px" bg="#FFFFFF" borderRadius="5px">
              <Center p="25px">
                <Icon w="50px" h="40px" as={Image} src={user} />
              </Center>
            </Box>
            <Heading
              my="30px"
              as="h4"
              size="lg"
              color="#FFFFFF"
              fontSize="24px"
              fontWeight={800}
            >
              Create an account
            </Heading>
            <Text color="#FFFFFF" fontSize="15px" fontWeight={400}>
              Cupcake ipsum jellybeans pie muffin lollipop bear-claw croissant
              apple pie cupcake chocolate barchupa chups gummy bear caramel pie.
            </Text>
            <Button
              mt="20px"
              bg="#FFFFFF"
              color="#823ED1"
              fontSize="13px"
              fontWeight={700}
              rightIcon={<BsArrowRight />}
              variant="#823ED1"
            >
              Learn More
            </Button>
          </Box>

          <Box
            m="auto"
            mb={{ base: "35px", lg: "0" }}
            ml={{ base: "auto", md: "auto", lg: "0px" }}
            mr={{ base: "auto", md: "auto", lg: "20px" }}
            w={{ base: "90%", md: "50%", lg: "27%" }}
            bg="#FFFFFF"
            p="30px"
            borderRadius="8px"
          >
            <Box mt="25px" w="90px" bg="#ECECEC" borderRadius="5px">
              <Center p="25px">
                <Icon w="50px" h="40px" as={Image} src={radar} />
              </Center>
            </Box>
            <Heading
              my="30px"
              as="h4"
              size="lg"
              color="#353535"
              fontSize="24px"
              fontWeight={800}
            >
              The smart locator
            </Heading>
            <Text color="#353535" fontSize="15px" fontWeight={400}>
              Cupcake ipsum jellybeans pie muffin lollipop bear-claw croissant
              apple pie cupcake chocolate barchupa chups gummy bear caramel pie.
            </Text>
            <Button
              mt="20px"
              bg="#353535"
              color="#FFFFFF"
              fontSize="13px"
              fontWeight={700}
              rightIcon={<BsArrowRight />}
              variant="#FFFFFF"
            >
              Learn More
            </Button>
          </Box>

          <Box
            m="auto"
            w={{ base: "90%", md: "50%", lg: "27%" }}
            ml={{ base: "auto", md: "auto", lg: "0px" }}
            bg="#FFFFFF"
            p="30px"
            borderRadius="8px"
          >
            <Box mt="25px" w="90px" bg="#ECECEC" borderRadius="5px">
              <Center p="25px">
                <Icon w="50px" h="40px" as={Image} src={smartphone} />
              </Center>
            </Box>
            <Heading
              my="30px"
              as="h4"
              size="lg"
              color="#353535"
              fontSize="24px"
              fontWeight={800}
            >
              Track your device
            </Heading>
            <Text color="#353535" fontSize="15px" fontWeight={400}>
              Cupcake ipsum jellybeans pie muffin lollipop bear-claw croissant
              apple pie cupcake chocolate barchupa chups gummy bear caramel pie.
            </Text>
            <Button
              mt="20px"
              bg="#353535"
              color="#FFFFFF"
              fontSize="13px"
              fontWeight={700}
              rightIcon={<BsArrowRight />}
              variant="#FFFFFF"
            >
              Learn More
            </Button>
          </Box>
        </Box>

        {/* Insure Device */}
        <Box py={{ base: "250px", lg: "250px" }} bg="#EAEAEA">
          <Box
            bg="#1F162A"
            //bg="red"
            justifyContent="center"
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Box
              m={{ base: "auto", lg: "0" }}
              pt={{ base: "100px", lg: "0px" }}
              my={{ lg: "-60px" }}
              ml={{ lg: "20px" }}
              w={{ base: "200px", lg: "350px" }}
            >
              <Image
                h={{ base: "400px", lg: "600px" }}
                src={phone}
                alt="logo"
              />
            </Box>

            <Box
              textAlign={{ base: "center" }}
              w={{ base: "100%", lg: "35%" }}
              mt={{ base: "50px", lg: "40px" }}
              ml={{ base: "0px", lg: "100px" }}
              p={{ base: "25px" }}
            >
              <Heading mb="15px" as="h6" size="xs" color="#823ED1">
                Device Tracker
              </Heading>
              <Heading
                fontWeight={"800"}
                fontSize={{ base: "25px", lg: "48px" }}
                color="#FFFFFF"
                lineHeight={{ lg: "60px" }}
              >
                Insure, track or sell your{" "}
                <Text as="span" color="#FFA800">
                  digital devices
                </Text>{" "}
                in a heart beat.
              </Heading>
              <Text
                fontWeight={400}
                fontSize={{ base: "14px", lg: "15px" }}
                color="#FFFFFF"
              >
                Safeguard your device from theft using AI technology.
              </Text>

              <HStack
                mt={{ base: "40px", lg: "20px" }}
                py={{ base: "30px", lg: "10px" }}
                justifyContent={{ base: "center" }}
              >
                <Image src={googlebadge} alt="logo" />
                <Image src={appbadge} alt="logo" />
              </HStack>
            </Box>
          </Box>
        </Box>

        {/* FREQUENTLY ASK QUESTION */}
        <Box>
          <VStack mb="20px">
            <Heading mt="1px" color="#823ED1" fontWeight={700} fontSize="15px">
              FREQUENTLY ASKED QUESTIONS
            </Heading>
            <Heading
              color="#353535"
              fontWeight={800}
              fontSize={{ base: "25px", lg: "38px" }}
            >
              How can we help you?
            </Heading>
            <Text
              p={{ base: "15px" }}
              color="#353535"
              fontWeight={400}
              fontSize="15px"
              textAlign={{ base: "center" }}
            >
              These latest articles might answer your questions and solve your
              problems
            </Text>
          </VStack>
          <Box px={{ base: "0px", lg: "100px" }}>
            <Accordion border="none" p="20px">
              <AccordionItem
                mb="25px"
                p="20px"
                border="none"
                borderRadius="6px"
                bg="#FFFFFF"
              >
                <h2>
                  <AccordionButton
                    _expanded={{
                      color: "#823ED1",
                      fontWeight: "700",
                      fontSize: "15px",
                    }}
                  >
                    <AccordionIcon
                      w={{ base: "15px" }}
                      h={{ base: "15px" }}
                      as={Image}
                      src={indicator}
                      mr="15px"
                    />
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={{ base: "12px", lg: "16px" }}
                    >
                      Why should I use PhoneFlag
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  borderTopWidth="1px"
                  borderTopStyle="solid"
                  borderTopColor="#C9C9C9"
                  mt="20px"
                  pt="20px"
                  pb={4}
                >
                  Cheesecake marzipan biscuit oat cake tiramisu. Shortbread cake
                  icing soufflé gummies pie cupcake chupa chups brownie.
                  Chocolate cake muffin gummi bears brownie tart. Pastry
                  chocolate pie lollipop gingerbread tootsie roll jelly-o
                  marshmallow ice cream. Liquorice chocolate jelly oat cake
                  sweet powder chupa chups jelly beans donut. Lollipop soufflé
                  piehalvah macaroon lollipop bear claw. Chocolate bar
                  cheesecake carrot cake jelly marzipan oat cake tart jelly
                  pudding. Pudding donut croissant icing lollipop croissant
                  chupa chups.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                mb="25px"
                p="20px"
                borderRadius="6px"
                border="none"
                bg="#FFFFFF"
              >
                <h2>
                  <AccordionButton
                    _expanded={{
                      color: "#823ED1",
                      fontWeight: "700",
                      fontSize: "15px",
                    }}
                  >
                    <AccordionIcon
                      w={{ base: "15px" }}
                      h={{ base: "15px" }}
                      as={Image}
                      src={indicator}
                      mr="15px"
                    />
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={{ base: "12px", lg: "16px" }}
                    >
                      What payment method I can use?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  borderTopWidth="1px"
                  borderTopStyle="solid"
                  borderTopColor="#C9C9C9"
                  mt="20px"
                  pt="20px"
                  pb={4}
                >
                  Cheesecake marzipan biscuit oat cake tiramisu. Shortbread cake
                  icing soufflé gummies pie cupcake chupa chups brownie.
                  Chocolate cake muffin gummi bears brownie tart. Pastry
                  chocolate pie lollipop gingerbread tootsie roll jelly-o
                  marshmallow ice cream. Liquorice chocolate jelly oat cake
                  sweet powder chupa chups jelly beans donut. Lollipop soufflé
                  piehalvah macaroon lollipop bear claw. Chocolate bar
                  cheesecake carrot cake jelly marzipan oat cake tart jelly
                  pudding. Pudding donut croissant icing lollipop croissant
                  chupa chups.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                border="none"
                bg="#FFFFFF"
                borderRadius="6px"
                p="20px"
              >
                <h2>
                  <AccordionButton
                    _expanded={{
                      color: "#823ED1",
                      fontWeight: "700",
                      fontSize: "15px",
                    }}
                  >
                    <AccordionIcon
                      w={{ base: "15px" }}
                      h={{ base: "15px" }}
                      as={Image}
                      src={indicator}
                      mr="15px"
                    />
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={{ base: "12px", lg: "16px" }}
                    >
                      How does it works?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  borderTopWidth="1px"
                  borderTopStyle="solid"
                  borderTopColor="#C9C9C9"
                  mt="20px"
                  pt="20px"
                  pb={4}
                >
                  Cheesecake marzipan biscuit oat cake tiramisu. Shortbread cake
                  icing soufflé gummies pie cupcake chupa chups brownie.
                  Chocolate cake muffin gummi bears brownie tart. Pastry
                  chocolate pie lollipop gingerbread tootsie roll jelly-o
                  marshmallow ice cream. Liquorice chocolate jelly oat cake
                  sweet powder chupa chups jelly beans donut. Lollipop soufflé
                  piehalvah macaroon lollipop bear claw. Chocolate bar
                  cheesecake carrot cake jelly marzipan oat cake tart jelly
                  pudding. Pudding donut croissant icing lollipop croissant
                  chupa chups.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>

        {/* Foooter */}
        <Box mt="150px" bg="#1F162A">
          <Box display="flex" flexDirection={{ base: "column", lg: "row" }}>
            <Box m={{ base: "50px", lg: "90px" }}>
              <Image src={logo} alt="logo" />
              <Stack spacing={0} my="30px">
                <Text color="#FFFFFF" fontWeight={300} fontSize="13px">
                  Cheesecake marzipan biscuit cake tiramisu. Pudding
                </Text>
                <Text color="#FFFFFF" fontWeight={300} fontSize="13px">
                  Shortbread cake icing soufflé gummies cupcake chupa
                </Text>
                <Text color="#FFFFFF" fontWeight={300} fontSize="13px">
                  chups lollipop brownie.
                </Text>
              </Stack>
              <HStack w="100px">
                <Image src={googlebadge} alt="logo" />
                <Image src={appbadge} alt="logo" />
              </HStack>
            </Box>
            <Box
              m="50px"
              ml={{ base: "50", lg: "200px" }}
              mt={{ base: "50px", lg: "90px" }}
              display="flex"
              flexDirection="row"
            >
              <Box>
                <Stack spacing={5} color="#FFFFFF">
                  <Text fontWeight={700} fontSize="16px">
                    Seller Centre
                  </Text>
                  <Text fontWeight={700} fontSize="13px">
                    Cupcake
                  </Text>
                  <Text fontWeight={700} fontSize="13px">
                    Lollipop
                  </Text>
                  <Text fontWeight={700} fontSize="13px">
                    Croissant
                  </Text>
                  <Text fontWeight={700} fontSize="13px">
                    Jellybean
                  </Text>
                </Stack>
              </Box>
              <Box ml={{ base: "10px", lg: "100px" }}>
                <Stack
                  spacing={5}
                  fontWeight={700}
                  fontSize="16px"
                  color="#FFFFFF"
                >
                  <Text fontWeight={700} fontSize="16px">
                    Customer
                  </Text>
                  <Text fontWeight={700} fontSize="13px">
                    Cupcake
                  </Text>
                  <Text fontWeight={700} fontSize="13px">
                    Lollipop
                  </Text>
                  <Text fontWeight={700} fontSize="13px">
                    Croissant
                  </Text>
                  <Text fontWeight={700} fontSize="13px">
                    Jellybean
                  </Text>
                </Stack>
              </Box>
              <Box ml={{ base: "10px", lg: "100px" }}>
                <Stack
                  spacing={5}
                  fontWeight={700}
                  fontSize="16px"
                  color="#FFFFFF"
                >
                  <Text fontWeight={700} fontSize="16px">
                    Guide and Help
                  </Text>
                  <Text fontWeight={700} fontSize="13px">
                    Cupcake
                  </Text>
                  <Text fontWeight={700} fontSize="13px">
                    Lollipop
                  </Text>
                  <Text fontWeight={700} fontSize="13px">
                    Croissant
                  </Text>
                  <Text fontWeight={700} fontSize="13px">
                    Jellybean
                  </Text>
                </Stack>
              </Box>
            </Box>
          </Box>
          <Box my="20px">
            <Divider />
          </Box>
          <Box display="flex" flexDirection={{ base: "column", lg: "row" }}>
            <Box m="40px">
              <Text color="#FFFFFF" fontWeight={700} fontSize="13px">
                Copyright 2023 PhoneFlag. All rights reserved.
              </Text>
            </Box>
            <Box
              ml={{ base: "40px", lg: "750px" }}
              mt={{ base: "0px", lg: "40px" }}
              mb={{ base: "20px" }}
            >
              <HStack gap="12px">
                <BsTwitter
                  size="25px"
                  color="#8A8A8A"
                  style={{ cursor: "pointer" }}
                />
                <BsLinkedin
                  size="25px"
                  color="#8A8A8A"
                  style={{ cursor: "pointer" }}
                />
                <BsFacebook
                  size="25px"
                  color="#8A8A8A"
                  style={{ cursor: "pointer" }}
                />
                <BsInstagram
                  size="25px"
                  color="#8A8A8A"
                  style={{ cursor: "pointer" }}
                />
              </HStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
