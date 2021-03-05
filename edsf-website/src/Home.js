import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import matesLogo from "./img/MatesMasterLogo_COL.JPG";

const useStyles = makeStyles((theme) => ({
  rootBox: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  cardBox: {
    flexGrow: "1",
    display: "flex",
    maxHeight: "90%",
  },
  cardTutorials: {
    width: "32%",
    height: "90%",
    backgroundColor: "#116FB4",
    color: "#ffffff",
    margin: "auto",
    overflowY: "scroll",
  },
  cardWorkshops: {
    width: "32%",
    height: "90%",
    backgroundColor: "#245E76",
    color: "#ffffff",
    margin: "auto",
    overflowY: "scroll",
  },
  cardTitle: {
    marginTop: "5%",
    marginBottom: "3%",
  },
  footerBox: {
    marginBottom: "1%",
    height: "5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    margin: "1%",
  },
  iconRoot: { marginLeft: "5%" },
  iconBox: {
    height: "100%",
  },
  iconImage: {
    height: "100%",
  },
  year: {
    marginLeft: "10%",
  },
  yearBox: {
    display: "flex",
    marginBottom: "2%",
  },
  yearList: {
    backgroundColor: theme.palette.background.paper,
  },
  yearActions: {
    textAlign: "flex-start"
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <Box className={classes.rootBox}>
      <Box className={classes.cardBox}>
        <Card className={classes.cardTutorials}>
          <Typography variant="h6" className={classes.cardTitle}>
            Tutorials
          </Typography>
          <Box className={classes.yearBox}>
            <Typography color="textSecondary" className={classes.year}>
              2021
            </Typography>
            <Box flexGrow="1" />
          </Box>
          <Divider variant="middle" />
          <List>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/tutorials-2021-mates-ed2mit-dmg-february"
              >
                <ListItemText
                  primary='MATES ED2MIT "Industrial Data Spaces, Organisational Data Management and Governance for the Maritime Sector"'
                  secondary="16, 18, 23 February"
                />
              </ListItem>{" "}
            </CardActions>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/tutorials-2021-mates-ed2mit-bdit4da-january-february"
              >
                <ListItemText
                  primary='MATES ED2MIT "Introduction to Big Data and Data Management for Maritime Industry"'
                  secondary="20, 26, 28 January and 4 February"
                />
              </ListItem>
            </CardActions>
          </List>
          <Box className={classes.yearBox}>
            <Typography color="textSecondary" className={classes.year}>
              2020
            </Typography>
            <Box flexGrow="1" />
          </Box>
          <Divider variant="middle" />
          <List>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/tutorials-2020-mates-ed2mit-bdit4da"
              >
                <ListItemText
                  primary='MATES ED2MIT "Introduction to Big Data and Data Management for Maritime Industry"'
                  secondary="Pilot experience"
                />
              </ListItem>
            </CardActions>
          </List>
          <Box className={classes.yearBox}>
            <Typography color="textSecondary" className={classes.year}>
              2019
            </Typography>
            <Box flexGrow="1" />
          </Box>
          <Divider variant="middle" />
          <List>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/tutorials-2019-bdit4da-hpcs"
              >
                <ListItemText
                  primary="Big Data and Technologies for Data Analytics"
                  secondary="HPCS 2019"
                />
              </ListItem>
              <ListItem
                button
                component={RouterLink}
                to="/tutorials-2019-edsf-data-science-competence-and-education"
              >
                <ListItemText
                  primary="EDSF Data Science Competence and Education"
                  secondary="Summer"
                />
              </ListItem>
            </CardActions>
          </List>
        </Card>
        <Card className={classes.cardWorkshops}>
          <Typography variant="h6" className={classes.cardTitle}>
            Workshops
          </Typography>
          <Box className={classes.yearBox}>
            <Typography color="textSecondary" className={classes.year}>
              2020
            </Typography>
            <Box flexGrow="1" />
          </Box>
          <Divider variant="middle" />
          <List>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/workshops-2020-fair-competences-october"
              >
                <ListItemText
                  primary="FAIR Competences for Higher Education Design Workshop"
                  secondary="8,9 October"
                />
              </ListItem>
            </CardActions>
          </List>

          <Box className={classes.yearBox}>
            <Typography color="textSecondary" className={classes.year}>
              2019
            </Typography>
            <Box flexGrow="1" />
          </Box>
          <Divider variant="middle" />
          <List>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/workshops-2019-edsf-release4-november"
              >
                <ListItemText
                  primary="EDSF Release 4 Design Workshop"
                  secondary="20 November"
                />
              </ListItem>
              <ListItem
                button
                component={RouterLink}
                to="/workshops-2019-dtw-september-sandiego"
              >
                <ListItemText
                  primary=" Data Teaching Workshop"
                  secondary="September, San Diego"
                />
              </ListItem>
            </CardActions>
          </List>
          <Box className={classes.yearBox}>
            <Typography color="textSecondary" className={classes.year}>
              2018
            </Typography>
            <Box flexGrow="1" />
          </Box>
          <Divider variant="middle" />
          <List>
            <CardActions className={classes.yearActions}>
              <ListItem
                button
                component={RouterLink}
                to="/workshops-2018-edsf-release3-july-uva"
              >
                <ListItemText
                  primary="EDSF Release 3 Design Workshop UvA"
                  secondary="18, 19 July"
                />
              </ListItem>
              <ListItem
                button
                component={RouterLink}
                to="/workshops-2018-edsf-release3-july-agenda"
              >
                <ListItemText
                  primary="EDSF Release 3 Design Workshop Agenda"
                  secondary="18, 19 July"
                />
              </ListItem>
              <ListItem
                button
                component={RouterLink}
                to="/workshops-2018-edison-may-denmark"
              >
                <ListItemText
                  primary="EDISON Workshop"
                  secondary="31 May, Denmark"
                />
              </ListItem>
            </CardActions>
          </List>
        </Card>
      </Box>
      <Box className={classes.footerBox}>
        {/* <Box flexGrow="1" /> */}
        <Typography variant="subtitle1" color="textSecondary">
          Partnered by{" "}
        </Typography>
        <Box className={classes.iconBox}>
          <Link
            target="_blank"
            href="https://www.projectmates.eu/"
            rel="noopener"
          >
            <Icon className={classes.iconRoot}>
              <img className={classes.iconImage} src={matesLogo} alt="logo" />
            </Icon>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
