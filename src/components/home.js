import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Kartu from "./cards";

const styles = {
  root: {
    flexGrow: 1,
    width: 500
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Home extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "green" }}>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Go-Food
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <br />
        <Kartu />
        <br />
        <div className={classes}>
          <BottomNavigation
            value={value}
            onChange={this.handleChange}
            showLabels
            className={classes.root.Bottom}
            style={{ backgroundColor: "green" }}
          >
            <img
              style={{ height: 50 }}
              src="https://image.flaticon.com/icons/svg/69/69524.svg"
            />
            <img
              style={{ height: 50, marginLeft: 30 }}
              src="https://image.flaticon.com/icons/svg/483/483947.svg"
            />
            <img
              style={{ height: 50, marginLeft: 40 }}
              src="https://image.flaticon.com/icons/svg/39/39508.svg"
            />
          </BottomNavigation>
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
