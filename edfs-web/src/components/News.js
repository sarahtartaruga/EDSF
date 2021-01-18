import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
// eslint-disable-next-line import/no-webpack-loader-syntax
import EdsfMarkdown from "../EDSF.wiki/Home.md";

class News extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(EdsfMarkdown)
      .then((res) => res.text())
      .then((text) => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return <ReactMarkdown source={markdown} className="home-body" />;
  }
}

export default News;
