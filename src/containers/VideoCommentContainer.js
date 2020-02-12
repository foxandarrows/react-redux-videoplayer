import React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

const VideoCommentContainer = ({ url }) => {
  return (
    <ReactPlayer
      url={url}
      playing
      controls={true}
      light={true}
      width="100vh"
      height="60vh"
    />
  );
};

VideoCommentContainer.propTypes = {
  comments: PropTypes.array
};

export default VideoCommentContainer;
