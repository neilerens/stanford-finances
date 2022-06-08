import * as d3 from "d3";

let node = document.createElement('div');

let canvasWidth = 1280;
let canvasHeight = 2000;

let budgetCanvas = d3.select(node).append("svg")
  .attr("width", canvasWidth)
  .attr("height", canvasHeight);

const centerX = canvasWidth / 2;
const centerY = canvasHeight / 2;

const midGroup = budgetCanvas.append("g");
const midGraphic = midGroup.append("rect")
  .attr("width", 400)
  .attr("height", 250)
  .attr("fill", "gray")
  .attr("x", centerX - 200)
  .attr("y", centerY - 125);
const midText = midGroup.append("text")
  .attr("x", centerX)
  .attr("y", centerY)
  .text("100%");

// Full: academic units
const academicExp = budgetCanvas.append("g");
const academicExpCircle = academicExp.append("circle")
  .attr("r", 250)
  .attr("fill", "red")
  .attr("cx", centerX + 300)
  .attr("cy", centerY + 450);
const academicExpText = academicExp.append("text")
  .attr("x", centerX + 300)
  .attr("y", centerY + 450)
  .text("100%");

// academicExp.on("mouseover", () => {
//   academicExpCircle.transition().attr("r", 260);
//   academicExpText.transition().text("Stanford");
// })
// academicExp.on("mouseout", () => {
//   academicExpCircle.transition().attr("r", 250);
//   academicExpText.transition().text("100%");
// })

// Full: auxiliary
const auxExp = budgetCanvas.append("circle")
  .attr("r", 100)
  .attr("fill", "red")
  .attr("cx", centerX - 170)
  .attr("cy", centerY + 800)

// Full: administrative
const adminExp = budgetCanvas.append("circle")
  .attr("r", 125)
  .attr("fill", "red")
  .attr("cx", centerX - 440)
  .attr("cy", centerY + 350)

// Full: gifts and net assets released from restrictions
const giftsRev = budgetCanvas.append("circle")
  .attr("r", 80)
  .attr("fill", "green")
  .attr("cx", centerX - 460)
  .attr("cy", centerY - 600)

// Full: investment income
const investmentRev = budgetCanvas.append("circle")
  .attr("r", 120)
  .attr("fill", "green")
  .attr("cx", centerX - 310)
  .attr("cy", centerY - 400)

// Full: special program fees and other income
const specialRev = budgetCanvas.append("circle")
  .attr("r", 80)
  .attr("fill", "green")
  .attr("cx", centerX - 175)
  .attr("cy", centerY - 700)

// Full: student income
const studentRev = budgetCanvas.append("circle")
  .attr("r", 130)
  .attr("fill", "green")
  .attr("cx", centerX)
  .attr("cy", centerY - 500)

// Full: university-sponsored research
const uniResearchRev = budgetCanvas.append("circle")
  .attr("r", 135)
  .attr("fill", "green")
  .attr("cx", centerX + 190)
  .attr("cy", centerY - 770)

// Full: health care services
const healthRev = budgetCanvas.append("circle")
  .attr("r", 120)
  .attr("fill", "green")
  .attr("cx", centerX + 470)
  .attr("cy", centerY - 560)

// Full: SLAC-sponsored research
const slacRev = budgetCanvas.append("circle")
  .attr("r", 80)
  .attr("fill", "green")
  .attr("cx", centerX + 260)
  .attr("cy", centerY - 360)

export default node;