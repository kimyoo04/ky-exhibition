import {Column, Footer, Header, Main, Root} from "@templates";
import type {NextPage} from "next";
import Head from "next/head";

const Home: NextPage = () => {
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

      <Header>
        <Column>Header</Column>
      </Header>

      <Column>
        <h1>h1 is the best</h1>
        <h2>h2 is the best</h2>
        <h3>h3 is the best</h3>
        <h4>h4 is the best</h4>
        <h5>h5 is the best</h5>
        <h6>h6 is the best</h6>
      </Column>

      <Main>
        <Column>main</Column>
      </Main>

      <Footer>
        <Column>footer</Column>
      </Footer>
    </div>
  );
};

export default Home;
