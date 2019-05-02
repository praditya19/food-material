import React, { Component } from "react";
import Counter from "./counter";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  card: {
    maxWidth: 500,
    maxHeight: 600
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
});
class Menu extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  state = {
    orderan: [],
    barang: [],
    food: [
      {
        id: 1,
        number: 0,
        price: 20000,
        jumlah: 0,
        total: 0,
        nama: "Paket Ayam 1",
        gambar: "https://mcdonalds.co.id/uploads/KII68tTAXvubUBv5WAqM.png"
      },
      {
        id: 2,
        price: 25000,
        number: 0,
        jumlah: 0,
        total: 0,
        nama: "Paket Ayam 2",
        gambar: "https://mcdonalds.co.id/uploads/KII68tTAXvubUBv5WAqM.png"
      },
      {
        id: 3,
        price: 30000,
        number: 0,
        jumlah: 0,
        total: 0,
        nama: "Paket Ayam 3",
        gambar: "https://mcdonalds.co.id/uploads/KII68tTAXvubUBv5WAqM.png"
      },
      {
        id: 4,
        price: 35000,
        number: 0,
        jumlah: 0,
        total: 0,
        nama: "Paket Ayam 4",
        gambar: "https://mcdonalds.co.id/uploads/KII68tTAXvubUBv5WAqM.png"
      }
    ],
    jumlah: 0
  };

  order = () => {
    const data = this.state.food;
    const fill = data.find(item => item.id === 1);
    console.log(fill);
    this.setState({
      orderan: fill
    });
  };

  plus = (harga, item) => {
    this.setState({
      jumlah: this.state.jumlah + harga,
      barang: this.state.barang.concat(item)
    });
    this.order();
    sessionStorage.jumlah = this.state.jumlah + harga;
  };
  minus = (harga, item) => {
    this.setState({
      jumlah: this.state.jumlah - harga
      //barang: this.state.barang.filter(item)
    });
    sessionStorage.jumlah = this.state.jumlah - harga;
  };
  render() {
    const { classes } = this.props;
    console.log(this.state.barang);

    return (
      <div>
        <Grid container spacing={24}>
          {this.state.food.map((item, index) => (
            <Grid
              item
              xs={24}
              sm={6}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "50"
              }}
            >
              <Counter
                item={item}
                plus={() => this.plus(item.id)}
                minus={() => this.minus(item.id)}
                food={this.state.food}
              />
            </Grid>
          ))}
        </Grid>
        <br />
        <br />
        <Paper className={classes.root} elevation={1}>
          <h5>Keranjang makanan</h5>
          <ul>
            {/* {this.state.barang.map(item => (
              <li>{item.nama}</li>
            ))} */}
          </ul>
          <Typography component="p">
            <div align="center">
              <h4>Total Harga:{this.state.jumlah}</h4>
            </div>
          </Typography>
        </Paper>
      </div>
    );
  }
}
Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu);
