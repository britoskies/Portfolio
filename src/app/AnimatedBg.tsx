import React from "react";
import "../assets/styles/animatebg.css";

// Chakra
import { Box } from "@chakra-ui/react";

const AnimatedBg = () => {
  return (
    <Box position="fixed" zIndex={0}>
      <div className="glowing">
        <span custom-var="1"></span>

        <span custom-var="2"></span>

        <span custom-var="3"></span>
      </div>

      <div className="glowing">
        <span custom-var="1"></span>

        <span custom-var="2"></span>

        <span custom-var="3"></span>
      </div>

      <div className="glowing">
        <span custom-var="1"></span>

        <span custom-var="2"></span>

        <span custom-var="3"></span>
      </div>

      <div className="glowing">
        <span custom-var="1"></span>

        <span custom-var="2"></span>

        <span custom-var="3"></span>
      </div>
    </Box>
  );
};

export default AnimatedBg;
