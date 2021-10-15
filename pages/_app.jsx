import Head from 'next/head';
import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store'
import '../styles/styles.scss';

class MyApp extends App{

static async getInitialProps({Component, ctx}){
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx): {};

    return { pageProps: pageProps };
}

    render(){
        const { Component, pageProps} = this.props
        return(
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
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </>
        )
    }
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);