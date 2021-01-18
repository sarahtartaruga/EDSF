import React from "react";
import { Link } from "react-router-dom";

function NavigationBar(props) {
  var res = [];

  props.categories.forEach(function (item, i) {
    res.push(
      <Link to={props.categories_path[i]} className="nav-item">
        {item}
      </Link>
    );
  });

  return <div className="nav-wrapper">{res}</div>;
}

export default NavigationBar;
