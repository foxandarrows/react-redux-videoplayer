import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100px;
  min-width: 100%;
`;

const Comment = styled.div`
  color: white;
  padding: 10px 0 10px 10px;
  border-bottom: 2px solid white;
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
