import { Grid } from "@material-ui/core";
import endowPic from '../endowment.png'; // Tell Webpack this JS file uses this image
console.log(endowPic); // /logo.84287d09.png

const EndowmentDesc = () => {
  return(
    <Grid container>
      <Grid item xs="1" />
      <Grid item xs="11">
        <h1 id="endow" class="header-margin">The Endowment</h1>
      </Grid>
      
      <Grid item xs="1" md="2"/>
      <Grid container item xs="10" md="8" justify="center">
        <h3 class="QandA">What is the endowment?</h3>
        <p>
          The endowment is a collection of assets owned by the university that are intended to sustain Stanford over the long term. They include money from donations that are now invested by the <a href="https://smc.stanford.edu/" target="_blank">Stanford Management Company (SMC)</a> as well as things like real estate (yes, Stanford owns a <a href="https://news.stanford.edu/news/2009/march18/rosewood-sand-hill-hotel-031809.html" target="_blank">hotel</a>!). The endowment is designed to generate recurring revenue for the university. SMC has a diverse portfolio including public equities (i.e. stocks), private equities, and fixed income (i.e. bonds). These investments generate returns or interest payments to the university. Likewise, real estate generates revenue through rental income.
        </p>
        <h3 class="QandA">What is the endowment payout?</h3>
    
        <img src={endowPic} className="endowment" alt="Endowment Returns" />
            
        <p>
            In most years, the endowment grows - primarily because of investment returns but also because of new donations. Stanford allocates most of the investment returns to the payout, which helps fund the university budget (roughly 20%). Stanford then reinvests the rest of the returns to ensure the endowment grows in step with the cost of running a university in Palo Alto. The goal is for future investment returns to continue fund a stable share of the university budget. 
        </p>
    

        <h3 class="QandA">If Stanford has so much money, why was COVID a problem?</h3>
        <p>
            During COVID, many wondered about using the endowment to offset new expenses and lost revenue. University trustees and budget experts weighed all options, but decided against using the principal of the endowment. This is because the endowment's purpose is to safegaurd the university's future. It's more like a retirement annuity rather than a savings account. Using the endowment principal not only means a smaller endowment next year, but smaller investment income in the form of interest *forever*. 
        </p>
        <h3 class="QandA">Can the endowment be used for anything?</h3>
        <p>
          Roughly 90% of the endowment is "restricted." These "restricted" funds are designated for specific purposes by the person who donated them (e.g. a professorship, or a scholarship). Restricted funds and the investment returns they generate cannot be used for any other purpose except their designated one. Restricted funds were another reason that COVID was challenging, even for institutions with large endowments. 
            
        </p>
        <p>
          See <a href="https://stanfordmag.org/contents/why-you-cant-just-use-the-endowment-for-that" target="_blank">here</a> for a deeper dive on Stanford's endowment.
        </p>
      </Grid>
      <Grid item xs="1" md="2"/>
    </Grid>
  );
}

export default EndowmentDesc;