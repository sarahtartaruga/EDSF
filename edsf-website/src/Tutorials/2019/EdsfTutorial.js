import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import aboutMarkdown from "../../EDSF.wiki/(3)-EDSF-Tutorial-Summer-2019:-Data-Science-Competence-and-Education.md";
import Box from "@material-ui/core/Box";

export default class EdsfTutorial extends Component {
  constructor(props) {
    super(props);

    this.state = { terms: null };
  }

  componentWillMount() {
    fetch(aboutMarkdown)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ terms: text });
      });
  }

  render() {
    return (
      <Box>
        <ReactMarkdown source={this.state.terms} />
      </Box>
    );
  }
}