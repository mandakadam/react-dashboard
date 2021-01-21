import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/pb1jwdt1/';

  render() {
    return (
    <ResponsiveContainer>
      <PieChart width={'100%'} height={'100%'}>
        <Pie dataKey="value" startAngle={180} endAngle={0} data={data} cx={'50%'} cy={'100%'} outerRadius={80} fill="#8884d8" label />
      </PieChart>
      </ResponsiveContainer>
    );
  }
}
