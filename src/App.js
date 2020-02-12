import React from "react";
import Header from "./components/Header";
import VideoCommentContainer from "./containers/VideoCommentContainer";
import Footer from "./components/Footer";
import { Column } from "./css/mainStyles";
import styled from "styled-components";

const Background = styled.div`
  background-color: black;
  margin: 0;
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
