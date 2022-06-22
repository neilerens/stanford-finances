import { Grid } from "@material-ui/core";

const IntroDesc = () => {
  return (
    <Grid className="intro-desc" container xs={12} justify="center" alignItems="center">
      <Grid item xs={1} sm={1} md={1} lg={2}/>
      <Grid container item xs={10} sm={10} md={10} lg={8}>
        <Grid item xs={12}>
          <h3 class="QandA">
            Stanford is a multi-billion dollar enterprise with tens of thousands of employees and students. This massive operation has a complex financial structure. But the basic mechanics of the budget, tuition, and endowment can be understood by anyone! 
          </h3>
          <p>
            The purpose of this guide is to educate university stakeholders about Stanford finances. Our goal is for people to be more informed and better able to engage in discussion about how the university is funded and how it spends its money.
          </p>
          <p>
            This guide was written by students serving on the Stanford University Board of Trustees Committee on Finance. What follows is not official information from Stanford University, but rather an interpretive understanding. Official information about university finances can be found <a href="https://bondholder-information.stanford.edu/financials/annual-reports" target="_blank">here</a>.
          </p>
        </Grid>
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={2}/>
    </Grid>
  )
}

export default IntroDesc;