import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  background-color: white;
  width: calc(100vh - 20px);
  heigh: 100px;
`;

const CommentsResult = ({ comments }) => {
  return (
    <Wrap>
      {comments.map((comment, index) => {
        return <div key={index}>{comment}</div>;
      })}
    </Wrap>
  );
};

export default CommentsResult;
