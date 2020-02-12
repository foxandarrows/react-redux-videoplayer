import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT } from "../redux/actions/actionTypes";
// import styled from "styled-components";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>Vote</button>
      {/* <button onClick={() => dispatch({ type: DECREMENT })}>Unvote</button> */}
    </div>
  );
};

export default Counter;
