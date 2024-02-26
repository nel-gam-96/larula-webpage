import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import theme from "./theme";
import KitButton from "./KitButton";

const KitBox = ({ el, isMobile = false }) => {
  return (
    <Box
      borderRadius="16px"
      bg="white"
      // m={isMobile ? "6px" : "6px"}
      minH="430px"
      p="2px"
      w={isMobile ? "300px" : "230px"}
    >
      <Box
        backgroundImage={el.picture}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        borderRadius="16px 16px 0 0"
        backgroundPosition="center"
        h="250px"
        margin="auto"
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        w={isMobile ? "280px" : "320px"}
        m="auto"
        maxW="99%"
        h="180px"
      >
        <Box>
          <Text
            color={theme.colors.main.red}
            as="h2"
            fontSize="12px"
            fontWeight="700"
            m="8px 0 0 0"
            lineHeight="1em"
            h="40px"
            textAlign="center"
          >
            {el.title}
          </Text>
        </Box>
        <Box p="0 12px" h="84px">
          <Text
            as="p"
            fontSize="12px"
            fontWeight="300"
            m="8px 0 0 0"
            lineHeight="1em"
            textAlign="justify"
          >
            {el.abstract} ...
          </Text>
        </Box>
        <Flex justifyContent="center" p="2px 0 10px 0">
          <KitButton>Leer más</KitButton>
        </Flex>
      </Box>
    </Box>
  );
};

export default KitBox;
