import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
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
                    <TreeItem
                      nodeId="1"
                      label="About"
                      className={classes.rootTreeItem}
                    />
                    <TreeItem
                      nodeId="2"
                      label="Trainings"
                      className={classes.rootTreeItem}
                    >
                      <TreeItem nodeId="3" label="2018" />
                      <TreeItem nodeId="4" label="2019" />
                      <TreeItem nodeId="5" label="2020" />
                    </TreeItem>

                    <TreeItem
                      nodeId="6"
                      label="Workshops"
                      className={classes.rootTreeItem}
                    >
                      <TreeItem nodeId="7" label="2018" />
                      <TreeItem nodeId="8" label="2019" />
                      <TreeItem nodeId="9" label="2020">
                        <TreeItem nodeId="10" label="EDFS " />
                      </TreeItem>
                    </TreeItem>
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
