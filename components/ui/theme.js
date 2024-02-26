import { extendTheme } from "@chakra-ui/react";
import Text from "./Text/theme";

const colors = {
  main: {
    white: "#FFF",
    black: "rgb(48,48,48)",
    greenOne: "rgb(60,106,115)",
    greenTwo: "rgb(108,190,180)",
    greenThree: "rgb(139,232,226)",
    red: "#F94880",
  },
};

const theme = extendTheme({
  colors,
  components: {
    Text,
  },
});

export default theme;
