import React from "react";
// import styled from "styled-components";

const CommentsResult = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return <div key={index}>{comment}</div>;
      })}
    </div>
  );
};

export default CommentsResult;
