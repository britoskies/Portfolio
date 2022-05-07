import { Spinner, Flex } from "@chakra-ui/react";

export const CustomSpinner = () => {
  return (
    <Flex direction="row" h='100vh' align='center'>
      <Spinner
        thickness="5px"
        speed="0.65s"
        emptyColor="gray.200"
        color="white"
        size="xl"
      />
    </Flex>
  );
};
