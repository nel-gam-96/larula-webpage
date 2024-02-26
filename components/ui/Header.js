import { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import Link from "next/link";
import useViewport from "../../hooks/useViewport";
import MenuMobile from "../Mobile/MenuMobile";
import { menuElements } from "../../data/content";
import Image from "next/image";
import { Text } from "@chakra-ui/react";

export default function Header() {
  const isMobile = useViewport();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    loadWindow({ setIsScrolled });
  }, [isScrolled]);

  const theme = useTheme();
  return (
    <header>
      <Flex
        flex="1"
        className={isScrolled ? "inverted header" : "header"}
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Link href="/">
            <Image
              src={!isScrolled ? "/assets/logo-pink.png" : "/assets/logo.png"}
              alt="logo"
              width="120"
              height="120"
            />
          </Link>
        </Flex>
        <Flex as="nav" w="" alignItems="center">
          {menuElements.map((el) => (
            <Link key={el.id} href={el.href}>
              <Box m="0 24px" display="flex" w="100%">
                <Text
                  fontFamily="Poppins"
                  color={isScrolled ? "white" : "black"}
                  fontWeight="600"
                  fontSize="12px"
                  lineHeight="18px"
                  _hover={{
                    color: isScrolled
                      ? theme.colors.main.greenThree
                      : theme.colors.main.red,
                  }}
                >
                  {el.name}
                </Text>
              </Box>
            </Link>
          ))}
        </Flex>
      </Flex>
    </header>
  );
}

export function loadWindow({ setIsScrolled }) {
  let scrollTrigger = 60;

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      if (
        window.scrollY >= scrollTrigger ||
        window.pageYOffset >= scrollTrigger
      ) {
        setIsScrolled(true);
        return;
      } else {
        setIsScrolled(false);
        return;
      }
    };
  }
}
