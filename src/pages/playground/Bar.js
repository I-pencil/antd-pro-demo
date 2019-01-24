import React from 'react';
import {
  Chart,
  Axis,
  Geom,
  Tooltip,
} from 'bizcharts';

export default () => {
  const cols = {
    sales: {
      tickInterval: 20,
    },
  };
  const data = [
    {
      month: '1 月',
      sales: 38,
    },
    {
      month: '2 月',
      sales: 52,
    },
    {
      month: '3 月',
      sales: 61,
    },
    {
      month: '4 月',
      sales: 145,
    },
    {
      month: '5 月',
      sales: 48,
    },
    {
      month: '6 月',
      sales: 38,
    },
    {
      month: '7 月',
      sales: 38,
    },
    {
      month: '8 月',
      sales: 38,
    },
  ];
  const tooltip = [
    'month*sales',
    (x, y) => ({
      name: x,
      value: y,
    }),
  ];
  return (
    <Chart data={data} scale={cols} height={300} forceFit>
      <Axis name="month" />
      <Axis name="sales" />
      <Tooltip showTitle={false} crosshairs={false} />
      <Geom type="interval" position="month*sales" tooltip={tooltip} />
    </Chart>
  );
};
