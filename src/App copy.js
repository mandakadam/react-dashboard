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
            <TinyBarChart isShow={TinyBarChart} />
            <StraightAnglePieChart />
            <TinyLineChart />
            <PieChartWithPaddingAngle />
            <SameDataComposedChart />
            <TwoLevelPieChart />
            <SimpleBarChart />
            <SpecifiedDomainRadarChart />
            <CustomActiveShapePieChart />
            <SimpleRadialBarChart />
            <PieChartWithCustomizedLabel />
    </section>
  );
}

export default App;
