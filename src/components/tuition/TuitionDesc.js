import { Grid } from "@material-ui/core";


const TuitionDesc = () => {
  return(
    <Grid container>
      <Grid item xs="1" />
      <Grid item xs="11">
        <h1 class="header-margin">Student-Centered Sankey</h1>
      </Grid>
      
      <Grid item xs="1" md="2"/>
      <Grid container item xs="10" md="8" justify="center">
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
      </Grid>
      <Grid item xs="1" md="2"/>
    </Grid>
  );
}

export default TuitionDesc;