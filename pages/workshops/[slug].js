import { Flex, Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import useViewport from "../../hooks/useViewport";
import { workshops } from "../../data/workshops";

import { useState } from "react";
import Modal from "../../components/Modal";
import { ContactForm } from "../../components/ContactForm";

export default function Workshop(props) {
  const isMobile = useViewport();
  const workshop = props.workshop[0];

  const [showModal, setShowModal] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  const { picture, titleBig, titleSmall, objetivo, habilidades, includes } =
    workshop;

  const title = `${titleSmall} ${titleBig}`;

  return (
    <>
      <Head>
        <title>La Rula Taller | Workshop: {title}</title>
      </Head>
      <article className="workshop">
        <Flex pt="76px" flexDirection={isMobile ? "column" : "row"}>
          <Box
            w={isMobile ? "100%" : "40%"}
            backgroundImage={`/images/workshops/${picture}`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            h={isMobile ? "250px" : "auto"}
          />
          <Box w={isMobile ? "100%" : "60%"}>
            <Flex>
              <Box w="50%"></Box>
              <Box
                w={isMobile ? "100%" : "50%"}
                textAlign="center"
                bg="var(--main-red-color)"
                p="1em 0"
              >
                <Text fontSize="24px" color="white" fontWeight="900">
                  {title}
                </Text>
              </Box>
            </Flex>
            <Flex w={isMobile ? "100%" : "80%"}>
              <Box overflow="hidden">
                <Box p="20px">
                  <Box pb="25px" m="5px">
                    <Text fontWeight="900">Objetivo</Text>
                    {objetivo}
                  </Box>

                  <Box pb="25px" m="5px">
                    <Text fontWeight="900">Habilidades a Entrenar:</Text>
                    <ul>
                      {habilidades.map((el, i) => (
                        <li key={i}>{el}</li>
                      ))}
                    </ul>
                  </Box>

                  <Box pb="25px" m="5px">
                    <Text fontWeight="900">El workshop incluye:</Text>
                    <ul>
                      {includes.map((el, i) => (
                        <li key={i}>{el}</li>
                      ))}
                    </ul>
                  </Box>

                  <Box w="100%" textAlign="center">
                    <button onClick={toggleModal} className="btn">
                      Cotizar
                    </button>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>

        {showModal ? (
          <Modal>
            <Box className="content">
              <Box className="close-modal" onClick={toggleModal}>
                <Text fontWeight="900" fontSize="24px">
                  {" "}
                  &times;{" "}
                </Text>
              </Box>
              <Box>
                {!sentEmail ? (
                  <ContactForm setSentEmail={toggleModal} origin={title} />
                ) : null}
              </Box>
            </Box>
          </Modal>
        ) : null}
      </article>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const workshop = workshops.filter((taller) => taller.slug === slug);

  return {
    props: {
      workshop,
    },
  };
}

export async function getStaticPaths() {
  let slugs = [];
  workshops.map((taller) => slugs.push(taller.slug));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
