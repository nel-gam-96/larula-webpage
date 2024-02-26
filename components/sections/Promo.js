import { Box, Flex } from "@chakra-ui/react";
import Text from "../ui/Text";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import theme from "../ui/theme";
import Button from "../ui/Text";

const Promo = () => {
  return (
    <Flex
      color={theme.colors.main.white}
      bg={theme.colors.main.black}
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      p="20px 0"
    >
      <Text
        fontSize="30px"
        textAlign="center"
        fontWeight="600"
        maxW="70%"
        lineHeight="1.2em"
        margin="auto"
        mb="20px"
        color="white"
      >
        La Rula, Aprender Haciendo
        <br />
        Inscríbete al newsletter y recibe nuestros artículos y novedades
      </Text>
      <Flex>
        <input type="email" placeholder="Email" />
        <Button
          variant="smallButton"
          bg={theme.colors.main.red}
          m="10px"
          p="5px 12px"
          borderRadius="12px"
          _hover={{ cursor: "pointer" }}
        >
          Suscribirse
        </Button>
      </Flex>
      <Text
        fontSize="30px"
        textAlign="center"
        fontWeight="600"
        maxW="70%"
        lineHeight="1.2em"
        margin="auto"
        mb="20px"
        color="white"
      >
        Síguenos, somos capacitación y consultoría
      </Text>
      <Flex fontSize="40px" justifyContent="space-evenly" w="300px">
        {/* <Link
          className="social-link"
          href="https://www.facebook.com/larulataller/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </Link> */}
        <Link
          className="social-link"
          href="https://www.linkedin.com/company/larulaworkshops/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
        <Link
          className="social-link"
          href="https://www.youtube.com/@LaRulaTaller"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </Link>
        <Link
          className="social-link"
          href="https://www.instagram.com/larulataller/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Promo;
