import React from "react";

// Chakra

import { Image, Text, Flex, Circle, useMediaQuery } from "@chakra-ui/react";

// Images
import git from "../../assets/icons/git.png";
import kanban from "../../assets/icons/kanban.png";
import tools from "../../assets/icons/tools.png";
import problemsolving from "../../assets/icons/problemsolving.png";
import inquisitive from "../../assets/icons/inquisitive.png";

const Tools = () => {
  const [isNotSmallScreen]: boolean[] = useMediaQuery("(min-width:400px)");
  return (
    <>
      <Flex
        direction="column"
        justify="left"
        align="left"
        w={["300px", "300px", "400px", "400px"]}
        p={3}
        bg="#2b2b2b"
        borderBottom="solid 10px #f56565"
        borderRadius={5}
        data-aos="zoom-in"
        data-aos-duration={1500}
      >
        <Flex align="center" gap={5}>
          <Circle size="60px" bg="red.400">
            <Image src={tools} w="45px"/>
          </Circle>
          <Text color="white" fontSize="md" fontWeight="semibold">
            TOOLS & SOFT SKILLS
          </Text>
        </Flex>
        <Flex dir={isNotSmallScreen ? "row" : "column"} gap={10} my={4}>
          <Flex direction="column" gap={3} mt={4}>
            <Flex gap={3}>
              <Circle size="25px" bg="orange">
                <Image src={git} />
              </Circle>
              <Text color="orange.300" fontSize="sm" fontWeight="semibold">
                Git
              </Text>
            </Flex>
            <Flex gap={3}>
              <Circle size="25px" bg="gray.300">
                <Image src={kanban} />
              </Circle>
              <Text color="gray.300" fontSize="sm" fontWeight="semibold">
                Kanban
              </Text>
            </Flex>
            <Flex gap={3}>
              <Circle size="25px" bg="yellow">
                <Image src={inquisitive} />
              </Circle>
              <Text color="yellow.300" fontSize="sm" fontWeight="semibold">
                Inquisitive
              </Text>
            </Flex>
            <Flex gap={3}>
              <Circle size="25px">
                <Image src={problemsolving} />
              </Circle>
              <Text color="teal.400" fontSize="sm" fontWeight="semibold">
                Problem Solving
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Tools;
