import { Grid } from "@material-ui/core";

const Resources = () => {
  return(
    <Grid container>
      <Grid item xs="1" />
      <Grid item xs="11">
        <h1 id="resources" class="header-margin">Additional Reading</h1>
      </Grid>
      
      <Grid item xs="1" md="2"/>
      <Grid item xs="10" md="8" style={{position: "relative", bottom: 20}}>
        <ul>
          <li>Annual Financial Reports and Financial Statements: <a href="https://bondholder-information.stanford.edu/financials/annual-reports" target="_blank">Stanford Bondholder Indformation</a></li>
    
          <li>Fast Facts About Stanford Finances: <a href="https://facts.stanford.edu/administration/finances/" target="_blank">Stanford Facts</a></li>
    
          <li>Endowment Fact Sheet (2019): <a href="https://facts.stanford.edu/wp-content/uploads/sites/20/2019/10/Endowment-Fact-Sheet-Oct-2019.pdf" target="_blank">Stanford Facts</a></li>
          <li>How the Endowment Payout Works: <a href="https://giving.stanford.edu/endowment/" target="_blank">Stanford Giving</a></li>
          <li>Why You Can't Just Use the Endowment for That: <a href="https://stanfordmag.org/contents/why-you-cant-just-use-the-endowment-for-that" target="_blank">Stanford Magazine</a></li>
          <li>How Stanford Manages the Endowment <a href="https://fingate.stanford.edu/managing-funds/endowments#anchor-8021" target="_blank">Stanford Fingate</a></li>
          <li>Stanford as a VC: <a href="https://stanforddaily.com/2020/03/05/stanford-as-a-vc/" target="_blank">Stanford Daily</a></li>
    
          
        </ul>
      </Grid>
      <Grid item xs="1" md="2"/>
    
      <Grid item xs="1" />
      <Grid item xs="11">
        <h1 id="resources" class="header-margin">Acknowledgements</h1>
      </Grid>
      
      <Grid item xs="1" md="2"/>
      <Grid item xs="10" md="8" style={{position: "relative", bottom: 20}}>
        <p>This project was initiated by <a href="https://www.linkedin.com/in/neilrens/" target="_blank"> Neil Rens</a> and <a href="https://www.linkedin.com/in/jonathan-l-88a765141/" target="_blank">Jonathan Lipman</a>, with artistic design by <a href="https://www.linkedin.com/in/jennarwang/" target="_blank">Jenna Wang</a> and web development by <a href="https://www.linkedin.com/in/mark-m-tran/" target="_blank">Mark Tran</a>.
        </p>
      <p>
        This project would not have been possible without the generous support of Jamie Halper '81 and numerous discussions with Stanford CFO Randy Livingston. 
      </p>
      </Grid>
      <Grid item xs="1" md="2"/>
    </Grid>
    
  );
}

export default Resources;