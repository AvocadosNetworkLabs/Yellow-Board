import Head from 'next/head';
import React from 'react';
import '../styles/styles.scss';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>YellowBoard</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link itemprop="image" href="/assets/icons/top.png" />
        <meta
          name="description"
          content="Bienvenido a yellowboad academy, donde podrás poner a prueba tus habilidades de primaria o tus hijos podrán reforzar sus conocimientos de primaria para la escuela."
        />
        <meta
          name="keywords"
          content="yellowboard, board, yellow, webapp, react"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="/assets/icons/top.png"
          sizes="96x96"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/icons/top.png"
        />
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
