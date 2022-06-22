import { useEffect, useState } from "react";
import { ResponsivePie } from '@nivo/pie';

const BudgetExpense = () => {
  const data = [
    {
      "id": "Academic Units",
      "label": "Academic Units",
      "value": 5250.60,
      "color": "#B3C274"
    },
    {
      "id": "Administrative",
      "label": "Administrative",
      "value": 138.40,
      "color": "#7BB261"
    },
    {
      "id": "Auxiliary",
      "label": "Auxiliary",
      "value": 449.50,
      "color": "#5E9968"
    }
  ];
  const total = 5838.5;

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
  const handleArcLinkLabels = () => {
    return width < 750 ? false : true;
  }
  const handleMargins = () => {
    return width < 750 ? 40 : 200
  }

  function getTooltip(node) {
    let title = node.datum.id;
    let desc = "";
    switch(title) {
      case "Academic Units":
        desc = "This budget item is all of the divisions at Stanford that focus directly on education. It includes the different schools (Law, Engineering, etc.), research institutes (e.g. SLAC and Hoover), academic support divisions (e.g. Vice Provost for the Arts and Vice Provost for Undergraduate Education), and the libraries.";
        break;
      case "Administrative":
        desc = "This budget item includes all of the divisions at Stanford necessary for the institution to function but aren’t directly involved in the academic mission. It includes everything from the General Counsel’s Office to Student Affairs to The President and Provost’s Offices. ";
        break;
      case "Auxiliary":
        desc = "This budget item consists of Athletics and Residential & Dining Enterprises. In normal years (i.e. non-COVID) bothBoth of these auxiliaries function as (nearly) self-sustaining operations which provide important services for the university.";
        break;
      default:
        break;
    }

    title = width < 750 ? node.datum.id + ": " : "";

    return (
      <div style={{backgroundColor: 'white', 
                   borderRadius: 2, 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)',
                   width: 320,
                   fontSize: 16,
                   fontWeight: 'normal'}}>
        <div style={{padding: 12}}>
          <span><b>{title}</b>{desc}</span>
        </div>
      </div>
    )
  }
  
  return(
    <div style={{height: 500, fontWeight: 'bold'}}>
      <ResponsivePie
        data={data}
        // valueFormat='>-0,.2f'
        valueFormat={val => `${(val / total * 100).toFixed(1)}%`}
        margin={{ top: 50, bottom: 50, right: handleMargins(), left: handleMargins() }}
        innerRadius={0.5}
        startAngle={-200}
        endAngle={160}
        padAngle={1}
        cornerRadius={1}
        activeOuterRadiusOffset={8}
        colors={{ datum: 'data.color' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        enableArcLinkLabels={handleArcLinkLabels()}
        arcLinkLabelsSkipAngle={0}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={0}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 3 ] ] }}
        theme={{
          fontFamily: "Source Sans Pro, sans",
          fontSize: 18,
          textColor: 'black'
        }}
        tooltip={node => getTooltip(node)}
      />
    </div>
  )
}

export default BudgetExpense;