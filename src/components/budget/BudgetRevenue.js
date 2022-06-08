import { useState } from "react";
import { ResponsiveCirclePacking } from '@nivo/circle-packing';

const BudgetRevenue = () => {
  const [ zoomedId, setZoomedId ] = useState(null);

  const data = {
    name: "Revenues",
    children: [
      {
        id: "Gifts and Net Assets",
        name: "Gifts and Net Assets include yada yada yada",
        color: "hsl(40, 70%, 50%)",
        value: 445.10,
      },
      {
        id: "University-sponsored Research",
        name: "University-sponsored Research include yada yada yada",
        color: "hsl(40, 70%, 50%)",
        value: 1147.00,
      },
      {
        id: "Investment Income",
        name: "Investment Income include yada yada yada",
        color: "hsl(40, 70%, 50%)",
        value: 1657.60,
      },
      {
        id: "Special Program Fees and Other Income",
        name: "Special Program Fees and Other Income include yada yada yada",
        color: "hsl(40, 70%, 50%)",
        value: 578.70,
      },
      {
        id: "Health Care Services",
        name: "Health Care Services include yada yada yada",
        color: "hsl(40, 70%, 50%)",
        value: 1423.80,
      },
      {
        id: "Student Income",
        name: "Student Income include yada yada yada",
        color: "hsl(40, 70%, 50%)",
        value: 1017.60,
      },
      {
        id: "SLAC Sponsored Research",
        name: "SLAC Sponsored Research include yada yada yada",
        color: "hsl(40, 70%, 50%)",
        value: 488.40,
      },
    ]
  }

  function getLabel(node) {
    let percent = node.percentage.toFixed(2);
    return `${percent}%`
  }

  function getTooltip(node) {
    let term = node.id;
    let amount = node.value.toFixed(2);
    let examples = "";
    switch(term) {
      case "Gifts and Net Assets":
        examples = "[examples for gifts]"
        break;
      case "University-sponsored Research":
        examples = "[examples for usr]"
        break;
      case "Investment Income":
        examples = "[examples for ii]"
        break;
      case "Special Program Fees and Other Income":
        examples = "[examples for special]"
        break;
      case "Health Care Services":
        examples = "[examples for health cs]"
        break;
      case "Student Income":
        examples = "[examples for stuincome]"
        break;
      case "SLAC Sponsored Research":
        examples = "[examples for slac]"
        break;
      default:
        break;
    }
    return(
      <div style={{width: 450, 
                   height: '100%',
                   backgroundColor: 'white', 
                   borderRadius: 2, 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)', 
                   textAlign: 'center',}}>
        <span><b>{node.id}</b>: <i>${amount}</i> comes from things like {examples}.</span>
      </div>
    );
  }

  return(
    <div id="budget-revenue" style={{height: 600}}>
      <ResponsiveCirclePacking 
        leavesOnly
        margin={{top: 50, bottom: 50}}
        data={data}
        id="id"
        value="value"
        valueFormat=">-$0,.2f"
        colors={{ scheme: 'category10' }}
        colorBy="id"
        childColor={{ from: 'color', modifiers: [ [ 'brighter', 0.4 ] ] }}
        padding={10}
        enableLabels
        label={node => getLabel(node)}
        labelsSkipRadius={200}
        labelTextColor="white"
        borderWidth={2}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.5 ] ] }}
        onClick={ node => setZoomedId(zoomedId === node.id ? null : node.id)}
        zoomedId={zoomedId}
        theme={{
          fontFamily: "Source Sans Pro, sans",
          fontSize: 100,
        }}
        tooltip={node => getTooltip(node)}
      />
    </div>
  );
};

export default BudgetRevenue;