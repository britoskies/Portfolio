import React from "react";
import "./App.css";

// Dependencies of outlet
import Router from "../routes/Router";
import NavBar from "./../components/navbar/NavBar";

// Chakra
import {
  Center,
  ChakraProvider,
  FormControl,
  FormLabel,
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
import song from "../assets/sound/Jack-Harlow-Denver-Instrumental.mp3";

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
          loop={true}
          //autoLoad={true}
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
          <Center>
            <Router />
          </Center>
        )}
      </VStack>
    </ChakraProvider>
  );
}

export default App;
