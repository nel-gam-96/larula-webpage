import { Box, Text } from "@chakra-ui/react"
import useViewport from './../../hooks/useViewport'
import { ContactForm } from "../ContactForm"

export default function AgendarSesion() {

    const isMobile = useViewport()

    return <>
        <section className="section">
            <Box display={"flex"} flexDir={isMobile?"column":"row"} w={"full"} justifyContent={isMobile?"flex-start":"center"} alignItems={isMobile?"center":"flex-start"} gap={4}>
                <Box maxW={isMobile?"":"50%"}>
                    <Text style={{fontWeight:"600",fontSize:isMobile?"24px":"32px"}}>
                        Sesiones de mentoría
                    </Text>
                    <Text style={{fontSize:isMobile?"32px":"55px"}}>
                        AGENDA TU SESIÓN
                    </Text>
                    <Text style={{fontSize:"16px"}}>
                    Supera tus desafíos con la ayuda de un mentor. Nuestros mentores te brindarán una perspectiva fresca y un enfoque estratégico para resolver tus osbtáculos  ¡Agenda tu sesión uno a uno hoy mismo y comienza a impulsar tu carrera o negocio.
                    </Text>
                </Box>
                <Box>
                    <ContactForm/>
                </Box>
            </Box>
        </section>
    </>
}