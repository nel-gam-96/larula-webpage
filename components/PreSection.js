import {Box,Text,Flex} from '@chakra-ui/react'
import useViewport from "./../hooks/useViewport";
import Image from 'next/image';



export default function PreSection() {
  const isMobile = useViewport();

    return <>
       <Box bg="#EEEEEE" py={8} display="flex" justifyContent={"center"} gap={isMobile?4:24} alignItems={"center"} flexDirection={isMobile?"column":"row"}>
            <Box display={"flex"} position={"relative"} justifyContent={"center"} alignItems={"flex-start"} maxW={100} gap={"4px"}>
                <Text style={{position:'absolute',top:"-25px",left:"-40px",fontSize:"50px"}}>+</Text>
                <Text style={{fontSize:"50px",color:"black"}}>20</Text>
                <Text style={{fontSize:"12px",paddingTop:"16px"}}>Empresas asesoradas y sumando</Text>
            </Box>
            <Box display={"flex"} position={"relative"} justifyContent={"center"} alignItems={"flex-start"} maxW={100} gap={"4px"}>
                <Text style={{position:'absolute',top:"-25px",left:"-40px",fontSize:"50px"}}>+</Text>
                <Text style={{fontSize:"50px",color:"black"}}>3K</Text>
                <Text style={{fontSize:"12px",paddingTop:"16px"}}>Persona capacitadas</Text>
            </Box>
            <Box display={"flex"} position={"relative"} justifyContent={"center"} alignItems={"flex-start"} maxW={100} gap={"4px"}>
                <Text style={{position:'absolute',top:"-25px",left:"-40px",fontSize:"50px"}}>+</Text>
                <Text style={{fontSize:"50px",color:"black"}}>8</Text>
                <Text style={{fontSize:"12px",paddingTop:"16px"}}>Años en el ecosistema de emprendimiento </Text>
            </Box>
            <Flex
              // m="10px"
              // h="50px"
              alignItems="center"
              // ml={isMobile ? "-5.5em" : "5em"}
              //mx="auto"
              justifyContent=""
            >
              <Box top="10px" right="10px" position="relative">
                <Image
                  position="absolute"
                  src="/assets/pink-postit.svg"
                  alt="post-its"
                  width={42}
                  height={42}
                />
              </Box>
              <Text
                fontFamily="Poppins"
                mr="20px"
                textAlign="center"
                fontWeight="900"
              >
                Con el apoyo de:
              </Text>
              <Box position="relative" w="95px" h="48px" display="block">
                <Image
                  src="/images/logos/post-it_logo_desktop.svg"
                  alt="post-it"
                  fill
                />
              </Box>
              <Box position="relative" w="150px" h="48px" display="block">
                <Image src="/images/logos/edulink.png" alt="post-it" fill />
              </Box>
            </Flex>
       </Box>
    </>
}