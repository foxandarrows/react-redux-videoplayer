import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CREATE_COMMENT } from "../redux/actions/actionTypes";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 5px 0 0 0;
`;

const Textearea = styled.textarea`
  width: calc(100% - 22px);
  height: 20px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
`;

const Submit = styled.input`
  padding: 0.5em;
  margin: 1em 0 0 0;
  font-size: 1em;
  border: 1px solid white;
  background-color: transparent;
  color: white;
`;

const CommentsForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: CREATE_COMMENT, comment: text });
      }}
    >
      <Textearea onChange={e => setText(e.target.value)} />
      <Submit type="submit" value="Commenter" />
    </Form>
  );
};

export default CommentsForm;
