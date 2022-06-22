import { Grid } from "@material-ui/core";

const BudgetDesc = () => {
  return(
    <Grid container>
      <Grid item xs="1" />
      <Grid item xs="11">
        <h1 class="header-margin" >The Budget</h1>
      </Grid>
      
      <Grid item xs="1" md="2" />
      <Grid item xs="10" md="8" justify="center">
      
      <h3 class="QandA">Show me the money! </h3>
        <p>
          In order to understand Stanford’s finances, 
          first we have to look at where the money comes from and where it goes. 
          Below, you can find an interactive chart where you can explore each of Stanford’s main sources of revenue 
          and a breakdown of how that money gets distributed through the budget plan. 
        </p>
        <p>
          Hover over or tap (for mobile) each revenue/expense for more information!
        </p>
        <p style={{fontSize: 14}}>
          <i>*Note: The following values are in millions of dollars and represent the state of the budget in 2020. </i>
        </p>
      </Grid>
      <Grid item xs="1" md="2" />
    </Grid>
  );
}

export default BudgetDesc;