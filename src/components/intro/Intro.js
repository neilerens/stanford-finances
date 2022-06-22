import { useState, useEffect } from 'react';
import Header from "./Header";
import { Snackbar, Grid, Typography } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

const Intro = () => {
  const [alertState, setAlertState] = useState({
    vertical: 'top',
    horizontal: 'center'
  });

  const { vertical, horizontal } = alertState;

  const handleClose = () => {
    setAlertState({ ...alertState });
  };

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }
  const { width } = useWindowDimensions();
  const showAlert = () => {
    return width < 750 ? true : false;
  }

  return (
    <div id="intro">
      <Header />
      {/* <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={showAlert()}
        autoHideDuration={10000}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="info">
          <AlertTitle>Mobile Devices</AlertTitle>
          For a better viewing experience, turn your mobile device horizontally to a landscape position.
        </Alert>
      </Snackbar> */}
      <div style={{ position: "relative" }}>
        <div id="intro-div" />
        <Grid container xs={12} style={{position: "absolute", top: 45}} justify="center" alignItems="center">
          <Grid item xs={1} sm={1} md={1} lg={2}/>
          <Grid item xs={10} sm={10} md={10} lg={8}>
            <Typography class="intro-title" variant="h2">Stanford's Finances</Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={2}/>
        </Grid>
      </div>
    </div>
  )
}

export default Intro;