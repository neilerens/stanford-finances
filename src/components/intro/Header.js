import { AppBar, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appBarStyle: {
    backgroundColor: "#8c1515",
  },
  stanfordFont: {
    fontFamily: "Source Serif Pro, serif"
  },
  margins: {
    marginTop: "5px",
    marginBottom: "5px"
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar  className={classes.appBarStyle} position="static">
      <Grid container className={classes.margins}>
        <Grid item xs="1"/>
        <Grid item xs="11">
          <Typography className={classes.stanfordFont} variant="h6" color="inherit">
            Stanford | Finances
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Header;