import { Box, Text } from "@chakra-ui/react"
import useViewport from "../../hooks/useViewport"
import Image from "next/image"

export default function Certificados() {

    const isMobile = useViewport()

    return <>
        <section className="section">
            <Box maxWidth={isMobile?"full":"1400px"} mx={isMobile?"":"auto"}>
                <Box display={"flex"} gap={4} flexDirection={isMobile?"column":"row-reverse"} justifyContent={isMobile?"flex-start":"center"} alignItems={"center"}>
                    <Box w={isMobile?"full":"75%"} >
                        <Text variant={isMobile?"sectionTitleMobile":"sectionTitleMobile"}>
                            Certificados con insignias digitales
                        </Text>
                        <Text w={isMobile?"full":"70%"}>
                            Las insignias  son el reconocimientos digital de los logros o habilidades específicas aprendidades por los participantes en nuestros workshops, complementando las estrategias de motivación y empleabilidad para los equipos de trabajo en entornos corporativos. Protegidas y verificads con tecnología Blockchain.
                        </Text>
                    </Box>
                    <Box w={isMobile?"full":"25%"} display={"flex"} justifyContent={isMobile?"center":"flex-end"} py={4}>
                        <Image src={"/images/certificados/phone.jpg"} width={200} height={500} alt="phone"/>
                    </Box>
                </Box>
                <Box position={"relative"} display={"flex"} flexDirection={isMobile?"column":"row"} justifyContent={isMobile?"flex-start":"center"} alignItems={"center"} maxWidth={isMobile?"":"1200px"} mx={isMobile?"":"auto"}>
                    <Box position={"relative"} top={0} left={isMobile?"":10} w={isMobile?"full":"50%"} display={isMobile?"block":"flex"} flexDirection={"column"} alignItems={"flex-start"}>
                        <Text variant={isMobile?"sectionTitleMobile":"sectionTitleMobile"} margin={0} marginRight={isMobile?"":"100px"}>
                            ¿Qué es un circuito de workshops consultivos?
                        </Text>
                        <Text w={isMobile?"full":"70%"}>
                            Es una experiencia personalizada según la temática deseada en la que a través de la solución de problemas específios se aprendern las habilidaldes necesarias para solucionarlo y amntenerlo. Incluye la generación de entregables accionables.
                        </Text>
                    </Box>
                    <Box w={isMobile?"full":"50%"} display={"flex"} justifyContent={isMobile?"center":"flex-start"} py={4}>
                        <Image src={"/images/certificados/people.jpg"} width={436} height={236} alt="phone"/>
                    </Box>
                </Box>
            </Box>
        </section>
    </>
}