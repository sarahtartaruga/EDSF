import "./App.css";
import React, { Component } from "react";
import AppMarkdown from "./EDSF.wiki/Home.md";
import ReactMarkdown from "react-markdown";

class App extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(AppMarkdown)
      .then((res) => res.text())
      .then((text) => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return <ReactMarkdown source={markdown} />;
  }
}

export default App;
