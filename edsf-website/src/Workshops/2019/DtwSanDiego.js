import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import aboutMarkdown from "../../EDSF.wiki/(1)-DTW2019-Data-Teaching-Workshop-September-2019,-San-Diego.md";
import Box from "@material-ui/core/Box";

export default class DtwSanDiego extends Component {
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