import { Box, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import { blogs } from "../../data/blog/content";

import Image from "next/image";
import { useEffect, useState } from "react";
import theme from "../../components/ui/theme";
import Link from "next/link";
import KitButton from "../../components/ui/KitButton";
import useViewport from "../../hooks/useViewport";

import {
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
import { FooterForm } from "../../components/SmallContactForm";

export default function Blog(props) {
  const isMobile = useViewport();
  const [isLoading, setIsLoading] = useState(true);
  const [document, setDocument] = useState(props.blog);
  const [title, setTitle] = useState(props.title);
  const [setEmail, setSentEmail] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" property="og:title" content={`${title}`} />

        <meta
          name="description"
          property="og:description"
          content={`${document.abstract}`}
        />
        <meta
          property="og:url"
          content={`https://larulataller.com/blog/${props.blog.slug}`}
        />

        <meta
          name="image"
          property="og:image"
          content={`https://larulataller.com${document.picture}`}
        />
      </Head>
      {!isLoading ? (
        <Flex alignItems="center" flexDirection="column" className="blog">
          <Box position="relative" h="50vh" w="100%">
            <Image
              fill
              src={document.picture}
              alt="blog-image"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Flex flexDirection={isMobile ? "column" : "row"} p="2em 0">
            <Box p={isMobile ? "0 2em" : "0 7em"}>
              <Box
                alignSelf="flex-start"
                maxW="100px"
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <Link href="/blog">
                  <KitButton>Regresar</KitButton>
                </Link>
              </Box>

              <Box w="" textAlign="center">
                <Text
                  maxW={isMobile ? "95%" : "60%"}
                  lineHeight="0.95em"
                  variant={isMobile ? "sectionTitleMobile" : "sectionTitle"}
                  color={theme.colors.main.red}
                  fontSize={isMobile ? "26px" : "32px"}
                >
                  {document.title}
                </Text>
              </Box>

              <Box w="" textAlign="justify">
                <Box
                  fontSize="20px"
                  lineHeight="26px"
                  p="0"
                  maxW={isMobile ? "95%" : "88%"}
                  m="auto"
                >
                  <div dangerouslySetInnerHTML={{ __html: document.content }} />
                </Box>

                <Box
                  borderRadius="16px"
                  bg="rgba(242,242,242)"
                  m="8px"
                  p="20px"
                  w="fit-content"
                >
                  <Text
                    lineHeight="18px"
                    fontSize="18px"
                    fontWeight="600"
                    fontStyle="italic"
                  >
                    Compartir esta entrada en redes{" "}
                  </Text>
                  <Flex gap={2} justifyContent="center">
                    <LinkedinShareButton
                      url={`https://larulataller.com/blog/${props.blog.slug}`}
                    >
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>

                    <WhatsappShareButton
                      url={`https://larulataller.com/blog/${props.blog.slug}`}
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </Flex>
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              justifyContent=""
            >
              <Box
                borderRadius={isMobile ? "0" : "16px"}
                bg="#F94880"
                display="flex"
                flexDirection="column"
                alignItems="center"
                p="1em"
                mx={isMobile ? "0" : "20px"}
              >
                <Text
                  fontFamily="Poppins"
                  color="white"
                  textAlign="center"
                  fontWeight="900"
                >
                  Viviana Henao
                </Text>
                <Box position="relative" w="315px" h="319px">
                  <Image src="/assets/vh.jpg" alt="" fill />
                </Box>
                <Text
                  mt="12px"
                  w="85%"
                  fontFamily="Poppins"
                  color="white"
                  lineHeight="1.6em"
                  textAlign="justify"
                >
                  El aprendizaje corporativo Aprender Haciendo fortalece las
                  habilitades y competencias específicas de quienes participan
                  mientras construyen entregables útiles para la empresa.
                </Text>

                <Text
                  fontFamily="Poppins"
                  color="white"
                  lineHeight="1.6em"
                  textAlign="center"
                  fontWeight="600"
                >
                  Inscríbete al newsletter
                </Text>

                {setEmail ? (
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    h="299px"
                    p="2em"
                  >
                    <Text fontSize="20px" textAlign="center">
                      <b>Gracias!</b> tus datos se han enviado con éxito y
                      pronto nos contactaremos contigo.
                    </Text>
                  </Flex>
                ) : (
                  <FooterForm setSentEmail={setSentEmail} />
                )}
              </Box>
            </Box>
          </Flex>
        </Flex>
      ) : (
        <Flex w="100%" h="100vh" justifyContent="center" alignItems="center">
          Loading...
        </Flex>
      )}
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const blog = blogs.filter((blog) => blog.slug === slug);
  return {
    props: {
      blog: blog[0],
      title: `La Rula Taller - Blog | ${blog[0].title}`,
    },
  };
}

export async function getStaticPaths() {
  let slugs = [];
  blogs.map((blog) => slugs.push(blog.slug));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
