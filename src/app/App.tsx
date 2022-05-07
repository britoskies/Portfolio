import React from "react";
import "./App.css";

// Dependencies of outlet
import Router from "../routes/Router";
import NavBar from "./../components/navbar/NavBar";

// Chakra
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  FormControl,
  FormLabel,
  SlideFade,
  Stack,
  Switch,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

// Components
import { CustomSpinner } from "./../components/spinner/CustomSpinner";
import AnimatedBg from "./AnimatedBg";

// Aos
import Aos from "aos";
import "aos/dist/aos.css";

// Sound
import Sound, { ReactSoundProps } from "react-sound";
import song from "../assets/sound/Bad-Bunny-Yo-No-Soy-Celoso.mp3";

function App() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const { isOpen, onToggle } = useDisclosure();

  React.useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2000));
      setLoading((loading) => !loading);
      onToggle();
    };
    loadData();
    Aos.init();
    Aos.refresh();
  }, []);

  const [status, setStatus] =
    React.useState<ReactSoundProps["playStatus"]>("STOPPED");

  function togglePlayStatus() {
    console.log("sound");
    setStatus((status) => (status === "STOPPED" ? "PLAYING" : "STOPPED"));
  }

  return (
    <ChakraProvider>
      <VStack w="100%" h="100%" bg="#212121">
        <AnimatedBg />
        <Sound
          url={song}
          playStatus={status}
          volume={5}
        />
        <NavBar />
        <FormControl
          id="music"
          w="89%"
          display="flex"
          justifyContent="right"
          alignItems="center"
        >
          <FormLabel color="white" htmlFor="email-alerts" mb="0">
            Music
          </FormLabel>
          <Switch
            id="email-alerts"
            colorScheme="red"
            onChange={() => togglePlayStatus()}
          />
        </FormControl>
        {loading ? (
          <CustomSpinner />
        ) : (
          <SlideFade in={isOpen} offsetY="100px">
            <Center>
              <Router />
            </Center>
          </SlideFade>
        )}
      </VStack>
    </ChakraProvider>
  );
}

export default App;
