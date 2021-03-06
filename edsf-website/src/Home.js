import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Icon from "@material-ui/core/Icon";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Grid from "@material-ui/core/Grid";
import matesLogo from "./img/MatesMasterLogo_COL.JPG";

const useStyles = makeStyles((theme) => ({
  rootBox: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  gridContainer: {
    height: "100%",
  },
  gridTitleContainer: {},
  gridTitleItem: { padding: theme.spacing(2) },
  gridCardContainer: {
    height: "75%",
    width: "100%",
    flexGrow: "1",
    backgroundColor: "#00ff00",
  },
  gridCardItem: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(2),
  },
  cardBox: {
    flexGrow: "1",
    display: "flex",
  },
  titleBox: {
    marginTop: "2%",
    maxHeight: "10%",
  },
  cardTutorials: {
    height: "100%",
    backgroundColor: "#116FB4",
    color: "#ffffff",
    margin: "auto",
    overflowY: "scroll",
  },
  cardWorkshops: {
    height: "100%",
    backgroundColor: "#245E76",
    color: "#ffffff",
    margin: "auto",
    overflowY: "scroll",
  },
  cardTwitter: {
    height: "100%",
    margin: "auto",
    overflowY: "scroll",
  },
  cardTitle: {
    marginTop: "5%",
    marginBottom: "3%",
  },

  footerGrid: {
    height: "5%",
    width: "100%",
  },
  footerGridItemContact: {
    height: "100%",
    backgroundColor: "#ff00ff",
    border: "solid",
    display: "flex",
  },
  footerGridItemMates: {
    height: "100%",
    backgroundColor: "#ff0000",
    border: "solid",
  },
  contactButton: {
    height: "100%",
    padding: "0",
  },
  iconBox: {
    height: "100%",
    flexDirection: "row",
    marginRight: "2%",
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
    textAlign: "flex-start",
  },
  matesBox: {
    height: "100%",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
  logoBox: {
    height: "100%",
    marginLeft: "1%",
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <Box className={classes.rootBox}>
      <Grid container direction="column" className={classes.gridContainer}>
        <Grid
          container
          direction="column"
          className={classes.gridTitleContainer}
        >
          <Grid
            item
            xs
            className={classes.gridTitleItem}
            style={{ paddingBottom: "0" }}
          >
            <Typography variant="h6">Welcome to the EDSF homepage! </Typography>
          </Grid>
          <Grid
            item
            xs
            className={classes.gridTitleItem}
            style={{ paddingTop: "0" }}
          >
            <Typography variant="subtitle1">
              Here you can find all information about the EDSF, offered
              trainings and workshops
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction="row" className={classes.gridCardContainer} >
          <Grid item className={classes.gridCardItem} xs>
            <Card className={classes.cardTutorials}>
              <Typography variant="h6" className={classes.cardTitle}>
                Trainings
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
                      primary='MATES ED2MIT "Big Data Infrastructure Technologies for Data Analytics"'
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
          </Grid>
          <Grid item className={classes.gridCardItem} xs>
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
          </Grid>
          <Grid item className={classes.gridCardItem} xs>
            <Card className={classes.cardTwitter}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="erasmusmates"
                options={{}}
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container direction="row" className={classes.footerGrid} flexGrow="1">
          <Grid item xs className={classes.footerGridItemContact}>
            <RouterLink to="/contact">
              {/* <Button padding="0px" startIcon={<MailOutlineIcon />} variant="outlined"/> */}
              <IconButton className={classes.contactButton}>
                <MailOutlineIcon />
              </IconButton>
            </RouterLink>
            <Box flexGrow="1" />
          </Grid>
          {/* <Grid item xs className={classes.footerGridItem}></Grid> */}
          <Grid item xs className={classes.footerGridItemMates}>
            <Box className={classes.matesBox}>
              <Box flexGrow="1" />
              <Typography variant="subtitle1" color="textSecondary">
                Partnered by
              </Typography>
              <Box className={classes.logoBox}>
                <Link
                  target="_blank"
                  href="https://www.projectmates.eu/"
                  rel="noopener"
                >
                  <Icon
                    className={classes.iconRoot}
                    href="https://www.projectmates.eu/"
                  >
                    <img
                      className={classes.iconImage}
                      src={matesLogo}
                      alt="logo"
                    />
                  </Icon>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
