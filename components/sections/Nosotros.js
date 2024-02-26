import { Box, Flex } from "@chakra-ui/react";
import Text from "../ui/Text";
import { nosotros, servicios } from "../../data/home/nosotros";
import useViewport from "../../hooks/useViewport";
import Image from "next/image";

const SingleElement = ({ el }, isMobile = false) => {
  return (
    <Box
      borderRadius="16px"
      bg="rgba(242,242,242)"
      m={isMobile ? "8px" : "16px"}
      p="20px"
      minW="29%"
    >
      <Box
        w={isMobile ? "280px" : "320px"}
        bg="lightblue"
        backgroundImage={`/images/nosotros/${el.picture}`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        borderRadius="16px"
        backgroundPosition="center 70%"
        h="200px"
        margin="auto"
      />
      <Box
        display="flex"
        justifyContent="center"
        w={isMobile ? "280px" : "320px"}
        m="auto"
      >
        <Text
          as="h2"
          fontSize="13px"
          fontWeight="700"
          m="8px 0 0 0"
          lineHeight="1em"
          textAlign="center"
        >
          {el.title}
        </Text>
      </Box>
    </Box>
  );
};

const Nosotros = () => {
  const isMobile = useViewport();
  return (
    <section className="section" id="nosotros">
      <Box
        display="flex"
        w="75vw"
        m="auto"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="space-around"
        alignItems={isMobile ? "none" : "center"}
      >
        <Box w={isMobile ? "100%" : "50%"} p={isMobile ? "0" : "1em"}>
          <Text
            fontWeight="400"
            fontFamily="Poppins"
            fontSize="35px"
            textAlign={isMobile ? "center" : "left"}
            lineHeight="1.2em"
            as="h2"
          >
            {nosotros.title}
          </Text>
          <Text mt="20px" textAlign="justify" mr={isMobile ? "0" : "20px"}>
            {nosotros.description}
          </Text>
        </Box>
        <Box w={isMobile ? "100%" : "40%"} p={isMobile ? "1em 0" : "1em"}>
          <Box
            position="relative"
            w={isMobile ? "300px" : "436px"}
            h={isMobile ? "200px" : "236px"}
            m="auto"
          >
            <Image
              style={{
                objectFit: "cover",
                objectPosition: "50%",
                borderRadius: "12px",
              }}
              src={`/images/nosotros/${nosotros.picture}`}
              alt={nosotros.title}
              fill
            />
          </Box>
        </Box>
      </Box>
      <Box
        overflow={isMobile ? "scroll" : "unset"}
        bg="white"
        p={isMobile ? "0" : "2em 3em"}
      >
        <Box w={isMobile ? "fit-content" : "auto"}>
          <Box textAlign="center">
            <Text variant="sectionTitle"></Text>
          </Box>
          <Flex justifyContent="center">
            {servicios.map((el) => (
              <SingleElement key={el.id} el={el} isMobile />
            ))}
          </Flex>
        </Box>
      </Box>
    </section>
  );
};

export default Nosotros;
