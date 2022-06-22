import { Grid } from "@material-ui/core";

const Resources = () => {
  return(
    <Grid container>
      <Grid item xs="1" />
      <Grid item xs="11">
        <h1 id="resources" class="header-margin">Resources</h1>
      </Grid>
      
      <Grid item xs="1" md="2"/>
      <Grid item xs="10" md="8" style={{position: "relative", bottom: 20}}>
        <ul>
          <li>Check out the following Stanford Magazine article: <a href="https://stanfordmag.org/contents/why-you-cant-just-use-the-endowment-for-that">Stanford Magazine</a></li>
          <li>Learn more through Stanford Fingate: <a href="https://fingate.stanford.edu/managing-funds/endowments#anchor-8021">Stanford Fingate</a></li>
          <li>And read this Stanford Daily article: <a href="https://stanforddaily.com/2020/03/05/stanford-as-a-vc/">Stanford Daily</a></li>
        </ul>
      </Grid>
      <Grid item xs="1" md="2"/>
    </Grid>
  );
}

export default Resources;