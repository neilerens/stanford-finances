import { useEffect, useState } from "react";
import { ResponsivePie } from '@nivo/pie';

const BudgetRevenue = () => {
  const data = [
    {
      "id": "University-sponsored Research",
      "label": "University-sponsored Research",
      "value": 1147.00,
      "color": "#bb5a52"
    },

    {
      "id": "Investment Income",
      "label": "Investment Income",
      "value": 1657.60,
      "color": "#f6b792"
    },
    {
      "id": "Health Care Services",
      "label": "Health Care Services",
      "value": 1423.80,
      "color": "#ffc9b2"
    },
    {
      "id": "Student Income",
      "label": "Student Income",
      "value": 1017.60,
      "color": "#e27f6a"
    },
    {
      "id": "SLAC Sponsored Research",
      "label": "SLAC Sponsored Research",
      "value": 488.40,
      "color": "#f8b972"
    },
    {
      "id": "Special Program Fees & Other Income",
      "label": "Special Program Fees & Other Income",
      "value": 578.70,
      "color": "#e99469"
    },
    {
      "id": "Gifts & Net Assets",
      "label": "Gifts & Net Assets",
      "value": 445.10,
      "color": "#fbce73"
    },
  ];
  const total = 6758.2;

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
      case "Gifts & Net Assets":
        desc = "Expendable gifts are donations that are immediately available for purposes specified by the donor. Net assets released from restrictions include cash payments on gift pledges made in prior years, as well as pending gifts whose designation has been determined.";
        break;
      case "University-sponsored Research":
        desc = "This includes revenue from federally sponsored and non-federally sponsored research, excluding SLAC.";
        break;
      case "Investment Income":
        desc = "Stanford has a ~$29B endowment, which is composed of donations and land that the university owns. The Stanford Management Company invests the endowment on behalf of the university. A portion of the interest earned is used to fund the university budget. The rest of the interest earned is reinvested back into the endowment. The goal of the endowment is to fund the university in perpetuity.";
        break;
      case "Special Program Fees & Other Income":
        desc = "This revenue source is a collection of revenue streams that includes executive education, industrial affiliate,, pre-collegiate, and professional certificate fees; travel/study programs fees; technology licensing and patent income; as well as rental income from Stanford West, Colonnade, and Welch Road apartments. It also includes revenue from athletics (e.g. ticket sales and broadcast fees) and revenue from conference and symposium events.";
        break;
      case "Health Care Services":
        desc = "This revenue mostly comes from payments from the hospitals to the School of Medicine (SOM) for faculty physician services. The SOM “loans” faculty physicians to the hospital for clinical work. The hospitals reimburse the SOM, which pays the salaries of faculty physicians. Health care services revenue has been the fastest growing element of the Consolidated Budget over the past 15 years, with a compound annual growth rate of 11%.";
        break;
      case "Student Income":
        desc = "This includes all revenue the university receives from tuition and room and board payments.";
        break;
      case "SLAC Sponsored Research":
        desc = "This includes revenue from federally sponsored and non-federally sponsored research at the SLAC National Accelerator Laboratory, a research and development center for the Dept. of Energy.";
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
        sortByValue
        // valueFormat='>-$0,.2f'
        valueFormat={val => `${(val / total * 100).toFixed(1)}%`}
        margin={{ top: 50, bottom: 50, right: handleMargins(), left: handleMargins() }}
        innerRadius={0.5}
        startAngle={30}
        endAngle={390}
        padAngle={1}
        cornerRadius={1}
        activeOuterRadiusOffset={8}
        colors={{ datum: 'data.color' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        enableArcLinkLabels={handleArcLinkLabels()}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 3 ] ] }}
        theme={{
          fontFamily: "Source Sans Pro, sans",
          fontSize: 18,
        }}
        tooltip={node => getTooltip(node)}
      />
    </div>
  )
}

export default BudgetRevenue;