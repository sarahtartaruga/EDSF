import React from "react";

function Header(props) {
  return (
    <div className="body-wrapper">
      <div className="body-title">{props.title}</div>
      <div className="body-content">{props.content}</div>
    </div>
  );
}

export default Header;
