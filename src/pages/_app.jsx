import Head from 'next/head';
import React from 'react';
import '../styles/styles.scss';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>YellowBoard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossorigin="anonymous"
        />
      </Head>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </>
  );
}
export default MyApp;
