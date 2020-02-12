import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CREATE_COMMENT } from "../redux/actions/actionTypes";
// import styled from "styled-components";

const CommentsForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: CREATE_COMMENT, comment: text });
        }}
      >
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input type="submit" value="Commenter" />
      </form>
    </div>
  );
};

export default CommentsForm;
