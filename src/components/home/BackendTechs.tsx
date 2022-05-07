import React from "react";

// Chakra
import { Image, Text, Flex, Circle, useMediaQuery } from "@chakra-ui/react";

// Images
import backend from "../../assets/icons/backend.png";
import node from "../../assets/icons/node-js.png";
import express from "../../assets/icons/express.png";
import firebase from "../../assets/icons/firebase.png";
import sql from "../../assets/icons/sql.webp";

const BackendTechs = () => {
  const [isNotSmallScreen]: boolean[] = useMediaQuery("(min-width:400px)");
  return (
    <Flex
      direction="column"
      justify="left"
      align="left"
      w={["300px", "300px", "400px", "400px"]}
      p={3}
      bg="#2b2b2b"
      borderBottom="solid 10px purple"
      borderRadius={5}
      data-aos="zoom-in"
      data-aos-duration={1500}
    >
      <Flex align="center" gap={5}>
        <Circle size="60px" bg="purple">
          <Image src={backend} />
        </Circle>
        <Text color="white" fontSize="md" fontWeight="semibold">
          BACKEND
        </Text>
      </Flex>
      <Flex dir={isNotSmallScreen ? "row" : "column"} gap={10} my={4}>
        <Flex direction="column" gap={3} mt={4}>
          <Flex gap={3}>
            <Circle size="25px">
              <Image src={node} />
            </Circle>
            <Text color="green.400" fontSize="sm" fontWeight="semibold">
              NodeJS
            </Text>
          </Flex>
          <Flex gap={3}>
            <Circle size="25px">
              <Image src={express}/>
            </Circle>
            <Text color="gray.300" fontSize="sm" fontWeight="semibold">
              ExpressJS
            </Text>
          </Flex>
          <Flex gap={3}>
            <Circle size="25px" bg="yellow.400">
              <Image src={firebase} />
            </Circle>
            <Text color="yellow.400" fontSize="sm" fontWeight="semibold">
              Firebase
            </Text>
          </Flex>
          <Flex gap={3}>
            <Circle size="25px">
              <Image src={sql} />
            </Circle>
            <Text color="teal.400" fontSize="sm" fontWeight="semibold">
              SQL (MS Server, MySQL)
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BackendTechs;
