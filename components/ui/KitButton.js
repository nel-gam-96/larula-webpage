import { Box, Flex, Text, Button } from "@chakra-ui/react";
import theme from "./theme";

const KitButton = ({ children }) => {
  return (
    <Flex bg="" w="" h="" alignItems="center" mt="10px">
      <Button
        h="25px"
        fontSize="10px"
        color="white"
        bg={theme.colors.main.red}
        border="2px solid"
        borderColor={theme.colors.main.red}
        _hover={{
          color: theme.colors.main.red,
          background: "white",
          borderColor: theme.colors.main.red,
        }}
      >
        {children}
      </Button>
    </Flex>
  );
};

export default KitButton;
