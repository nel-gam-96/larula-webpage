import { Flex, Text, Box } from "@chakra-ui/react";
import Head from "next/head";

import { faq } from "../../data/content";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import useViewport from "../../hooks/useViewport";
import theme from "../../components/ui/theme";

export default function Index() {
  const isMobile = useViewport();

  return (
    <>
      <Head>
        <title>La Rula Taller | Preguntas Frecuentes</title>
      </Head>
      <article>
        <Flex
          bg="light-blue"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          pt="76px"
        >
          <Box textAlign="center">
            <Text
              as="h1"
              variant="sectionTitle"
              color={theme.colors.main.red}
              w="80%"
            >
              Preguntas Frecuentes
            </Text>
          </Box>
          <Box w={isMobile ? "95%" : "55%"}>
            <Text>
              ¡Hola! A continuación encontrarás algunas preguntas frecuentes
              sobre cómo son los workshops. Si tienes dudas adicionales no dudes
              en dejarnos tus datos. Nos pondremos en contacto contigo.
            </Text>

            <Accordion
              mt="50px"
              defaultIndex={[0]}
              fontFamily="League Spartan"
              allowToggle
            >
              {faq.map((el) => (
                <AccordionItem key={el.id} border="none" mb="20px">
                  <h2>
                    <AccordionButton border="none">
                      <Box as="span" flex="1" textAlign="left" fontWeight="600">
                        {el.id}. {el.name}
                      </Box>
                      <AccordionIcon fontSize="30px" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box dangerouslySetInnerHTML={{ __html: el.content }} />
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Flex>
      </article>
    </>
  );
}
