import React from "react";
import { Link } from "react-router-dom";

function NavigationBar(props) {
  var res = [];
  var itemsTop = [];
  var itemsBottom = [];

  props.categories.forEach(function (item, i) {
    if (i < 6) {
      itemsTop.push(
        <Link to={props.categories_path[i]} className="nav-item">
          {item}
        </Link>
      );
    } else {
      itemsBottom.push(
        <Link to={props.categories_path[i]} className="nav-item">
          {item}
        </Link>
      );
    }
  });

  res.push(<div className="nav-wrapper-top">{itemsTop}</div>);
  res.push(<div className="nav-wrapper-bottom">{itemsBottom}</div>);

  return <div className="nav-wrapper">{res}</div>;
}

export default NavigationBar;
