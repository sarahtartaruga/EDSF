import React from "react";

function Footer(props) {
  return (
    <div className="body-wrapper">
      <div className="body-title">{props.title}</div>
      <div className="body-content">{props.content}</div>
    </div>
  );
}

export default Footer;
