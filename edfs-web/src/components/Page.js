import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import LogoMates from "../img/MatesMasterLogo_COL.JPG";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: "" };
    this.id = this.props.id;
    this.edsfMarkdown = this.props.edsfMarkdown;
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(this.edsfMarkdown)
      .then((res) => res.text())
      .then((text) => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    const gfm = require("remark-gfm");

    var res = [];

    if (this.props.title && this.props.title.includes("MATES")) {
      res.push(
        <div className="logo-wrapper">
          <img
            src={LogoMates}
            id="logo-mates"
            className="logo"
            alt="logo-mates"
          />{" "}
        </div>
      );
    }
    res.push(
      <ReactMarkdown
        plugins={[gfm]}
        className="home-body"
        source={markdown}
        linkTarget="_blank"
      />
    );
    return res;
  }
}

export default Page;
