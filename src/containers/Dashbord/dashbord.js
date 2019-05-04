import React, { Component } from "react";
import Counter from "../../components/counter";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import NavbarMenu from "../NavbarMenu/navbarmenu";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
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
class Dashbord extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  state = {
    barang: [],
    food: [
      {
        id: 1,
        number: 0,
        price: 20000,
        biaya: 20000,
        jumlah: 0,
        nama: "Paket Ayam 1",
        gambar:
          "https://www.mcdonalds.com.my/storage/foods/May2018/8Cw1if8XxZFkpuavHqp9.jpg"
      },
      {
        id: 2,
        price: 25000,
        number: 0,
        jumlah: 0,
        biaya: 25000,
        nama: "Paket Ayam 2",
        gambar:
          "https://asset.barrons.com/public/resources/images/ON-BI972_McDona_G_20150304181209.jpg"
      },
      {
        id: 3,
        price: 30000,
        number: 0,
        jumlah: 0,
        biaya: 30000,
        nama: "Paket Ayam 3",
        gambar:
          "https://media-cdn.tripadvisor.com/media/photo-s/04/26/47/e2/texas-chicken.jpg"
      },
      {
        id: 4,
        price: 35000,
        number: 0,
        jumlah: 0,
        biaya: 35000,
        nama: "Paket Ayam 4",
        gambar: "https://mcdonalds.co.id/uploads/KII68tTAXvubUBv5WAqM.png"
      }
    ],
    jumlah: 0
  };

  order = id => {
    const data = this.state.food;
    const foodfind = data.find(item => item.id === 1);
    const plus = foodfind["price"] + foodfind["price"];
    const update = (foodfind.price = plus);
    console.log(update);
    this.setState({
      jumlah: update
    });
  };
  kurang = id => {
    const data = this.state.food;
    const foodfind = data.find(item => item.id === 1);
    const minus = foodfind["price"] - foodfind["price"];
    const update = (foodfind.price = minus);
    console.log(update);
    this.setState({
      jumlah: update
    });
  };
  plus = (harga, item) => {
    this.setState({
      // jumlah: this.state.jumlah + harga,
      barang: this.state.barang.concat(item)
    });
    this.order();
    // sessionStorage.jumlah = this.state.jumlah + harga;
  };
  minus = (harga, item) => {
    this.setState({
      //   // jumlah: this.state.jumlah - harga
      //     barang: this.state.barang.filter(item)
    });
    this.kurang();
    //   // sessionStorage.jumlah = this.state.jumlah - harga;
  };
  render() {
    const { classes } = this.props;
    // console.log(this.state.barang);

    return (
      <div>
        <NavbarMenu />
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
                name={item.nama}
                biaya={item.biaya}
                gambar={item.gambar}
              />
            </Grid>
          ))}
        </Grid>
        <br />
        <br />
        <Paper className={classes.root} elevation={1}>
          <center>
            <h5>Keranjang makanan</h5>
          </center>

          <ul>
            {this.state.barang.map(item => (
              <li>{this.state.nama}</li>
            ))}{" "}
          </ul>
          <Typography component="p">
            <div align="center">
              <h4>Total Harga:{this.state.jumlah}</h4>
              <Button
                style={{ backgroundColor: "green" }}
                component={Link}
                to="/restaurant"
              >
                Pesan Sekarang
              </Button>
            </div>
          </Typography>
        </Paper>
      </div>
    );
  }
}
Dashbord.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashbord);
