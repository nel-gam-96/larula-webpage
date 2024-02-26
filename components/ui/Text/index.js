import { Text as ChakraUIText } from "@chakra-ui/react";

export default function Button({ children, variant, size, ...props }) {
  return (
    <ChakraUIText variant={variant} size={size} {...props}>
      {children}
    </ChakraUIText>
  );
}