import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CREATE_COMMENT } from "../redux/actions/actionTypes";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: calc(100% - 36px);
  height: 20px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

const CommentsForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: CREATE_COMMENT, comment: text });
        }}
      >
        <Input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input type="submit" value="Commenter" />
      </Form>
    </div>
  );
};

export default CommentsForm;
