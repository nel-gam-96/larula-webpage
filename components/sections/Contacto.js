import { Box, Flex } from "@chakra-ui/react";
import Text from "../ui/Text";
import useViewport from "../../hooks/useViewport";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { ContactForm } from "../ContactForm";

const Contacto = () => {
  const isMobile = useViewport();
  const [sentEmail, setSentEmail] = useState(false);
  return (
    <section className="section" id="contacto">
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="space-evenly"
      >
        <Box
          w={isMobile ? "100%" : "45%"}
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Text textAlign="center" variant="sectionTitle">
            Cotiza y agenda tu sesión
          </Text>
          <Box h="490px" fontFamily="League Spartan">
            {!sentEmail ? (
              <ContactForm
                setSentEmail={setSentEmail}
                origin="Contacto desde Home"
              />
            ) : (
              <Flex w="80%" m="20px auto" h="85%" alignItems="center">
                <Text fontSize="30px" textAlign="center" lineHeight="1em">
                  ¡Gracias! Tu mensaje ha sido enviado con éxito. Pronto nos
                  contactaremos contigo.
                </Text>
              </Flex>
            )}
          </Box>
        </Box>
        <Flex w={isMobile ? "100%" : "45%"} justifyContent="center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.6540373771318!2d-77.0270898!3d-12.1358071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7e407a24e71%3A0x98ebefe4172d68!2sCa.%20las%20Acacias%20168%2C%20Lima%2015074%2C%20Per%C3%BA!5e0!3m2!1ses-419!2sco!4v1670339916687!5m2!1ses-419!2sco"
            width={isMobile ? "100%" : "550"}
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Flex>
      </Box>
    </section>
  );
};

export default Contacto;
