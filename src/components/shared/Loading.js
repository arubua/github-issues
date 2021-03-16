import React from "react";
import { Spinner, Center } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Center h="30px" mt="10%">
      <Spinner size="md" color="teal.700" />
    </Center>
  );
};

export default Loading;
