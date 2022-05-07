import React from "react";
import { useNavigate } from "react-router-dom";
import Sound from "react-sound";

// Styles
import "../../app/App.css";
import img from "../../assets/img/grad-toga2.jpg";

// Chakra
import {
  Box,
  Flex,
  Image,
  Text,
  Stack,
  useMediaQuery,
  Heading,
  Button,
} from "@chakra-ui/react";

import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";

type Props = {
  onOpen: () => void;
  overlay: JSX.Element;
  setOverlay: React.Dispatch<React.SetStateAction<JSX.Element>>;
};

const Main = ({ onOpen, overlay, setOverlay }: Props): JSX.Element => {
  const navigateTo = useNavigate();
  const [btnLoading, setLoading] = React.useState<boolean>(false);
  const [isNotSmallScreen]: boolean[] = useMediaQuery("(min-width:600px)");

  const responsive: string[] = ["100%", "90%", "80%", "70%"];

  const goToResume = () => {
    setLoading(true);
    setTimeout(() => {
      navigateTo("resume");
    }, 2000);
  };

  return (
    <Stack
      w={["90%", "90%", "80%", "70%"]}
      shadow="2xl"
      bg="#171923"
      mt={isNotSmallScreen ? 0 : 5}
      mb={20}
      p={5}
      borderRadius="md"
    >
      <Flex
        direction={isNotSmallScreen ? "row" : "column"}
        justify="space-between"
        align="center"
      >
        <Flex
          direction="column"
          justify={isNotSmallScreen ? "start" : "center"}
          align={isNotSmallScreen ? "start" : "center"}
          gap={5}
          w={responsive}
          m={isNotSmallScreen ? 5 : 0}
          order={isNotSmallScreen ? 0 : 2}
        >
          <Text
            color="white"
            fontSize="md"
            fontWeight="hairline"
            mt={5}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            WELCOME EVERYONE, I AM...
          </Text>
          <Heading
            size="2xl"
            bgGradient="linear(to-l, #00a1ab, #91C483)"
            bgClip="text"
            data-aos="zoom-out"
            data-aos-duration="3000"
          >
            RONALD {isNotSmallScreen && <br />} BRITO
          </Heading>
          <Text
            color="white"
            fontSize="md"
            fontWeight="medium"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            FRONTEND DEVELOPER JR.
          </Text>
          <Text
            w="100%"
            textAlign={isNotSmallScreen ? "left" : "center"}
            fontSize="md"
            fontWeight="medium"
            color="gray.300"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            One year of experience as a self-employed Junior Software Developer.
            Engaging on personal projects and seeking towards working in a
            collaborative environment. <br /> <br />
            Passionate about building simple but remarkable UI's, using
            technologies like React, Angular, SCSS & Bootstrap.
          </Text>
          <Flex my={5} gap={5}>
            {btnLoading && (
              <Button
                colorScheme="teal"
                variant="solid"
                isLoading
                loadingText="Loading"
                spinnerPlacement="end"
              />
            )}
            <Button
              display={btnLoading ? "none" : "flex"}
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="solid"
              onClick={goToResume}
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              Resume
            </Button>
            <Button
              rightIcon={<EmailIcon />}
              colorScheme="blue"
              variant="solid"
              onClick={() => {
                setOverlay(overlay);
                onOpen();
              }}
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              Contact
            </Button>
          </Flex>
        </Flex>
        <Box
          position="relative"
          zIndex={1}
          w={["100%", "80%", "100%", "40%"]}
          className="img-ronald"
        >
          <Image
            src={img}
            alt="britoskies"
            w="100%"
            borderRadius="md"
            data-aos="fade-down-left"
            data-aos-duration="2000"
          />
        </Box>
      </Flex>
    </Stack>
  );
};

export default Main;
