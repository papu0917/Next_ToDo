import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
//import theme from '../theme'; //ここにグローバルCSSを定義
import '../styles/globals.css'
import Nav from './components/Nav';
import { red } from '@material-ui/core/colors';
import TodoAppBar from './components/TodoAppBar';
import { RecoilRoot } from 'recoil';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6'
        },
        error: {
            main: red.A400
        },
        background: {
            default: '#fff'
        }
    }
});


export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    return (
        <RecoilRoot>
            <React.Fragment>
                <Head>
                    <title>ToDo App</title>
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                </Head>

                <ThemeProvider theme={theme}>

                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    {/* Nav コンポーネント配置 */}
                    <Nav />
                    <Component {...pageProps} />

                </ThemeProvider>

            </React.Fragment>
        </RecoilRoot>
    );
}