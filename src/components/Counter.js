import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT } from "../redux/actions/actionTypes";
import styled from "styled-components";
import { RowAlignRight } from "../css/mainStyles";

// padding: 10px;

const Button = styled.button`
  background-color: transparent;
  border: none;
  margin: 5px 5px 0 0;
`;

const ThumbsUp = styled.span`
  color: grey;
  font-size: 18px;
`;

const CounterValue = styled.span`
  margin: 5px 10px 0 0;
  width: 15px;
`;

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  return (
    <RowAlignRight>
      <Button onClick={() => dispatch({ type: INCREMENT })}>
        <ThumbsUp className="material-icons">thumb_up</ThumbsUp>
      </Button>
      <CounterValue>{counter}</CounterValue>
      {/* <button onClick={() => dispatch({ type: DECREMENT })}>Unvote</button> */}
    </RowAlignRight>
  );
};

export default Counter;