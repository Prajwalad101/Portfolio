import type { AppProps } from 'next/app';
import '../styles/globals.css';

import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';
import '@fontsource/sen/400.css';
import '@fontsource/sen/700.css';

import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <link rel="icon" type="image/png" href="/assests/avatar.png" /> */}
        <title>Prajwal Adhikari | Front-End Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
