import "../App.css"
import { useState, useEffect } from "react"
import ApexChart from "/Users/nilsdambowy/GitHub/basicdashboard/src/components/DashboardChart";

export default function Dashboard() {
  const [showcasePlot, setPlotOverlay] = useState(false);

  const handleClick = () => {
    setPlotOverlay(!showcasePlot);
  }

  const [fullscreenMode, setFullscreenMode] = useState(false);

  const handleFullscreen = () => {
    setFullscreenMode(!fullscreenMode);
  }
  useEffect(() => {
    console.log(showcasePlot);
  }, [showcasePlot]);

  useEffect(() => {
    console.log(fullscreenMode);
  }, [fullscreenMode]);

  return (
    <div className="grid" id="dash-button-container">
        {!fullscreenMode? null :null }
        {!showcasePlot? <button className="btn w-40 rounded-full" onClick={handleClick} id="open-btn">+</button> :
       <>
       <button className="btn btn-xs btn-square" onClick={handleFullscreen} id="fs-btn">FS</button>
       <button className="btn btn-xs btn-square" onClick={handleClick} id="close-btn">X</button>
       <div id="#chart">
       <ApexChart/>
          </div>
       
        </>
        }
        
    </div>
  )
}