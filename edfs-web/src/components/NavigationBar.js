import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar(props) {
  var res = [];
  var itemsTop = [];
  var itemsBottom = [];
  var maxItemsPerRow = 6;

  const Symbol = <sub className="nav-symbol"> | </sub>;

  props.categories.forEach(function (item, i) {
    if (i < maxItemsPerRow) {
      itemsTop.push(
        <NavLink
          exact
          to={props.categories_path[i]}
          className="nav-item"
          activeClassName="active"
        >
          {item}
        </NavLink>
      );
      if (i < maxItemsPerRow - 1) {
        itemsTop.push(Symbol);
      }
    } else {
      itemsBottom.push(
        <NavLink
          exact
          to={props.categories_path[i]}
          className="nav-item"
          activeClassName="active"
        >
          {item}
        </NavLink>
      );
      if (i < props.categories.length - 1) {
        itemsBottom.push(Symbol);
      }
    }
  });

  res.push(<nav className="nav-wrapper-top">{itemsTop}</nav>);
  res.push(<nav className="nav-wrapper-bottom">{itemsBottom}</nav>);

  return <div className="nav-wrapper">{res}</div>;
}

export default NavigationBar;
