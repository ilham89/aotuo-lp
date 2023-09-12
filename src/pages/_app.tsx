// pages/_app.js
import { AotuoUI } from "@/themes";
import { Page } from "@/types/page";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Head from "next/head";

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page) => page);

  const [showing, setShowing] = useState(false);

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

      <ChakraProvider theme={AotuoUI}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </React.Fragment>
  );
}

export default MyApp;
