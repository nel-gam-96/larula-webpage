import { Box } from "@chakra-ui/react";
import Text from "../ui/Text";
import { seccionMentoria, mentorias } from "../../data/home/mentorias";
import { workshops, workshopsIntro } from "../../data/workshops";
import useViewport from "../../hooks/useViewport";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import DividerText from "../ui/DividerText";

const Workshops = () => {
  const isMobile = useViewport();
  const talleres = workshops.slice(0, 5).sort((a, b) => a.order - b.order);
  const router = useRouter();

  function navigateToWorkshop(url) {
    router.push(`/workshops/${url}`);
  }

  return (
    <section className="section" id="workshops">
      <DividerText
        title={workshopsIntro.title}
        description={workshopsIntro.description}
      />
      <Box className="workshops-container">
        <Box className="workshops-wrapper">
          {talleres.map((el) => (
            <Box
              key={el.id}
              onClick={() => navigateToWorkshop(el.slug)}
              cursor="pointer"
              className="tile"
              backgroundImage={`url(/images/workshops/workshops-home/${el.mainPicture})`}
              backgroundPosition={"center"}
              backgroundSize="cover"
            >
              <Box className={`workshop workshop${el.id}`} key={el.id}>
                <Box className="workshop-title-wrapper">
                  <span className="workshop-small-title">{el.titleSmall}</span>
                  <br />
                  <span className="workshop-big-title">{el.titleBig}</span>
                </Box>
                <Box maxWidth="80%" fontSize="0.8em">
                  <Text fontSize={isMobile ? "0.8rem" : "1.2rem"}>
                    {el.description}
                  </Text>
                </Box>
                <Box>
                  <Link href={`/workshops/${el.slug}`} legacyBehavior passHref>
                    <a className="workshop-button">Conoce el temario</a>
                  </Link>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box>
        {/* <DividerText
          title={seccionMentoria.title}
          description={seccionMentoria.description}
        /> */}
        <Box>
          {mentorias.map((mentoria) => (
            <Box
              key={mentoria.id}
              background="white"
              boxShadow="8.14449px 10.4715px 58.1749px rgba(0, 0, 0, 0.1)"
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              alignItems={isMobile ? "flex-start" : "center"}
              h="auto"
              p="1em 2em"
              borderRadius="12px"
              mt="24px"
            >
              <Box
                w={isMobile ? "100%" : "50%"}
                textAlign={isMobile ? "center" : "left"}
              >
                <Text
                  margin={isMobile ? "auto" : "10px 0"}
                  fontWeight="600"
                  fontSize="32px"
                  maxWidth={isMobile ? "100%" : "65%"}
                  fontFamily="Open Sans"
                  wordwrap="break-word"
                  lineHeight="1.2em"
                >
                  {mentoria.title}
                </Text>
                <Text fontSize={isMobile ? "16px" : "24px"} maxWidth="95%">
                  {mentoria.description}
                </Text>
                <Box mt="20px">
                  <Link
                    className="btn"
                    href={mentoria.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contáctanos
                  </Link>
                </Box>
              </Box>
              <Box w={isMobile ? "100%" : "50%"} mt="2em">
                <Box
                  position="relative"
                  w={isMobile ? "36vh" : "45vw"}
                  h={isMobile ? "30vh" : "25vw"}
                  m="auto"
                >
                  <Image
                    style={{
                      objectFit: "cover",
                      objectPosition: "50%",
                      borderRadius: "12px",
                    }}
                    src={`/images/workshops/mentorias/${mentoria.picture}`}
                    alt={seccionMentoria.title}
                    fill
                  />
                </Box>
                <Box
                  position="relative"
                  w={isMobile ? "36vh" : "45vw"}
                  m="auto"
                >
                  {mentoria.linkedin !== "#" ? (
                    <Link
                      href={mentoria.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Text
                        mt="5px"
                        fontSize="10px"
                        textAlign="right"
                        lineHeight="0.9em"
                        fontWeight="600"
                      >
                        {mentoria.teacher}
                        <br />
                        {mentoria.role}
                      </Text>
                    </Link>
                  ) : null}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Workshops;
