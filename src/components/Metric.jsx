import { useState, useEffect } from "react"
import "../App.css"
import ApexChart from "/Users/nilsdambowy/GitHub/basicdashboard/src/components/MetricChart";

export default function Metric() {
    const [showcasePlot, setPlotOverlay] = useState(false);

    const handleClick = () => {
        setPlotOverlay(!showcasePlot);
    }
    
    useEffect(() => {
        console.log(showcasePlot);
      }, [showcasePlot]);

    return (
        <div className="grid" id="metric-container">
            {!showcasePlot? <button className="btn w-40 rounded-full" onClick={handleClick} id="open-btn">+</button> :
        <>
        <button className="btn btn-xs btn-square" onClick={handleClick} id="close-btn">X</button>
        <div>
        <ApexChart/>
        <p id="metric-text">Current Metrics</p>
            </div>
        
            </>
            }
            
        </div>
    )
}   