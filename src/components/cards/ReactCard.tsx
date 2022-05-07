import React from "react";
import "../../assets/styles/blurr.css";

// Chakra
import {
  Box,
  Image,
  Badge,
  Wrap,
  WrapItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Button,
  Flex,
  useMediaQuery
} from "@chakra-ui/react";

// Service
import { iProjects } from "../../interfaces/projects";
import projectsjson from "../../services/projects.js";

const ReactCard = () => {
  const [isNotSmallScreen]: boolean[] = useMediaQuery("(min-width:600px)");
  return (
    <Box w="100%" h="100%">
      <Wrap
        w="100%"
        overflow="hidden"
        spacing={5}
        justify="center"
        align="center"
        p={5}
      >
        {projectsjson.map((p: iProjects) => {
          return (
            p.techs.Frontend.includes("React") && (
              <WrapItem
                bg="#262626"
                maxW={["350px", "400px", "400px", "400px"]}
                p="6"
                d="flex"
                flexDirection="column"
                gap={3}
                borderRadius="lg"
                data-aos="flip-up"
              >
                <Flex
                  w="100%"
                  justify="center"
                  my={3}
                  bgGradient="linear(to-l, #00a1ab, #91C483)"
                  bgClip="text"
                  fontWeight="bold"
                  fontSize="lg"
                  lineHeight="tight"
                  textTransform="uppercase"
                  isTruncated
                >
                  {p.name}
                </Flex>
                <Box className="container">
                  <Image
                    src={p.image}
                    h={["150px", "225px", "225px", "225px"]}
                    borderRadius="lg"
                    className="image"
                  />
                  <Box className="middle">
                    <Button
                      colorScheme="teal"
                      _hover={{
                        bgGradient: "linear(to-l, #00a1ab, #91C483)",
                      }}
                    >
                      <a href={p.link} target="_blank">
                        Take a look
                      </a>
                    </Button>
                  </Box>
                </Box>
                <Flex
                  w="100%"
                  direction={isNotSmallScreen ? "row" : "column"}
                  gap={3}
                  justifyContent="center"
                >
                  <Badge borderRadius="full" px="2" colorScheme="green">
                    {p.type}
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    isTruncated
                  >
                    {`${p.techs.Frontend.join(" ")} ${p.techs.Backend.join(
                      " "
                    )}`}
                  </Box>
                </Flex>
                <Accordion defaultIndex={[1]} allowMultiple w="100%" mt={4}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          textColor="gray"
                          fontWeight="semibold"
                        >
                          About this project
                        </Box>
                        <AccordionIcon color="gray" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel textColor="gray.500" py={5}>
                      {p.description}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </WrapItem>
            )
          );
        })}
      </Wrap>
    </Box>
  );
};

export default ReactCard;
