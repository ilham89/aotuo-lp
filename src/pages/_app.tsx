// pages/_app.js
import { AotuoUI } from "@/themes";
import { Page } from "@/types/page";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import "nprogress/nprogress.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Lato } from "next/font/google";
import { useRouter } from "next/router";
import nProgress from "nprogress";

type Props = AppProps & {
  Component: Page;
};
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page) => page);

  const [showing, setShowing] = useState(false);

  const router = useRouter();

  React.useEffect(() => {
    const handleRouteStart = () => nProgress.start();
    const handleRouteDone = () => nProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, [router.events]);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  return (
    <React.Fragment>
      <Head>
        <title>AOTUO</title>
        <meta
          name="description"
          content="PT TRANS BORNEO TOURS ADALAH SEBAGAI PERUSAHAAN AGEN TUNGGAL PEMEGANG MEREK UNTUK MOTOR LISTRIK AOTUO DI INDONESIA"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/aotuo.svg" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${lato.style.fontFamily};
        }
      `}</style>

      <ChakraProvider theme={AotuoUI}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </React.Fragment>
  );
}

export default MyApp;
