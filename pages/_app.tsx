import "styles/tailwind.css";
import "styles/reset.css";

import {useState} from "react";
import type {AppProps} from "next/app";
import Head from "next/head";

import {ThemeProvider} from "@emotion/react";
import {darkTheme, lightTheme} from "@constants/styles/theme";

import {store} from "@app/store";
import {Provider} from "react-redux";

import {QueryClient, QueryClientProvider} from "react-query";

function MyApp({Component, pageProps}: AppProps) {
  const [isDark, setIsDark] = useState(true);
  const client = new QueryClient();

  return (
    <>
      <Head>
        <title>ky-exhibition</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="architecture exhibition made by Kim Yoo"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default MyApp;
