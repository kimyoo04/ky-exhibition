import {Column, Footer, Header, Main} from "@templates";
import type {NextPage} from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Header>
        <Column>Header</Column>
      </Header>

      <Column>
        <h1 className="headLine__1 to-blue-400">h1 is the best</h1>
        <h2>h2 is the best</h2>
        <h3>h3 is the best</h3>
        <h4>h4 is the best</h4>
        <h5>h5 is the best</h5>
        <h6>h6 is the best</h6>
        <span className="text-blue-700 underline text-9xl">Hello world!</span>
        <span className="title__1">title__1 is the best</span>
        <span className="title__2">title__2 is the best</span>
        <span className="title__3">title__3 is the best</span>
        <span className="title__4">title__4 is the best</span>
        <span className="body__1">body__1 is the best</span>
        <span className="body__2">body__2 is the best</span>
        <span className="body__3 semi-bold">body__3 is the best</span>
        <span className="body__4 bold">body__4 is the best</span>
        <button>asdsad</button>
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
