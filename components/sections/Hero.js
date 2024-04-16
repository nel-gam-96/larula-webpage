import { Flex, Box } from "@chakra-ui/react";
import useViewport from "../../hooks/useViewport";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import { SmallContactForm } from "../SmallContactForm";
import { useState } from "react";
import { hero } from "../../data/home/hero";

const Hero = () => {
  //
  const [setEmail, setSentEmail] = useState(false);
  const isMobile = useViewport();
  return (
    <section className="section" id="home">
      <Flex
        backgroundImage="/assets/hero-bg.png"
        backgroundSize="cover"
        minHeight={isMobile ? "100vh" : "50vh"}
        justifyContent={isMobile?"flex-start":"space-evenly"}
        alignItems="center"
        flexDirection={isMobile ? "column" : "row"}
        pt={isMobile?"24":""}
      >
        <Box
          position="absolute"
          top={isMobile ? "125px" : "100px"}
          left={isMobile ? "230px" : "60px"}
          zIndex="-1"
        >
          <Image
            src="/assets/m-postits.svg"
            alt="post-its"
            width={120}
            height={120}
          />
        </Box>
        <Box
          display={isMobile ? "flex" : "block"}
          flexDirection={isMobile ? "column" : "row"}
          justifyContent={isMobile ? "space-around" : "auto"}
          w={isMobile ? "100%" : "40%"}
          h={isMobile ? "auto" : "553px"}
          m={isMobile ? "0" : "0 0 0 80px "}
          p={isMobile ? "40px 10px" : "0"}
          position={"relative"}

        >
          <Text variant="kitTitle" mt={isMobile?"":"5em"} fontSize={isMobile?"2xl":"40px"} lineHeight={isMobile?"7":"10"} textTransform={"uppercase"}>
            Entrenamiento{isMobile?<br/>:" "}Corporativo{isMobile?<br/>:" "}Personalizado
          </Text>
          {/* <Text variant="kitParraph">{hero.description}</Text> */}
          <Text variant="kitParraph">Capacita tus equipos y desarrolla entregables accionables para tu organización. Sesiones ágiles, creativas y colaborativas. <br/> Metodología Aprender Haciendo</Text>
          {/* {setEmail ? (
            <Flex alignItems="center" justifyContent="center" h="299px" p="2em">
              <Text fontSize="20px" textAlign="center">
                <b>Gracias!</b> tus datos se han enviado con éxito y pronto nos
                contactaremos contigo.
              </Text>
            </Flex>
          ) : (
            <SmallContactForm setSentEmail={setSentEmail} />
          )} */}
        </Box>
        <Flex flexDirection="column" justifyContent={isMobile?"flex-start":""} alignItems={"center"}>
          <Box
            position="absolute"
            top="12vh"
            right="200px"
            display={isMobile ? "none" : "block"}
          >
            <Image
              src="/assets/skin-dot.svg"
              alt="dot"
              width={12}
              height={12}
            />
          </Box>
          <Box
            position="absolute"
            top="10vh"
            right="320px"
            display={isMobile ? "none" : "block"}
          >
            <Image
              src="/assets/yellow-postit.svg"
              alt="dot"
              width={42}
              height={42}
            />
          </Box>
          <Box
            position="absolute"
            top="11vh"
            right="440"
            display={isMobile ? "none" : "block"}
          >
            <Image
              src="/assets/pink-dot.svg"
              alt="dot"
              width={12}
              height={12}
            />
          </Box>
          <Box
            position="absolute"
            top="14vh"
            right="570"
            display={isMobile ? "none" : "block"}
          >
            <Image
              src="/assets/blue-dot.svg"
              alt="dot"
              width={12}
              height={12}
            />
          </Box>
          <Box display={isMobile ? "block" : "block"} mt={isMobile?"":"6.5em"} px={isMobile?"4":""}>
            {/* <Image
              style={{ borderRadius: "16px" }}
              src={`/images/hero/${hero.picture}`}
              alt={hero.title}
              width={436}
              height={290}
            /> */}
            <video width={530} height={350} style={{ borderRadius: "16px" }} src="/videos/rula_clip.mp4" autoPlay loop muted/>    
          </Box>
        </Flex>
      </Flex>
    </section>
  );
};

export default Hero;
