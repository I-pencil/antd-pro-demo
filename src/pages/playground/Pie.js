import React from 'react';
import { DataView } from '@antv/data-set';
import {
  Chart,
  Geom,
  Coord,
  Guide,
} from 'bizcharts';

const { Html } = Guide;

export default () => {
  const dataV = [
    {
      type: '分类一',
      value: 20,
    },
    {
      type: '分类二',
      value: 18,
    },
    {
      type: '分类三',
      value: 32,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: 'Other',
      value: 15,
    },
  ];
  const dv = new DataView();
  dv.source(dataV).transform({
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent',
  });
  const colsV = {
    percent: {
      formatter: val => `${val * 100}%`,
    },
  };
  return (
    <Chart data={dv} scale={colsV} height={300} forceFit>
      <Coord type="theta" innerRadius={0.7} />
      <Guide>
        <Html
          position={['50%', '50%']}
          alignX="middle"
          alignY="middle"
          html="<div>销售量</div>"
        />
      </Guide>
      <Geom type="intervalStack" position="percent" color="type" />
    </Chart>
  );
};
