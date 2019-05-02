import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import Navres from "./navres";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const styles = theme => ({
  card: {
    maxWidth: 500,
    maxHeight: 600
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  Button: {
    marginLeft: "120px"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class Restaurant extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Navres />
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={classes.paper}>
              {" "}
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      McD
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={classes.media}
                  image="https://s.republika.co.id/uploads/images/inpicture_slide/logo-mc-donald-_130605182712-898.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Typography component="p">
                    Silahkan Kunjungi Dan Rasakan Menu Yang Ada
                  </Typography>
                </CardContent>
                <Button
                  className={classes.Button}
                  component={Link}
                  to="/menu"
                  variant="contained"
                  color="primary"
                >
                  Lihat Sekarang
                </Button>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={classes.media}
                  image="https://i1.wp.com/www.maxmanroe.com/wp-content/uploads/2014/12/Rocket-Chicken.jpg?resize=486%2C295&ssl=1"
                  title="Paella dish"
                />
                <CardContent>
                  <Typography component="p">
                    Silahkan Kunjungi Dan Rasakan Menu Yang Ada
                  </Typography>
                </CardContent>
                <Button
                  className={classes.Button}
                  variant="contained"
                  color="primary"
                >
                  Lihat Sekarang
                </Button>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      BK
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={classes.media}
                  image="http://www.exploreedgefield.com/gallery2/main.php?g2_view=core.DownloadItem&g2_itemId=3597&g2_serialNumber=2"
                  title="Paella dish"
                />
                <CardContent>
                  <Typography component="p">
                    Silahkan Kunjungi Dan Rasakan Menu Yang Ada
                  </Typography>
                </CardContent>
                <Button
                  className={classes.Button}
                  variant="contained"
                  color="primary"
                >
                  Lihat Sekarang
                </Button>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Restaurant.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Restaurant);
