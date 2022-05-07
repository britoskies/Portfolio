import React from "react";
import "../../assets/styles/hoverjump.css";

// React
import { NavigateFunction, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { BsFillHouseDoorFill, BsFillFileCodeFill } from "react-icons/bs";

// Chakra
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  useMediaQuery,
  Image
} from "@chakra-ui/react";

// Components
import Menu from "./Menu";
import logo from "../../assets/img/BS-logo-nobg.png";

const NavBar: React.FC = (): JSX.Element => {
  const navigateTo: NavigateFunction = useNavigate();
  const [isNotSmallScreen]: boolean[] = useMediaQuery("(min-width:700px)");

  return (
    <Flex w="100%" py={10} px={20} align="center" color="white" opacity={0.8}>
      {isNotSmallScreen ? (
        <Flex justify="center" align="center" gap={5}>
          <Image
            src={logo}
            w="40px"
            data-aos="zoom-out"
            data-aos-duration={2000}
          />
          <Heading size="md" data-aos="zoom-out" data-aos-duration={2000}>
            {"<"}Britoskies{"/>"}{" "}
          </Heading>
        </Flex>
      ) : (
        <Image
          src={logo}
          w="40px"
          data-aos="zoom-out"
          data-aos-duration={2000}
        />
      )}

      <Spacer />

      {isNotSmallScreen ? (
        <Box data-aos="zoom-out" data-aos-duration={2000}>
          <Button
            className="smoothjump"
            colorScheme="white"
            variant="ghost"
            leftIcon={<BsFillHouseDoorFill />}
            ml={2}
            onClick={() => navigateTo("")}
          >
            Home
          </Button>
          <Button
            className="smoothjump"
            colorScheme="white"
            variant="ghost"
            leftIcon={<BsFillFileCodeFill />}
            ml={3}
            onClick={() => navigateTo("projects")}
          >
            Projects
          </Button>
          <Button textColor="white" colorScheme="teal" variant="solid" ml={3}>
            <HashLink smooth to="/#contact">
              Hire me
            </HashLink>
          </Button>
        </Box>
      ) : (
        <Menu />
      )}
    </Flex>
  );
};

export default NavBar;
