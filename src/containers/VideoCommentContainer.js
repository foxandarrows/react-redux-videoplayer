import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import CommentsForm from "../components/CommentsForm";
import CommentsResult from "../components/CommentsResult";
import Counter from "../components/Counter";
// import styled from "styled-components";

const VideoCommentContainer = ({ url }) => {
  const comments = useSelector(state => state.comments);
  return (
    <div>
      <ReactPlayer url={url} playing controls={true} light={true} />
      <Counter />
      <CommentsForm />
      <CommentsResult comments={comments} />
    </div>
  );
};

VideoCommentContainer.propTypes = {
  comments: PropTypes.array
};

export default VideoCommentContainer;
