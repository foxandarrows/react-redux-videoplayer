import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100vh;
  heigh: 100px;
  background-color: white;
`;

const Comment = styled.div`
  border-bottom: 1px solid white;
  background-color: #f0f0f0;
  padding: 10px 0 10px 10px;
`;

const CommentsResult = ({ comments }) => {
  return (
    <Wrap>
      {comments.map((comment, index) => {
        return <Comment key={index}>{comment}</Comment>;
      })}
    </Wrap>
  );
};

export default CommentsResult;
