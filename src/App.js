import React from "react";
import Header from "./components/Header";
import VideoCommentContainer from "./containers/VideoCommentContainer";
import Footer from "./components/Footer";
import { Column } from "./css/mainStyles";
import styled from "styled-components";

const Background = styled.div`
  margin: 0;
  height: 100vh;
  background-color: black;
`;

const App = () => {
  return (
    <Background>
      <Column>
        <Header />
        <VideoCommentContainer url="https://www.youtube.com/watch?v=WFuiKwtzw8I" />
        <Footer />
      </Column>
    </Background>
  );
};

export default App;
