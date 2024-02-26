import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Text from "../ui/Text";
import { clientes } from "../../data/content";
import { useTheme } from "@chakra-ui/react";
import Image from "next/image";
import useViewport from "../../hooks/useViewport";

const ClientLogo = ({ el, isMobile }) => {
  return (
    <Box
      position="relative"
      w={isMobile ? "220px" : "120px"}
      h={isMobile ? "190px" : "120px"}
      m={isMobile ? "20px" : "auto"}
    >
      <Image src={el.picture} alt={el.title} fill className="client-logo" />
    </Box>
  );
};

const Clientes = () => {
  const isMobile = useViewport();
  const theme = useTheme();
  return (
    <section className="section">
      <Box>
        <Box textAlign="center" m="20px">
          <Text
            fontSize="30px"
            textAlign="center"
            fontWeight="600"
            maxW="70%"
            color={theme.colors.main.red}
            margin="auto"
            lineHeight="1.2em"
          >
            Empresas que han tomado nuestros workshops
          </Text>
        </Box>
        {isMobile ? (
          <Flex overflow="scroll">
            <Flex w="auto" p="0 30px 0 0">
              {clientes.map((el) => (
                <ClientLogo key={el.id} isMobile={isMobile} el={el} />
              ))}
            </Flex>
          </Flex>
        ) : (
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {clientes.map((el) => (
              <GridItem key={el.id}>
                <ClientLogo el={el} />
              </GridItem>
            ))}
          </Grid>
        )}
      </Box>
    </section>
  );
};

export default Clientes;
