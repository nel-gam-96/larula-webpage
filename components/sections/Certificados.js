import { Box, Text } from "@chakra-ui/react"
import useViewport from "../../hooks/useViewport"
import Image from "next/image"

export default function Certificados() {

    const isMobile = useViewport()

    return <>
        <section className="section">
            <Box maxWidth={isMobile?"full":"1400px"} mx={isMobile?"":"auto"} display={"flex"} flexDirection={"column-reverse"}>
                <Box display={"flex"} gap={isMobile?4:"0"} flexDirection={isMobile?"column":"row"} justifyContent={isMobile?"flex-start":"center"} alignItems={isMobile?"center":"center"} pt={isMobile?"":"48px"}>
                    <Box w={isMobile?"full":"55%"} py={isMobile?4:0} position={"relative"} left={isMobile?"":"200px"}>
                        <Text variant={isMobile?"sectionTitleMobile":"sectionTitleMobile"} textAlign={isMobile?"center":""} >
                            Certificados con insignias digitales
                        </Text>
                        <Text w={isMobile?"full":"70%"} textAlign={isMobile?"center":"justify"}>
                            Las insignias  son el reconocimientos digital de los logros o habilidades específicas aprendidades por los participantes en nuestros workshops, complementando las estrategias de motivación y empleabilidad para los equipos de trabajo en entornos corporativos. Protegidas y verificads con tecnología Blockchain.
                        </Text>
                    </Box>
                    <Box w={isMobile?"full":"25%"} display={"flex"} justifyContent={isMobile?"center":"center"} py={isMobile?4:0} position={"relative"} left={isMobile?"":"-0px"}>
                        <Image src={"/images/certificados/phone.jpg"} width={250} height={550} alt="phone"/>
                    </Box>
                </Box>
                <Box position={"relative"} display={"flex"} flexDirection={isMobile?"column":"row-reverse"} justifyContent={isMobile?"flex-start":"center"} alignItems={"center"} maxWidth={isMobile?"":"1200px"} mx={isMobile?"":"auto"}>
                    <Box position={"relative"} top={0} left={isMobile?"":"-50px"} w={isMobile?"full":"50%"} display={isMobile?"block":"flex"} flexDirection={"column"} alignItems={"flex-start"} mb={isMobile?4:""}>
                        <Text variant={isMobile?"sectionTitleMobile":"sectionTitleMobile"} margin={0} mb={isMobile?"10px":2} marginRight={isMobile?"":"100px"} textAlign={isMobile?"center":""}>
                        ¿Cómo son los entrenamientos <br/> Aprender haciendo?
                        </Text>
                        <Text w={isMobile?"90%":"70%"} mx={isMobile?"auto":""} textAlign={isMobile?"center":"justify"} mt={isMobile?6:""}>
                        Son talleres ágiles y dinámicos diseñados acorde al área de trabajo que quieres potenciar o el problema que quieres resolver. Aprender Haciendo es menos teoría más acción, es aprender y avanzar en equipo.
                        </Text>
                    </Box>
                    <Box w={isMobile?"full":"50%"} display={"flex"} justifyContent={isMobile?"center":"center"} py={4}>
                        <Image src={"/images/certificados/people.jpg"} width={436} height={236} alt="phone"/>
                    </Box>
                </Box>
            </Box>
        </section>
    </>
}