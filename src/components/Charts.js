import React from 'react';
import TwoLevelPieChart from './BarChart/SimpleRadialBarChart'
import SimpleBarChart from './BarChart/SimpleBarChart'
import TinyBarChart from './BarChart/TinyBarChart'
import TinyLineChart from './LineChart/TinyLineChart'
import PieChartWithPaddingAngle from './PieChart/PieChartWithPaddingAngle'
import CustomActiveShapePieChart from './PieChart/CustomActiveShapePieChart'
import StraightAnglePieChart from './PieChart/StraightAnglePieChart'
import PieChartWithCustomizedLabel from './PieChart/PieChartWithCustomizedLabel'
import SimpleRadialBarChart from './PieChart/TwoLevelPieChart'
import SpecifiedDomainRadarChart from './RadarChart/SpecifiedDomainRadarChart'
import SameDataComposedChart from './ComposedChart/SameDataComposedChart'

function Charts(props) {
    console.log(!props.name=='TinyBarChart')
    if (props.name=='TinyBarChart') return <TinyBarChart />;
    if (props.name=='StraightAnglePieChart') return <StraightAnglePieChart />;
    
  return (
    <section>
            Test
    </section>
  );
}

export default Charts;