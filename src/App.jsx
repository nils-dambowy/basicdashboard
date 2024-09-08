import './App.css'
import Dashboard from './components/Dashboard'
import Metric from './components/Metric'
import Overview from './components/Overview'
import Radial from './components/Radial'

function App() {
  return (
   <> 
    <div className="dashboards">
      <Dashboard />
      <Dashboard />
    </div>
    <div className="currentMetrics">
      <Metric />
      <Metric />
      <Metric />
    </div>
    <div className="idk">
      <Radial />
      <Radial />
    </div>
    <div className='overview'>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">Project Overview</h1>
      <Overview />
      <Overview />
    </div>
  </>
  )
}

export default App
