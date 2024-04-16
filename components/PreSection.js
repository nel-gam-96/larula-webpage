import {Box,Text,Flex} from '@chakra-ui/react'
import useViewport from "./../hooks/useViewport";
import Image from 'next/image';



export default function PreSection() {
  const isMobile = useViewport();

    return <>
       <Box bg="#EEEEEE" py={8} display="flex" justifyContent={"space-evenly"} gap={isMobile?4:0} alignItems={"center"} flexDirection={isMobile?"column":"row"}>
            <Box display={"flex"} position={"relative"} justifyContent={"center"} alignItems={"flex-start"} w={"200px"} gap={"4px"}>
                <Text style={{position:'relative',top:"-10px",left:"0px",fontSize:"60px"}}>+</Text>
                <Text style={{fontSize:"50px",color:"black"}}>20</Text>
                <Text style={{fontSize:"12px",paddingTop:"16px"}}>Empresas asesoradas y sumando</Text>
            </Box>
            <Box display={"flex"} position={"relative"} justifyContent={"center"} alignItems={"flex-start"} w={"200px"} gap={"4px"}>
                <Text style={{position:'relative',top:"-10px",left:"0px",fontSize:"60px"}}>+</Text>
                <Text style={{fontSize:"50px",color:"black"}}>3K</Text>
                <Text style={{fontSize:"12px",paddingTop:"16px"}}>Persona capacitadas</Text>
            </Box>
            <Box display={"flex"} position={"relative"} justifyContent={"center"} alignItems={"flex-start"} w={"200px"} gap={"4px"}>
                <Text style={{position:'relative',top:"-10px",left:"0px",fontSize:"60px"}}>+</Text>
                <Text style={{fontSize:"50px",color:"black"}}>8</Text>
                <Text style={{fontSize:"12px",paddingTop:"16px"}}>Años creciendo en el ecosistema de emprendimiento </Text>
            </Box>
            <Flex
              // m="10px"
              // h="50px"
              alignItems="center"
              // ml={isMobile ? "-5.5em" : "5em"}
              //mx="auto"
              justifyContent="center"
              gap={4}
              flexDirection={isMobile?"column":"row"}
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
              <Text
                ml="20px"
                textAlign="center"
                fontWeight="400"
              >
                Con el apoyo de
              </Text>
              <Box position="relative" w={isMobile?"120px":"95px"} h={isMobile?"73px":"48px"} display="block">
                <Image
                  src="/images/logos/post-it_logo_desktop.svg"
                  alt="post-it"
                  fill
                />
              </Box>
              <Box position="relative" w={isMobile?"100px":"70px"} h={isMobile?"100px":"70px"} display="block">
                <Image src="/images/logos/acredita.png" alt="edulink" fill />
              </Box>
              
              <Box position="relative" w={isMobile?"150px":"150px"} h={isMobile?"46px":"46px"} display="block" top={"4px"} left={"-7px"}>
                <Image src="/images/logos/edulink.png" alt="edulink" fill />
              </Box>
              
            </Flex>
       </Box>
    </>
}