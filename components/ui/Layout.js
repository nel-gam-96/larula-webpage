import Footer, { Footer2 } from "./Footer";
import useViewport from "../../hooks/useViewport";
import Header from "./Header";
import MenuMobile from "../Mobile/MenuMobile";
import WhatsappIcon from "./WhatsappIcon";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Layout({ children }) {
  const isMobile = useViewport();
  return (
    <Box>
      {!isMobile ? <Header /> : <MenuMobile />}
      <Box as="main" backgroundSize="auto">
        {children}
      </Box>
      <WhatsappIcon isMobile={isMobile} />
      {/* <Footer /> */}
      <Footer2 />
    </Box>
  );
}
