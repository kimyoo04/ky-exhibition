import "public/style.css";
import {useState} from "react";
import type {AppProps} from "next/app";

import {ThemeProvider} from "@emotion/react";
import {darkTheme, lightTheme} from "@constants/styles/theme";

import {store} from "@app/store";
import {Provider} from "react-redux";

import {QueryClient, QueryClientProvider} from "react-query";

function MyApp({Component, pageProps}: AppProps) {
  const [isDark, setIsDark] = useState(true);
  const client = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
