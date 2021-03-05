import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import aboutMarkdown from "../../EDSF.wiki/EDSF-Release-3-Design-Workshop-18-19-July-2018-(UvA).md";
import Box from "@material-ui/core/Box";

export default class Edsfr3DesignUva extends Component {
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