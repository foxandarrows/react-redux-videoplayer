import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import CommentsForm from "../components/CommentsForm";
import CommentsResult from "../components/CommentsResult";
import Counter from "../components/Counter";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;

  background-color: black;
  margin-bottom: 75px;
  overflow-y: scroll;
`;

const Footer = () => {
  const comments = useSelector(state => state.comments);
  return (
    <Wrap>
      <Counter />
      <CommentsForm />
      <CommentsResult comments={comments} />
    </Wrap>
  );
};

Footer.propTypes = {
  comments: PropTypes.array
};

export default Footer;
