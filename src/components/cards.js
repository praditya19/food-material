import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const styles = {
  card: {
    maxWidth: 600
  },
  media: {
    height: 300
  },
  Actions: {
    marginLeft: "130px"
  }
};

class Kartu extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={classes.paper}>
              {" "}
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://img.pngio.com/logo-go-food-vector-cdr-png-hd-go-food-png-1600_1200.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Go-Food
                    </Typography>
                    <Typography component="p">
                      Jika Anda lapar silahkan kunjungi Go-food
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    className={classes.Actions}
                    component={Link}
                    to="/restaurant"
                    variant="contained"
                    color="primary"
                  >
                    Kunjungi
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://ecs7.tokopedia.net/img/cache/700/product-1/2017/12/1/238529277/238529277_beab248a-ec3a-4190-9958-099526f3ff86_597_454.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Go-Food
                    </Typography>
                    <Typography component="p">
                      Jika Anda ingin mengirim pesan silahkan kunjungi Go-Send
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    className={classes.Actions}
                    variant="contained"
                    color="primary"
                  >
                    Kunjungi
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://daftar.go-ride.co.id/assets/go_ride/go-ride-banner-mobile@2x-a97ac5d120bbe75317ddb7f370bbdb4c61f9acc9f16ba95bc0a9e58d084112ae.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Go-Food
                    </Typography>
                    <Typography component="p">
                      Jika Anda lapar silahkan kunjungi Go-food
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    className={classes.Actions}
                    variant="contained"
                    color="primary"
                  >
                    Kunjungi
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Kartu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Kartu);
