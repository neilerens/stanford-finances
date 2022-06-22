import { useEffect, useState } from "react";
import { ResponsiveSankey } from "@nivo/sankey";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  nodeStyle: {
    fontWeight: "bold"
  }
})

const SankeyGraph = () => {
  const classes = useStyles();
  const data = {
    "nodes": [
      {
        "id": "AverageUndergraduateTuition",
        "nodeColor": '#e27f6a'
      },
      {
        "id": "AverageFinancialAidGivenbyStanford",
        "nodeColor": '#bb5a52'
      },
      {
        "id": "WhatStanfordCovers",
        "nodeColor": '#fab779'
      },
      {
        "id": "",
        "nodeColor": '#f8ce73'
      },
      {
        "id": "Instruction/Dep'tResearch",
        "nodeColor": '#b3c274'
      },
      {
        "id": "FinancialAidCosts",
        "nodeColor": '#7bb261'
      },
      {
        "id": "DepartmentalAdministration",
        "nodeColor": '#5e9968'
      },
      {
        "id": "Library",
        "nodeColor": '#74c2a1'
      },
      {
        "id": "FacilitiesO&MExpenses",
        "nodeColor": '#70ab92'
      },
      {
        "id": "StudentServices",
        "nodeColor": '#98d6b9'
      },
      {
        "id": "Administration(G&A)",
        "nodeColor": '#93d1df'
      },
      {
        "id": "Depreciation",
        "nodeColor": '#72b6cb'
      },
      {
        "id": "Institutional/Community",
        "nodeColor": '#69adb6'
      }
    ],
    "links": [
      {
        "source": "AverageUndergraduateTuition",
        "target": "",
        "value": 39082.50,
        "nodeColor": "#000000"
      },
      {
        "source": "AverageFinancialAidGivenbyStanford",
        "target": "",
        "value": 39082.50,
        "nodeColor": "#000000"
      },
      {
        "source": "WhatStanfordCovers",
        "target": "",
        "value": 77643.67,
        "nodeColor": "#000000"
      },
      {
        "source": "",
        "target": "Instruction/Dep'tResearch",
        "value": 69624.43,
        "nodeColor": "#000000"
      },
      {
        "source": "",
        "target": "FinancialAidCosts",
        "value": 31755.31,
        "nodeColor": "#000000"
      },
      {
        "source": "",
        "target": "DepartmentalAdministration",
        "value": 19275.27,
        "nodeColor": "#000000"
      },
      {
        "source": "",
        "target": "FacilitiesO&MExpenses",
        "value": 7609.43,
        "nodeColor": "#000000"
      },
      {
        "source": "",
        "target": "Library",
        "value": 7479.56,
        "nodeColor": "#000000"
      },
      {
        "source": "",
        "target": "StudentServices",
        "value": 7082.68,
        "nodeColor": "#000000"
      },
      {
        "source": "",
        "target": "Administration(G&A)",
        "value": 5088.03,
        "nodeColor": "#000000"
      },
      {
        "source": "",
        "target": "Depreciation",
        "value": 4740.75,
        "nodeColor": "#000000"
      },
      {
        "source": "",
        "target": "Institutional/Community",
        "value": 3153.21,
        "nodeColor": "#000000"
      }
    ]
  }
  function getLinkTooltip(node) {
    let desc = "";
    let val = "";
    switch(node.source.label) {
      case "AverageUndergraduateTuition":
        desc = "This category is the average amount that students actually pay in tuition (many students receive financial aid).";
        val = "$39,082.50"
        break;
      case "AverageFinancialAidGivenbyStanford":
        desc = "This category is the average amount of financial aid per student. ";
        val = "$39,082.50"
        break;
      case "WhatStanfordCovers":
        desc = "This category is the amount Stanford ends up paying over and above what students pay for their own education. This is the indirect subsidy Stanford pays.";
        val = "$77,643.67"
        break;
      default:
        break;
    }
    switch(node.target.label) {
      case "Instruction/Dep'tResearch":
        desc = "This category includes the direct costs of research and teaching and consists of pay for faculty, lecturers, and research staff and other research and teaching related expenses. ";
        val = "$69,624.43"
        break;
      case "FinancialAidCosts":
        desc = "This category is money Stanford spends on financial aid (does not include external financial aid).";
        val = "$31,755.31"
        break;
      case "DepartmentalAdministration":
        desc = "This category includes the costs of running departments like the departmental administrators. ";
        val = "$19,275.27"
        break;
      case "Library":
        desc = "This category includes the costs of running the library. ";
        val = "$7,479.56"
        break;
      case "FacilitiesO&MExpenses":
        desc = "This category is the amount spent to keep the physical buildings at Stanford up and running.";
        val = "$7,609.43"
        break;
      case "StudentServices":
        desc = "This category includes admissions, academic advising, career planning, and other non-academic directly student facing services.";
        val = "$7,082.68"
        break;
      case "Administration(G&A)":
        desc = "This category includes all of the general costs that go into running a large institution like HR, legal counsel, IT, etc.";
        val = "$5,088.03"
        break;
      case "Depreciation":
        desc = "This category reflects the general decline in value that comes from the wear and tear on Stanford’s buildings and other assets.";
        val = "$4,740.75"
        break;
      case "Institutional/Community":
        desc = "This category is a catch all that includes things like Haas, Vaden, and the Community Centers.";
        val = "$3,153.21"
        break;
      default:
        break;
    }
    
    return (
      <div style={{
        backgroundColor: 'white',
        borderRadius: 2,
        width: 320,
        fontSize: 16,
        whiteSpace: 'normal'
      }}>
        <div>
          <span><b>{val}</b>: {desc}</span>
        </div>
      </div>
    )
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
  const { width } = useWindowDimensions();
  const handleLabelPosition = () => {
    return width < 750 ? "inside" : "outside";
  }

  return(
    <Grid container justify="center" xs={12}>
      <Grid container item xs="12" justify="center">
        <h3 class="graphic-margin">2020-2021 Academic Year</h3>
      </Grid>
      <Grid item sm={0} md={1} lg={2}/>
      <Grid  container item sm={12} md={10} lg={8} alignItems="center" style={{height: "500px", minWidth: "700px"}}>
        <ResponsiveSankey
          data={data}
          sort="descending"
          margin={{ top: 20, bottom: 20, left: 180, right: 180}}
          align="center"
          colors={node => node.nodeColor}
          nodeOpacity={1}
          nodeThickness={18}
          nodeInnerPadding={3}
          nodeSpacing={10}
          nodeStyle={{display: "flex", justifyContent: "space-evenly"}}
          nodeBorderWidth={0}
          nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
          nodeTooltip={node =>
            (node.label === "") ? <span className={classes.nodeStyle}>Total Cost: $155,808.67</span> :
            <span className={classes.nodeStyle}>{node.label}</span>
          }
          linkTooltip={node => getLinkTooltip(node)}
          linkOpacity={0.5}
          linkHoverOpacity={0.7}
          linkHoverOthersOpacity={0.3}
          enableLinkGradient={true}
          labelPosition={handleLabelPosition()}
          labelOrientation="horizontal"
          labelPadding={10}
          labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
          theme={{
            fontFamily: "Source Sans Pro, sans",
            fontSize: 14,
          }}
        />
      </Grid>
      <Grid item sm={0} md={1} lg={2}/>
    </Grid>
  )
};

export default SankeyGraph;