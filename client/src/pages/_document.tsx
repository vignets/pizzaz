import NextDocument, { Html, Main, NextScript, Head } from "next/document";
import { createGetInitialProps } from "@mantine/next";

const getInitialProps = createGetInitialProps();

export default class Document extends NextDocument {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body className="h-full bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
