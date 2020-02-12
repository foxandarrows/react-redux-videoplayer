import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import CommentsForm from "../components/CommentsForm";
import CommentsResult from "../components/CommentsResult";
import Counter from "../components/Counter";
import styled from "styled-components";

const Wrap = styled.div`
  height: calc(30vh - 25px);
  width: 100vh;
  background-color: white;
  overflow-y: scroll;
  margin-bottom: 25px;
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
