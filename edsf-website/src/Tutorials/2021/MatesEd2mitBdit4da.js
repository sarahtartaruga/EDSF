import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import aboutMarkdown from '../../EDSF.wiki/MATES-ED2MIT-2021-"Introduction-to-Big-Data-and-Data-Management-for-Maritime-Industry".md';
import Box from "@material-ui/core/Box";

export default class MatesEd2mitBdit4da extends Component {
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