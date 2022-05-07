import React from "react";

// Chakra
import { Image, Text, Flex, Circle, useMediaQuery } from "@chakra-ui/react";

// Images
import frontend from "../../assets/icons/frontend.png";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import js from "../../assets/icons/javascript.png";
import sass from "../../assets/icons/sass.png";
import react from "../../assets/icons/react.png";
import ts from "../../assets/icons/typescript.png";
import angular from "../../assets/icons/angular.svg";
import csharp from "../../assets/icons/csharp.png";
import mui from "../../assets/icons/mui.png";
import bootstrap from "../../assets/icons/bootstrap.png";

const FrontendTechs = (): JSX.Element => {
  const [isNotSmallScreen]: boolean[] = useMediaQuery("(min-width:500px)");
  return (
    <>
      <Flex
        direction="column"
        justify="left"
        align="left"
        w={["300px", "300px", "400px", "400px"]}
        p={3}
        bg="#2b2b2b"
        borderBottom="solid 10px cyan"
        borderRadius={5}
        data-aos="zoom-in"
        data-aos-duration={1500}
      >
        <Flex align="center" gap={5}>
          <Circle size="60px" bg="cyan">
            <Image src={frontend} />
          </Circle>
          <Text color="white" fontSize="md" fontWeight="semibold">
            FRONTEND
          </Text>
        </Flex>
        <Flex dir={isNotSmallScreen ? "row" : "column"} gap={isNotSmallScreen ? 20 : 5} my={4}>
          <Flex direction="column" gap={3} mt={4}>
            <Flex gap={3}>
              <Circle size="25px" bg="orange">
                <Image src={html} />
              </Circle>
              <Text color="orange.300" fontSize="sm" fontWeight="semibold">
                HTML
              </Text>
            </Flex>
            <Flex gap={3}>
              <Circle size="25px" bg="blue">
                <Image src={css} />
              </Circle>
              <Text color="teal.300" fontSize="sm" fontWeight="semibold">
                CSS
              </Text>
            </Flex>
            <Flex gap={3}>
              <Circle size="25px" bg="yellow">
                <Image src={js} />
              </Circle>
              <Text color="yellow.300" fontSize="sm" fontWeight="semibold">
                JavaScript
              </Text>
            </Flex>
            <Flex gap={3}>
              <Circle size="25px" bg="teal">
                <Image src={ts} />
              </Circle>
              <Text color="teal.400" fontSize="sm" fontWeight="semibold">
                TypeScript
              </Text>
            </Flex>
            <Flex gap={3}>
              <Circle size="25px" bg="teal">
                <Image src={csharp} />
              </Circle>
              <Text color="teal.200" fontSize="sm" fontWeight="semibold">
                C#
              </Text>
            </Flex>
          </Flex>

          <Flex direction="column" gap={3} mt={4}>
            <Flex gap={3}>
              <Circle size="25px" bg="teal.200">
                <Image src={react} />
              </Circle>
              <Text color="teal.200" fontSize="sm" fontWeight="semibold">
                React
              </Text>
            </Flex>
            <Flex gap={3}>
              <Circle size="25px">
                <Image src={angular} />
              </Circle>
              <Text color="red.400" fontSize="sm" fontWeight="semibold">
                Angular
              </Text>
            </Flex>
            <Flex gap={3}>
              <Circle size="25px" bg="pink.200">
                <Image src={sass} />
              </Circle>
              <Text color="pink.200" fontSize="sm" fontWeight="semibold">
                Sass
              </Text>
            </Flex>
            <Flex gap={3}>
              <Circle size="25px" bg="white">
                <Image src={mui} />
              </Circle>
              <Text color="whiteAlpha.800" fontSize="sm" fontWeight="semibold">
                Material UI
              </Text>
            </Flex>
            <Flex gap={3}>
              <Circle size="25px" bg="transparent">
                <Image src={bootstrap} />
              </Circle>
              <Text color="purple.300" fontSize="sm" fontWeight="semibold">
                Bootstrap
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default FrontendTechs;
