import React from "react";

// Chakra
import { Box, Image, Text, Flex, useColorModeValue } from "@chakra-ui/react";

// Logo
import logo from "../../assets/img/BS-logo-nobg.png";

const Footer = () => {
  return (
    <footer>
      <Box bg="#212121" color="gray.200">
        <Box py={10}>
          <Flex
            align={"center"}
            _before={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              ml: 8,
            }}
          >
            <Image src={logo} w="40px" />
          </Flex>
          <Text pt={6} fontSize={"sm"} textAlign={"center"}>
            © 2022 Ronald Brito ❤. All rights reserved
          </Text>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
