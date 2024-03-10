import { Box, Text } from "@chakra-ui/react"
import useViewport from './../../hooks/useViewport'
import { ContactForm } from "../ContactForm"

export default function AgendarSesion() {

    const isMobile = useViewport()

    return <>
        <section className="section">
            <Box display={"flex"} flexDir={isMobile?"column":"row"} w={"full"} justifyContent={isMobile?"flex-start":"center"} alignItems={isMobile?"center":"center"} gap={4}>
                <Box maxW={isMobile?"":"50%"}>
                    {/* <Text style={{fontWeight:"600",fontSize:isMobile?"24px":"32px"}}>
                        Sesiones de mentoría
                    </Text> */}
                    <Text style={{fontSize:isMobile?"32px":"55px"}}>
                        AGENDA TU SESIÓN
                    </Text>
                    <Text style={{fontSize:"16px"}} textAlign={"justify"} maxW={"80%"}>
                    Vive la experiencia de capacitación corporativa Aprender Haciendo. 
                    Déjanos tus datos y nos pondremos en contacto contigo en el menor tiempo posible.
                    </Text>
                </Box>
                <Box>
                    <ContactForm/>
                </Box>
            </Box>
        </section>
    </>
}