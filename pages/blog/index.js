import Head from "next/head";
import { Flex, Box, Grid, GridItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import theme from "../../components/ui/theme";
import useViewport from "../../hooks/useViewport";
import { index, blogs } from "../../data/blog/content";
import Image from "next/image";
import Link from "next/link";
import KitBox from "../../components/ui/KitBox";

const BlogPage = () => {
  const isMobile = useViewport();
  return (
    <>
      <Head>
        <title>La Rula Taller | {index.title}</title>
      </Head>

      <Flex
        backgroundImage="/assets/hero-bg.png"
        backgroundSize="contain"
        backgroundRepeat="repeat-y"
        minH="100vh"
        justifyContent=""
        alignItems="center"
        flexDirection="column"
        pt="76px"
        pb="76px"
      >
        <Box textAlign="center">
          <Text as="h1" variant="sectionTitle" color={theme.colors.main.red}>
            {index.title}
          </Text>
          <Box
            w={isMobile ? "95%" : "70%"}
            bg=""
            textAlign="center"
            m="1em auto"
          >
            <Text>{index.introduction}</Text>
          </Box>
        </Box>

        <Flex>
          <Grid
            w="88vw"
            templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(4, 1fr)"}
            gap="1"
            justifyItems="center"
          >
            {blogs.map((el) => (
              <GridItem
                key={el.id}
                // w={isMobile ? "70vw" : "350px"}
                // bg="white"

                // borderRadius="12px"
                // border="1px solid lightgray"
              >
                <Link href={`/blog/${el.slug}`}>
                  <KitBox el={el} isMobile={isMobile} />
                </Link>
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};

export default BlogPage;
