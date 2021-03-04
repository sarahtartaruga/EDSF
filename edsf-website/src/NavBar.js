import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import MenuPopper from "./MenuPopper";
import logoEdison from "./edsf-head.ico";
import Box from "@material-ui/core/Box";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuPopperBox: {
    flexGrow: 1,
    display: "flex",
  },
  iconImage: {
    height: "70%",
    width: "70%",
    paddingTop: "10%",
  },
  title: {
    color: "#ffffff",
  },
  titleBox: {
    textAlign: "center",
    height: "100%",
    width: "100%",
    margin: "auto",
  },
  routerLink: {
    textDecoration: "none",
    color: "inherit",
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box className={classes.menuPopperBox}>
            <MenuPopper />
            <Box className={classes.titleBox}>
              <Typography variant="h5" className={classes.title}>
                <RouterLink to="/" className={classes.routerLink}>
                  EDISON Data Science Framework: Workshops and Tutorials
                </RouterLink>
              </Typography>
            </Box>
          </Box>

          <Box className={classes.iconBox}>
            <Icon className={classes.iconRoot}>
              <img className={classes.iconImage} src={logoEdison} alt="logo" />
            </Icon>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
