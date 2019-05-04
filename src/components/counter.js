import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 350
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

class Counter extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  state = {
    angka: 0
  };

  tambah = id => {
    this.setState({
      angka: this.state.angka + 1
    });
    const y = this.props.food.find(item => item.id === id);
    this.props.plus(this.props.item.price, y);
  };
  kurang = id => {
    if (this.state.angka === 0) {
      return;
    }
    this.setState({
      angka: this.state.angka - 1
    });
    const y = this.props.food.find(item => item);
    this.props.minus(this.props.item.price, y);
  };
  render() {
    const { classes } = this.props;
    const { id, biaya } = this.props.item;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={this.props.gambar}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {this.props.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <p>Harga : Rp.{biaya}</p>
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <Button
              onClick={() => this.kurang(id)}
              variant="contained"
              color="primary"
            >
              -
            </Button>

            <h2>{this.state.angka}</h2>

            <Button
              onClick={() => this.tambah(id)}
              variant="contained"
              color="primary"
            >
              +
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

Counter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Counter);
