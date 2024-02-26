import Hero from "../components/sections/Hero";
import Clientes from "../components/sections/Clientes";
import Promo from "../components/sections/Promo";
import Nosotros from "../components/sections/Nosotros";
import Workshops from "../components/sections/Workshops";
import Head from "next/head";
import { home } from "../data/seo";
import PreSection from "../components/PreSection";
import AgendarSesion from "../components/sections/AgendarSesion";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`La Rula Taller | ${home.title}`}</title>
        <meta property={`og:title`} content={`${home.title}`} />
        <meta name="description" content={`${home.content}`} />
        <meta property={`og:description`} content={`${home.content}`} />
        <meta property={`og:url`} content={`https://larulataller.com/`} />
        <meta
          property={`og:image`}
          content={`https://larulataller.com/images/nosotros/workshops.jpg`}
        />
      </Head>
      <Hero />
      <PreSection/>
      <Nosotros />
      <Workshops />
      <Clientes />
      <AgendarSesion/>
    </>
  );
}
