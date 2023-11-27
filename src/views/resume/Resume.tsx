import React from "react";
import Footer from "../../components/footer/Footer";

// PDF
import resume from "../../assets/pdf/RonaldBrito-JRCV.pdf"

// Chakra
import { Flex, Heading, Stack, useMediaQuery } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

// ReactPDF plugins
import { Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Viewer } from "@react-pdf-viewer/core";

// ReactPDF styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Resume(): JSX.Element {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const responsive: string[] = ["100vw", "90vw", "80vw", "70vw"];

  const [isNotSmallScreen]: boolean[] = useMediaQuery("(min-width:600px)");

  return (
    <Stack w="100%" h="100%">
      <Flex
        direction="column"
        w={responsive}
        h={responsive}
        my={isNotSmallScreen ? 10 : 5}
        gap={5}
      >
        <Flex
          justify="space-between"
          align="center"
          bg="#262626"
          shadow="xl"
          w="100%"
          p={5}
          borderRadius={5}
        >
          <Heading fontWeight="semibold" size="md" color="white">
            Resume
          </Heading>
          <TriangleDownIcon color="white" />
        </Flex>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js" />
        <Viewer
          fileUrl={resume}
          plugins={[defaultLayoutPluginInstance]}
          theme="dark"
        />
      </Flex>
      <Stack w="100%">
        <Footer />
      </Stack>
    </Stack>
  );
}
