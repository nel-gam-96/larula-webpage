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
        minHeight={isMobile ? "100vh" : "90vh"}
        justifyContent="space-evenly"
        alignItems="center"
        flexDirection={isMobile ? "column" : "row"}
      >
        <Box
          position="absolute"
          top={isMobile ? "70px" : "100px"}
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
          w={isMobile ? "100%" : "370px"}
          h={isMobile ? "auto" : "553px"}
          m={isMobile ? "0" : "0 0 0 80px "}
          p={isMobile ? "40px 10px" : "0"}
        >
          <Text variant="kitTitle" mt="6.5em" fontSize="2xl">
            ENTRENAMIENTO Y <br/> CONSULTORÍAS<br/> APRENDER HACIENDO
          </Text>
          <Text variant="kitParraph">{hero.description}</Text>
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
        <Flex flexDirection="column">
          <Box
            position="absolute"
            top="16vh"
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
            top="14vh"
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
            top="15vh"
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
            top="18vh"
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
          <Box display={isMobile ? "block" : "block"} mt="4em">
            {/* <Image
              style={{ borderRadius: "16px" }}
              src={`/images/hero/${hero.picture}`}
              alt={hero.title}
              width={436}
              height={290}
            /> */}
            <video width={436} height={290} style={{ borderRadius: "16px" }} src="/videos/rula_clip.mp4" autoPlay loop muted/>

            
          </Box>
          <Box mt={isMobile ? "-6em" : "0"} ml={isMobile ? "0" : "0"}>
            <Flex
              // m="10px"
              h="50px"
              alignItems="center"
              mt={isMobile ? "2.5em" : "1.5em"}
              // ml={isMobile ? "-5.5em" : "5em"}
              w="100%"
              mx="auto"
              justifyContent=""
            >
              {/* <Box top="10px" right="10px" position="relative">
                <Image
                  position="absolute"
                  src="/assets/pink-postit.svg"
                  alt="post-its"
                  width={42}
                  height={42}
                />
              </Box> */}
              {/* <Text
                fontFamily="Poppins"
                mr="20px"
                textAlign="center"
                fontWeight="900"
              >
                Con el apoyo de:
              </Text> */}
              {/* <Box position="relative" w="95px" h="48px" display="block">
                <Image
                  src="/images/logos/post-it_logo_desktop.svg"
                  alt="post-it"
                  fill
                />
              </Box>
              <Box position="relative" w="150px" h="48px" display="block">
                <Image src="/images/logos/edulink.png" alt="post-it" fill />
              </Box> */}
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </section>
  );
};

export default Hero;
