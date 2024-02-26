import Link from "next/link";
import { Flex, Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function WhatsappIcon(props) {
  const [hovered, setHovered] = useState(false);
  const { isMobile } = props;
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer nofollow"
      href="https://api.whatsapp.com/send?phone=51949103772"
    >
      <Flex
        bg="#ECF6EB"
        w={hovered ? "245px" : "80px"}
        h="80px"
        p="8px"
        overflow="hidden"
        borderRadius="16px"
        transition="1.2s"
        display="flex"
        alignItems="center"
        cursor="pointer"
        zIndex="2"
        position="fixed"
        bottom={isMobile ? "50px" : "3vh"}
        right={isMobile ? "10px" : "3vw"}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Box
          w="245px"
          height="45px"
          display="flex"
          justifyContent="space-around"
        >
          <Box w="48px" h="48px" m="0 8px">
            <Image
              src="/assets/wz.png"
              alt="whatsapp icon"
              width={48}
              height={48}
            />
          </Box>
          <Flex alignItems="center" m="0 8px">
            <Text fontSize="24px" as="h4" color="#337C36" lineHeight="36px">
              Contáctanos
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Link>
  );
}
