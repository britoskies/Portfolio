import React from "react";

// Chakra
import {
  Heading,
  Text,
  Flex,
  Wrap,
  WrapItem,
  useMediaQuery,
} from "@chakra-ui/react";

// Components
import FrontendTechs from "./FrontendTechs";
import BackendTechs from "./BackendTechs";
import Tools from "./Tools";

const Skills = (): JSX.Element => {
  const [isNotSmallScreen]: boolean[] = useMediaQuery("(min-width:400px)");
  return (
    <Flex direction="column" w="100%" justify="center" align="center" gap={3}>
      <Text
        position="relative"
        fontSize="lg"
        color="#c6f6d5"
        className="underline"
        data-aos="fade-left"
        data-aos-duration={3000}
      >
        What I Know
      </Text>
      <Heading
        size="lg"
        color="white"
        data-aos="fade-right"
        data-aos-duration={3000}
      >
        My Skills
      </Heading>
      <Wrap mt={20} justify="center" spacing={isNotSmallScreen ? 10 : 5}>
        <WrapItem>
          <BackendTechs />
        </WrapItem>
        <WrapItem>
          <FrontendTechs />
        </WrapItem>
        <WrapItem>
          <Tools />
        </WrapItem>
      </Wrap>
    </Flex>
  );
};

export default Skills;
