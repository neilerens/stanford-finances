import Chart from "react-google-charts";
import { Grid, makeStyles } from "@material-ui/core";

const SankeyGraph2 = () => {

  const tooltipStyle = {
    backgroundColor: "red"
  }

  function createTooltip(title, desc, value) {
    const tooltip = "<div style='background-color: #ffe0e2; padding: 10px; border-style: none none none solid; border-color: #B1040E; border-width: 6px'>" +
      `<h2 style='margin: 0'>${title}: ${value}</h2>` +
      `<p style='margin: 0'>${desc}</p>` +
    "</div>";
    return tooltip;
  }

  return(
    <Grid container justify="center">
      <Grid item xs={2} />
      <Grid container item xs={8} justify="center">
        <Chart
          width={1000}
          height={'600px'}
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          data={[
            ['From', 'To', 'Amount', { role: 'tooltip', type: 'string', p: { html: true } }],
            ['Price per Student (including room and board)', '', 78165, createTooltip("Price per Student", "Insert description here", "$78,165")],
            ['Stanford Subsidy', '', 77643.67, createTooltip("Stanford Subsidy", "Insert description here", "$77,643.67")],
            ['', 'Financial Aid Costs', 31755.31, createTooltip("Financial Aid Costs", "Insert description here", "$31,755.31")],
            ['', 'Instutional/Community', 3153.21, createTooltip("Instutional/Community", "Insert description here", "$3,153.21")],
            ['', 'Instruction/Dept Research', 69624.43, createTooltip("Instruction/Dept Research", "Insert description here", "$69,624.43")],
            ['', 'Departmental Administration', 19275.27, createTooltip("Departmental Administration", "Insert description here", "$19,275.27")],
            ['', 'Student Services', 7082.68, createTooltip("Student Services", "Insert description here", "$7,082.68")],
            ['', 'Library', 7479.56, createTooltip("Library", "Insert description here", "$7,479.56")],
            ['', 'Facilities O&M Expenses', 7609.43, createTooltip("Facilities O&M Expenses", "Insert description here", "$7,609.43")],
            ['', 'Depreciation', 4740.75, createTooltip("Depreciation", "Insert description here", "$4,740.75")],
            ['', 'Administration (G&A)', 5088.03, createTooltip("Administration (G&A)", "Insert description here", "$5,088.03")],
          ]}
          options={{
            tooltip: { 
              isHtml: true, 
              trigger: "selection",
              textStyle: {
                italic: true
              }
            },
            sankey: {
              node: {
                label: {
                  fontName: 'Source Sans Pro',
                  fontSize: 18,
                  bold: true
                },
                width: 16
              },
              link: {
                colorMode: 'gradient'
              }
            }
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  )
}

export default SankeyGraph2