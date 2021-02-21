import React from 'react'
import BarChart from './components/BarChart';
import Doughnuts from './components/Doughnut';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';
import './layout.scss'

const App = () => {
  return (
    <div>
      <div className="layout">
        <div className="blog-item">
      <BarChart/>
        </div>
        <div className="blog-item">
      <PieChart/>
        </div>
        <div className="blog-item">
      <Doughnuts/>
        </div>
        <div className="blog-item">
      <LineChart/>
        </div>
      </div>
    </div>
  )
}

export default App
