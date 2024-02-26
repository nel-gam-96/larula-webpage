import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Box, Flex } from "@chakra-ui/react";
import Text from "../ui/Text";
import Link from "next/link";
import { loadWindow } from "../ui/Header";
import { menuElements } from "../../data/content";
import { useRouter } from "next/router";
import Image from "next/image";

const MenuMobile = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    loadWindow({ setIsScrolled });
  }, [isScrolled]);

  function closeMenu() {
    setIsMenuOpen(false);
    document.querySelector("body").classList.remove("block-scroll");
  }

  function openMenu() {
    setIsMenuOpen(true);
    document.querySelector("body").classList.add("block-scroll");
  }

  function navigateToSection(slug) {
    router.push(slug);
    closeMenu();
  }
  return (
    <header>
      <Flex
        className="inverted header"
        justifyContent="space-between"
        h="60px"
        alignItems="center"
        px="20px"
      >
        <Box>
          <Image src="/assets/logo.png" alt="logo" width="80" height="80" />
        </Box>
        <Box>
          {!isMenuOpen ? (
            <Box fontSize="26px" onClick={openMenu} color="white">
              <FaBars />
            </Box>
          ) : (
            <Box fontSize="26px" onClick={closeMenu} color="white">
              <FaTimes />
            </Box>
          )}
        </Box>

        <Flex
          className="menu-mobile-wrapper"
          bg="white"
          zIndex="999"
          position="fixed"
          w={isMenuOpen ? "100vw" : "0px"}
          h="100vh"
          top="60px"
          left="0"
          flexDirection="center"
          justifyContent="flex-end"
        >
          {isMenuOpen ? (
            <Flex
              w="100%"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {menuElements.map((el) => (
                <Box key={el.id} m="6px">
                  <Text
                    fontWeight="600"
                    fontSize="25px"
                    onClick={() => navigateToSection(el.href)}
                  >
                    {el.name}
                  </Text>
                </Box>
              ))}
            </Flex>
          ) : null}
        </Flex>
      </Flex>
    </header>
  );
};

export default MenuMobile;
