import React from "react";

// Chakra
import {
  Button,
  Center,
  Flex,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery
} from "@chakra-ui/react";

// Components
import AllCards from "../../components/cards/AllCards";
import ReactCard from "./../../components/cards/ReactCard";
import AngularCard from "./../../components/cards/AngularCard";
import VanillaCard from "./../../components/cards/VanillaCard";
import { GitHub } from "../../assets/icons/GitHub";
import Footer from './../../components/footer/Footer';

const Projects: React.FC = (): JSX.Element => {
  const responsive: string[] = ["100%", "90%", "80%", "100%"];
  const [isNotSmallScreen]: boolean[] = useMediaQuery("(min-width:400px)");

  return (
    <Stack w={responsive} justify="center" align="center" my={5} zIndex={1}>
      <Center>
        <Tabs
          w={responsive}
          align="center"
          variant="soft-rounded"
          colorScheme="green"
          color="white"
          my={5}
        >
          <TabList
            w={["80%", "100%", "30rem", "35rem"]}
            bg="#262626"
            shadow="xl"
            alignItems="center"
            borderRadius="lg"
            border="none"
            p={3}
          >
            <Flex direction={isNotSmallScreen ? "row" : "column"} gap={3}>
              <Tab>All</Tab>
              <Tab>React</Tab>
            </Flex>
            <Flex direction={isNotSmallScreen ? "row" : "column"} gap={3}>
              <Tab>Angular</Tab>
              <Tab>Vanilla JS</Tab>
            </Flex>
          </TabList>
          <TabPanels>
            <TabPanel mt={5}>
              <AllCards />
            </TabPanel>
            <TabPanel mt={10}>
              <ReactCard />
            </TabPanel>
            <TabPanel mt={10}>
              <AngularCard />
            </TabPanel>
            <TabPanel mt={10}>
              <VanillaCard />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
      <Button
        w={["60%", "15rem", "15rem", "20rem"]}
        rightIcon={<GitHub />}
        colorScheme="blue"
        variant="solid"
      >
        <a href="https://github.com/britoskies/" target="_blank">
          Check for more on GitHub
        </a>
      </Button>
      <Stack w="100%">
        <Footer />
      </Stack>
    </Stack>
  );
};

export default Projects;
