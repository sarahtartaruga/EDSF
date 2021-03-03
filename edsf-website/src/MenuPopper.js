import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  rootTreeView: {
    marginRight: theme.spacing(2),
  },
  rootTreeItem: {
    padding: "10px",
  },
}));

export default function MenuPopper() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? "menu-tree-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MenuIcon />
        </IconButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center bottom" : "center top",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <TreeView
                    id="menu-tree-grow"
                    className={classes.rootTreeView}
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                  >
                    {/* About section   */}
                    <TreeItem
                      nodeId="1"
                      label="About"
                      className={classes.rootTreeItem}
                    />
                    {/* Tutorial section   */}
                    <TreeItem
                      nodeId="2"
                      label="Tutorials"
                      className={classes.rootTreeItem}
                    >
                      <TreeItem nodeId="3" label="2019">
                        <TreeItem
                          nodeId="4"
                          label="EDSF Tutorial Summer 2019: Data Science Competence and Education"
                        />
                        <TreeItem
                          nodeId="5"
                          label="BDIT4DA Tutorial HPCS2019"
                        />
                      </TreeItem>
                      <TreeItem nodeId="6" label="2020">
                        <TreeItem nodeId="7" label="MATES ED2MIT BDIT4DA" />
                      </TreeItem>
                      <TreeItem nodeId="8" label="2021">
                        <TreeItem
                          nodeId="9"
                          label="MATES ED2MIT BDIT4DA 20 26 28 January 4 February"
                        />
                        <TreeItem
                          nodeId="10"
                          label="MATES ED2MIT DMG 16 18 23 February"
                        />
                      </TreeItem>
                    </TreeItem>
                    {/* Workshop section   */}
                    <TreeItem
                      nodeId="11"
                      label="Workshops"
                      className={classes.rootTreeItem}
                    >
                      <TreeItem nodeId="12" label="2018">
                        <TreeItem
                          nodeId="13"
                          label="EDISON Workshop 31 May Denmark"
                        />
                        <TreeItem
                          nodeId="14"
                          label="EDSFr3 Design Workshop 18 19 July Agenda"
                        />
                        <TreeItem
                          nodeId="15"
                          label="EDSF Release 3 Design Workshop 18 19 July (UvA)"
                        />
                      </TreeItem>
                      <TreeItem nodeId="16" label="2019">
                        <TreeItem
                          nodeId="17"
                          label="DTW2019 Data Teaching Workshop September, San Diego"
                        />
                        <TreeItem
                          nodeId="18"
                          label="EDSF Release 4 Design Workshop 20 November"
                        />
                      </TreeItem>
                      <TreeItem nodeId="19" label="2020">
                        <TreeItem
                          nodeId="20"
                          label="FAIR Competences for Higher Education Design Workshop 8 9 October"
                        />
                      </TreeItem>
                    </TreeItem>
                    {/* Release section   */}
                    {/* <TreeItem
                      label="EDSF Releases"
                      className={classes.rootTreeItem}
                    >
                      <TreeItem label="3" />
                      <TreeItem label="4" />
                    </TreeItem> */}
                  </TreeView>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
