import {Column, Footer, Header, Main, Root} from "@templates";
import type {NextPage} from "next";
import Head from "next/head";

const info: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ky-exhibition</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="architecture exhibition made by Kim Yoo"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <h1>info</h1>
    </div>
  );
};

export default info;
