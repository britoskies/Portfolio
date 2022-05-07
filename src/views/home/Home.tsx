import React from "react";
import "../../app/App.css";

// Chakra
import {
  Stack,
  useDisclosure,
  ModalOverlay,
  useMediaQuery,
} from "@chakra-ui/react";

// Components
import ContactOverlay from "../../components/contact/ContactOverlay.jsx";
import Main from "./../../components/home/Main";
import Skills from "../../components/home/Skills";
import GroundWork from "./../../components/home/GroundWork";
import ContactSection from "./../../components/home/ContactSection";
import Footer from "./../../components/footer/Footer";

const Home: React.FC = (): JSX.Element => {
  const OverlayOne = () => (
    <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
  );

  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isNotSmallScreen]: boolean[] = useMediaQuery("(min-width:400px)");

  return (
    <Stack
      w="100%"
      h="100%"
      align="center"
      position="relative"
      zIndex={1}
    >
      <Main onOpen={onOpen} overlay={<OverlayOne />} setOverlay={setOverlay} />
      <ContactOverlay isOpen={isOpen} onClose={onClose} overlay={overlay} />
      <Stack
        w={["100%", "80%", "80%", "100%"]}
        h="100%"
        pt={isNotSmallScreen ? 40 : 10}
        gap={40}
        bg="#262626"
        opacity={0.8}
      >
        <Skills />
        <GroundWork />
        <ContactSection />
      </Stack>
      <Stack w="100%">
        <Footer />
      </Stack>
    </Stack>
  );
};

export default Home;
