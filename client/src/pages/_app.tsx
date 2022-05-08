import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { mantineTheme } from "@/styles/theme";
import "../styles/global.css";
// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pizzaz</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider {...mantineTheme}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
