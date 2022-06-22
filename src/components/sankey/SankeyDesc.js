import { Grid } from "@material-ui/core";


const SankeyDesc = () => {
  return(
    <Grid container>
      <Grid item xs="1" />
      <Grid item xs="11">
        <h1 class="header-margin">The Tuition</h1>
      </Grid>
      
      <Grid item xs="1" md="2"/>
      <Grid container item xs="10" md="8" justify="center">
      <h3 class="QandA">Where does all that tuition go?</h3>
        <p>
          This infographic shows the average financial picture of an undergraduate at Stanford. 
          It includes how much undergraduates pay for tuition on average, how much Stanford subsidizes their education 
          and how much of the money is spent on items and activities directly related to your experience at Stanford. 
          Please note that this graph reflects the average amounts across the student body. 
          You can use this graphic to see what your tuition is used for, how much of the cost of your education you are paying for, 
          and how much Stanford is subsidizing it (more than you probably expect).  
        </p>
        <p>
          Check out the sankey graph below to see the flow of money centered around the student experience. 
          Hover over a section to learn more about it!
        </p>
    
      <h3 class="QandA">Isn't high tuition bad for equity and access?</h3>
        <p>
          Not necessarily! In fact, high tuition can actually lower the cost of attendance for many students. This is because much of the budget for financial aid comes from the tuition paid by other students. More than half of undergraduate students receive financial aid from the university.
        </p>
        <p>
          In 2020, of the  $692 million in financial aid graduate support awarded by the university, $243 million (35%) came from unrestricted university funds. These unrestricted funds mainly comprise tuition revenue. 45% came from endowment payout and the remainder came from grants and contracts. Raising tuition will actually increase the amount of funds available for financial aid. 
        </p>
        <p>
          Some rightfully express concern that high "sticker prices" for tuition could discourage people from low-income backgrounds from applying to Stanford. It's true that financial aid packages aren't determined until after students are accepted. The university has been working to address this issue. In 2021, Stanford incrased the family income threshold from $125,000 to $150,000, meaning that families earning less than $150,000 are <a href="https://admission.stanford.edu/afford/" target="_blank"> not required to pay tuition</a>.
        </p>
      </Grid>
      <Grid item xs="1" md="2"/>
    </Grid>
  );
}

export default SankeyDesc;