import Head from "next/head";
import Home from "views/Home/Home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Prueba técnica de react/nextjs</title>
        <meta
          name="description"
          content="Prueba técnica de react/nextjs usando tailwindscss, nextjs y react context"
        />
      </Head>
      <Home />
    </>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/shared/${locale}.json`),
        ...require(`../messages/index/${locale}.json`),
      },
    },
  };
}
