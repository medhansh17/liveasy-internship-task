import React from "react";

const ExternalLink = ({ url, text }) => {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      {text}
    </a>
  );
};

export default ExternalLink;
