import { Box, Flex } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import Text from "./Text";
import Link from "next/link";
import Promo from "../sections/Promo";
import Image from "next/image";
import { socialmedias } from "../../data/content";
import { FooterForm } from "../SmallContactForm";
import useViewport from "../../hooks/useViewport";
import { useEffect, useState } from "react";

// export default function Footer() {
//   const theme = useTheme();
//   return (
//     <>
//       <Promo />
//       <Box color={theme.colors.main.white} bg={theme.colors.main.black}>
//         <Box textAlign="center" p="16px" h="">
//           <Text color="white" fontSize="13px" fontWeight="600">
//             Oficina Principal en Lima, Perú: Miraflores Calle Las Acacias 168
//             Oficina en Bogotá, Colombia: Chapinero Calle 58 # 19 - 56 RUC:
//             20609749297.
//           </Text>
//           <Text color="white" fontSize="13px" fontWeight="600">
//             Copyright © 2021 La Rula Taller - Todos los derechos reservados.
//           </Text>
//         </Box>
//         <Box textAlign="center" p="10px 0 10px 0" h="">
//           <Link
//             href="/documents/politica_de_privacidad.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Text
//               color="white"
//               fontSize="12px"
//               fontWeight="600"
//               _hover={{ color: theme.colors.main.red }}
//             >
//               Consulta aquí nuestra política de privacidad
//             </Text>
//           </Link>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export const Footer3 = () => {
//   return (
//     <Flex
//       p="100px"
//       backgroundImage="/assets/footerbg.jpg"
//       backgroundPosition="center"
//       backgroundRepeat="no-repeat"
//       backgroundSize="cover"
//     >
//       <Flex w="43.75vw" justifyContent="space-evenly" alignItems="center">
//         <Box position="relative" w="14.688vw" h="15.556vh">
//           <Image
//             src="/assets/logo-footer.png"
//             alt="La Rula Aprender Haciendo"
//             fill
//           />
//         </Box>

//         <Flex
//           flexDirection="column"
//           justifyContent="center"
//           alignItems="center"
//         >
//           <Box w="12.68vw" textAlign="center">
//             <Text
//               color="white"
//               fontSize="1vw"
//               fontFamily="Poppins"
//               fontWeight="600"
//             >
//               ¡Siguenos!
//             </Text>
//             <Text
//               color="white"
//               fontSize="1vw"
//               fontFamily="Poppins"
//               fontWeight="300"
//             >
//               somos capacitación y consultoría
//             </Text>
//           </Box>
//           <Flex w="fit-content">
//             {socialmedias?.map((el) => (
//               <SocialMedia key={el.id} socialmedia={el} />
//             ))}
//           </Flex>
//         </Flex>
//       </Flex>

//       <Flex w="56.25vw" alignItems="center">
//         <Box textAlign="center" margin="auto">
//           <Text
//             maxW="700px"
//             fontSize="16px"
//             color="white"
//             fontFamily="Poppins"
//             fontWeight="300"
//           >
//             Oficina Principal en Lima, Perú: Miraflores Calle Las Acacias 168
//             Oficina en Bogotá, Colombia: Chapinero Calle 58 #19 46 RUC:
//             20609749297
//           </Text>

//           <Text
//             maxW="700px"
//             mt="10px"
//             color="white"
//             fontSize="16px"
//             fontFamily="Poppins"
//             fontWeight="300"
//           >
//             Copyright © 2021 La Rula Taller - Todos los derechos reservados.
//             Consulta nuestra{" "}
//             <Link
//               href="/documents/politica_de_privacidad.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <span style={{ fontWeight: "600" }}>política de privacidad.</span>
//             </Link>
//           </Text>
//         </Box>
//       </Flex>
//     </Flex>
//   );
// };

export const Footer2 = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const isMobile = useViewport();

  return (
    <>
      {isLoading ? null : (
        <Flex
          w="100%"
          flexDirection={isMobile ? "column" : "row"}
          bg="rgb(51,51,51)"
          minH="20px"
        >
          <Flex
            bg="rgb(51,51,51)"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            flexDirection="column"
            w="100%"
            justifyContent="center"
            backgroundImage="/assets/Pattern_Black.png"
          >
            <Flex
              w="100%"
              justifyContent="center"
              alignItems="center"
              px="5%"
              h="150px"
            >
              <Box position="relative" w="auto" minW="140px">
                <Image
                  width={141}
                  height={84}
                  src="/assets/logo.png"
                  alt="La Rula Conocimiento en Movimiento"
                />
              </Box>

              <Box
                mx="20px"
                w="5px"
                h="100px"
                borderRight="2px solid white"
              ></Box>

              <Flex
                position="relative"
                flexDirection="column"
                justifyContent="center"
                alignItems="end"
                mt="16px"
              >
                <Box
                  w="80%"
                  textAlign="center"
                  p={isMobile ? "0 0 0 0px" : "0"}
                  lineHeight="1.1em"
                  m="auto"
                >
                  <Text
                    color="white"
                    fontSize="18px"
                    fontFamily="Poppins"
                    fontWeight="600"
                  >
                    ¡Siguenos!
                  </Text>
                  <Text
                    color="white"
                    fontSize="18px"
                    fontFamily="Poppins"
                    fontWeight="300"
                  >
                    somos capacitación y consultoría
                  </Text>
                </Box>
                <Flex w="fit-content" m="auto">
                  {socialmedias?.map((el) => (
                    <SocialMedia key={el.id} socialmedia={el} />
                  ))}
                </Flex>
              </Flex>
            </Flex>

            <Flex w="" alignItems="center" bg="">
              <Box textAlign="center" margin="auto" bg="">
                <Box mt="20px" w={isMobile ? "75%" : "100%"} lineHeight="1em">
                  <Text
                    m="auto"
                    maxW="500px"
                    fontSize="16px"
                    color="white"
                    fontFamily="Poppins"
                    fontWeight="300"
                  >
                    Oficina Principal en Lima, Perú: Miraflores Calle Las
                    Acacias Oficina en Bogotá, Colombia: Chapinero
                  </Text>
                </Box>
                <Box
                  mt="20px"
                  w={isMobile ? "75%" : "100%"}
                  mb="5px"
                  lineHeight="1em"
                >
                  <Text
                    mt="10px"
                    color="white"
                    fontSize="16px"
                    fontFamily="Poppins"
                    fontWeight="300"
                    m="auto"
                    maxW="500px"
                  >
                    Copyright © {new Date().getFullYear()} La Rula Taller -
                    Todos los derechos reservados. Consulta nuestra{" "}
                    <Link
                      href="/documents/politica_de_privacidad.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span style={{ fontWeight: "600" }}>
                        política de privacidad.
                      </span>
                    </Link>
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};

const SocialMedia = ({ socialmedia }) => {
  return (
    <Box position="relative" w="40px" h="40px" mr="4px" mt="4px">
      <Link href={socialmedia.href} target="_blank" rel="noopener noreferrer">
        <Image src={socialmedia.image} alt="socialmedia-logo" fill />
      </Link>
    </Box>
  );
};
