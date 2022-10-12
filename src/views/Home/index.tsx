import {Aside, Footer, Header, Main} from "@templates";
import type {ChildrenType} from "@types";
import React from "react";

type Props = {
  children?: ChildrenType;
};

const Home: React.FC<Props> = ({children}): JSX.Element => {
  const text = "Home View";

  return (
    <>
      <Header>Header Region</Header>
      <Aside>Aside Region</Aside>
      <Main>Main Region</Main>
      <Footer>Footer Region</Footer>
    </>
  );
};

export default Home;
