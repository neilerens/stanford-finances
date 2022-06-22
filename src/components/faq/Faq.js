import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  accordionStyle: {
    border: "1px solid rgba(0, 0, 0, .125)"
  },
  question: {
    fontSize: "200",
    fontWeight: "900",
    fontFamily: "Source Sans Pro, sans",
  }
})

const Faq = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return(
    <Grid container id="faq">
      <Grid item xs="1" />
      <Grid item xs="11">
        <h1 class="header-margin">FAQ</h1>
      </Grid>
      <Grid item xs="1" md="2"/>
      <Grid item xs="10" md="8">
        <Accordion className={classes.accordionStyle} square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.question} variant="h5">Who am I?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography class="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionStyle} square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.question} variant="h5">What am I?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography class="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionStyle} square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.question} variant="h5">Where am I?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography class="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionStyle} square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.question} variant="h5">Why am I?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography class="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionStyle} square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.question} variant="h5">How am I?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography class="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs="1" md="2" />
    </Grid>
  );
}

export default Faq;