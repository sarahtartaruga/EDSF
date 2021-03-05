import React, { Component } from "react";
import Markdown from "./Markdown";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  mainPaper: {
    margin: "5%",
    padding: "5%",
  },
  footerBox: {
    height: "100px",
  },
});

class MarkDownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { terms: "" };
  }

  componentWillMount() {
    fetch(this.props.markdown)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ terms: text });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <Box>
        <Paper className={classes.mainPaper} variant="outlined">
          <Markdown>{this.state.terms}</Markdown>
        </Paper>
        <Box className={classes.footerBox} />
      </Box>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MarkDownComponent);
