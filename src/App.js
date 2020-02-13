import React from "react";
import Header from "./components/Header";
import VideoCommentContainer from "./containers/VideoCommentContainer";
import Footer from "./components/Footer";
import styled from "styled-components";
import { Column } from "../src/css/mainStyles";

const Wrap = styled.div`
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const App = () => {
  return (
    <Wrap>
      <Column />
      <Column>
        <Header />
        <VideoCommentContainer url="https://www.youtube.com/watch?v=WFuiKwtzw8I" />
        <Footer />
      </Column>
      <Column />
    </Wrap>
  );
};

export default App;
