import React, { useRef } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import rd3 from "react-d3-library";
import node from "./budgetD3";

const RD3Component = rd3.Component;

// const canvasWidth = 1280;
// const canvasHeight = 2000;

// const budgetCanvas = d3.select("#canvas")
//   .append("svg")  
//   .attr("width", canvasWidth)
//   .attr("height", canvasHeight)

// const centerX = canvasWidth/2;

// const midGraphic = budgetCanvas.append("rect")
//   .attr("width", 400)
//   .attr("height", 250)
//   .attr("fill", "gray")
//   .attr("x", canvasWidth/2 - 200)
//   .attr("y", canvasHeight/2 - 125)

// const academicExp = budgetCanvas.append("circle")
//   .attr("r", 250)
//   .attr("fill", "blue")
//   .attr("cx", canvasWidth/2 + 300)
//   .attr("cy", canvasHeight/2 + 450)

// const auxExp = budgetCanvas.append("circle")
//   .attr("r", 100)
//   .attr("fill", "red")
//   .attr("cx", canvasWidth/2 - 170)
//   .attr("cy", canvasHeight/2 + 800)

// const adminExp = budgetCanvas.append("circle")
//   .attr("r", 125)
//   .attr("fill", "green")
//   .attr("cx", canvasWidth/2 - 440)
//   .attr("cy", canvasHeight/2 + 350)

class BudgetGraphic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.setState({d3: node});
  }

  render() {
    return (
      <Grid container justify="center">
        <RD3Component data={this.state.d3} />
      </Grid>
    )
  }
};

export default BudgetGraphic;