import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuPopper from "./MenuPopper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuPopper: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuPopper className={classes.menuPopper}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
