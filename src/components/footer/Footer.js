import { AppBar, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appBarStyle: {
    backgroundColor: "#8c1515"
  },
  stanfordFont: {
    fontFamily: "Source Serif Pro, serif"
  },
  margins: {
    marginTop: "5px",
    marginBottom: "5px"
  },
  footerText: {
    fontSize: "12",
    fontFamily: "Source Sans Pro, sans",
    textAlign: "end"
  }
});

const Footer = () => {
  const classes = useStyles();

  return(
    <div>
      <AppBar className={classes.appBarStyle} position="static">
        <Grid container className={classes.margins}>
          <Grid item xs="1"/>
          <Grid item xs="4">
            <Typography className={classes.stanfordFont} variant="h6" color="inherit">
              Stanford University
            </Typography>
          </Grid>
          <Grid item xs="6">
            <Typography className={classes.footerText} color="inherit">
              @ Stanford University. Stanford, California 94305.
            </Typography>
          </Grid>
          <Grid item xs="1" />
        </Grid>
      </AppBar>
    </div>
  )
}

export default Footer;