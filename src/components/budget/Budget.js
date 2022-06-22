import BudgetDesc from "./BudgetDesc";
import BudgetRevenue from "./BudgetRevenuePie";
import BudgetExpense from "./BudgetExpensePie";
import TimelineDesc from "./TimelineDesc";
import { useEffect, useState } from "react";

const Budget = () => {
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
  const divHeight = () => {
    return width < 750 ? 150 : 200;
  }

  return(
    <div id="budget" >
      <BudgetDesc />
      <div id="budget-graphic-div">
        <BudgetRevenue />
        <div style={{height: divHeight()}} />
        <BudgetExpense />
      </div>
      <div id="timeline-div">
        <TimelineDesc />
      </div>
    </div>
    
  );
}

export default Budget;