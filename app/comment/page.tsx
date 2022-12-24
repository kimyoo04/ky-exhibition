import {Column, Footer, Header, Main, Root} from "@templates";
import type {NextPage} from "next";
import Head from "next/head";

const comment: NextPage = () => {
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
      <h1>comment</h1>
    </div>
  );
};

export default comment;
