import { useState } from "react";
import { ResponsiveCirclePacking } from '@nivo/circle-packing';

const BudgetExpense = () => {
  const [ zoomedId, setZoomedId ] = useState(null);

  const data = {
    name: "Expenses",
    color: "hsl(124, 70%, 100%)",
    children: [
      {
        id: "Academic Units",
        color: "hsl(40, 70%, 50%)",
        value: 5250.60
      },
      {
        id: "Administrative",
        color: "hsl(40, 70%, 50%)",
        value: 138.40
      },
      {
        id: "Auxiliary",
        color: "hsl(40, 70%, 50%)",
        value: 449.50
      }
    ]
  }

  function getLabel(node) {
    let percent = node.percentage.toFixed(2);
    //return `${percent}%`;
    return `<div>hooray</div>`
  }

  function getTooltip(node) {
    let term = node.id;
    let amount = node.value.toFixed(2);
    let examples = "";
    switch(term) {
      case "Academic Units":
        examples = "[examples for academic units]"
        break;
      case "Administrative":
        examples = "[examples for administrative]"
        break;
      case "Auxiliary":
        examples = "[examples for auxiliary]"
        break;
      default:
        break;
    }
    return(
      <div style={{width: 400, 
                   height: '100%',
                   backgroundColor: 'white', 
                   borderRadius: 2, 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)', 
                   textAlign: 'center',}}>
        <span><b>{node.id}</b>: <i>${amount}</i> is allocated for things like {examples}.</span>
      </div>
    );
  }

  return(
    <div id="budget-expense" style={{height: 600}}>
      <ResponsiveCirclePacking 
        leavesOnly
        margin={{top: 50, bottom: 50}}
        data={data}
        id="id"
        value="value"
        valueFormat=">-$0,.2f"
        colors={{ scheme: 'nivo' }}
        colorBy="id"
        childColor={{ from: 'color', modifiers: [ [ 'brighter', 0.4 ] ] }}
        padding={10}
        enableLabels={true}
        //label={node => getLabel(node)}
        label="<div>hooray</div>"
        labelsSkipRadius={230}
        labelTextColor="white"
        borderWidth={2}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.5 ] ] }}
        onClick={node => setZoomedId(zoomedId === node.id ? null : node.id)}
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

export default BudgetExpense;