import { useMediaQuery } from "@chakra-ui/media-query";
import { useState, useEffect } from "react";

export default function useViewport() {
  const mediaQuery = useMediaQuery("(max-width: 999px)");

  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    setIsMobile(mediaQuery[0]);
  }, [isMobile, mediaQuery]);

  return isMobile;
}
