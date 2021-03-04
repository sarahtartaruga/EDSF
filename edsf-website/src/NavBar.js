import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import MenuPopper from "./MenuPopper";
import logoEdison from "./img/edsf-head.ico";
import Box from "@material-ui/core/Box";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuPopperBox: {
    flexGrow: 1,
    display: "flex",
  },
  iconImage: {
    height: "60%",
    width: "60%",
    paddingTop: "10%",
  },
  title: {
    
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
    <AppBar position="static">
      <Toolbar>
        <Box className={classes.menuPopperBox}>
          <MenuPopper />
          <Box className={classes.titleBox}>
            <Typography variant="h5" className={classes.title} color="textSecondary">
              <RouterLink to="/" className={classes.routerLink}>
                EDISON Data Science Framework
              </RouterLink>
            </Typography>
          </Box>
        </Box>

        <Box className={classes.iconBox}>
          <RouterLink to="/about" className={classes.routerLink}>
            <Icon className={classes.iconRoot}>
              <img className={classes.iconImage} src={logoEdison} alt="logo" />
            </Icon>
          </RouterLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
