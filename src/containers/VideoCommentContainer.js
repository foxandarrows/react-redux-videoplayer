import React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrap = styled.div`
  padding-bottom: 20px;
`;

const VideoCommentContainer = ({ url }) => {
  return (
    <Wrap>
      <ReactPlayer url={url} playing controls={true} light={true} />
    </Wrap>
  );
};

VideoCommentContainer.propTypes = {
  comments: PropTypes.array
};

export default VideoCommentContainer;
