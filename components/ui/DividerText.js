import React from "react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const DividerText = ({ title, description }) => {
  return (
    <Box>
      <Box>
        <Text as="h2" variant="kitTitle">
          {title}
        </Text>
      </Box>
      <Box maxW="600px">
        <Text variant="kitParraph">{description}</Text>
      </Box>
    </Box>
  );
};

export default DividerText;
