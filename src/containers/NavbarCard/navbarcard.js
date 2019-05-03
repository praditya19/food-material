import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function NavbarCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "green" }}>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Daftar Restaurant
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
    </div>
  );
}

NavbarCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavbarCard);
