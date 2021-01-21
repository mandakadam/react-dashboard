import './App.scss';
import TwoLevelPieChart from './components/BarChart/SimpleRadialBarChart'
import SimpleBarChart from './components/BarChart/SimpleBarChart'
import TinyBarChart from './components/BarChart/TinyBarChart'
import TinyLineChart from './components/LineChart/TinyLineChart'
import PieChartWithPaddingAngle from './components/PieChart/PieChartWithPaddingAngle'

import CustomActiveShapePieChart from './components/PieChart/CustomActiveShapePieChart'
import StraightAnglePieChart from './components/PieChart/StraightAnglePieChart'
import PieChartWithCustomizedLabel from './components/PieChart/PieChartWithCustomizedLabel'
import SimpleRadialBarChart from './components/PieChart/TwoLevelPieChart'
import SpecifiedDomainRadarChart from './components/RadarChart/SpecifiedDomainRadarChart'
import SameDataComposedChart from './components/ComposedChart/SameDataComposedChart'
function App() {
  return (
    <section>
      <div className="grid-layout">
          <div className="grid-item">
            <TinyBarChart />
          </div>

          <div className="grid-item">
            <StraightAnglePieChart />
          </div>
          <div className="grid-item">
            <TinyLineChart />
          </div>
          <div className="grid-item">
            <PieChartWithPaddingAngle />
          </div>
      </div>
      <div className="grid-layout">
          <div className="grid-item span-2 span-row-2">
            <SameDataComposedChart />
          </div>
          <div className="grid-item span-2 span-row-2">
            <TwoLevelPieChart />
          </div>
          <div className="grid-item span-2 span-row-2">
            <SimpleBarChart />
          </div>
        
          <div className="grid-item span-row-2">
            <SpecifiedDomainRadarChart />
          </div>
          <div className="grid-item span-row-2">
            <CustomActiveShapePieChart />
          </div>
          <div className="grid-item span-2 span-row-2">
            <SimpleRadialBarChart />
          </div>
          <div className="grid-item span-2 span-row-2">
            <PieChartWithCustomizedLabel />
          </div>
      </div>
    </section>
  );
}

export default App;
