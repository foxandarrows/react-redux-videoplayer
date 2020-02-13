import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT } from "../redux/actions/actionTypes";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 5px 0 0;
`;

const ThumbsUp = styled.span`
  color: white;
  font-size: 18px;
  padding: 2px 0 5px 0;
`;

const CounterValue = styled.span`
  margin: 0 5px 0 0;
  width: 15px;
  color: white;
`;

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);

  return (
    <Wrap>
      <Button onClick={() => dispatch({ type: INCREMENT })}>
        <ThumbsUp className="material-icons">thumb_up</ThumbsUp>
      </Button>
      <CounterValue>{counter}</CounterValue>
      {/* <button onClick={() => dispatch({ type: DECREMENT })}>Unvote</button> */}
    </Wrap>
  );
};

export default Counter;
