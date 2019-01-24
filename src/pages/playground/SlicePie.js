import React from 'react';
import { DataView } from '@antv/data-set';
import {
  Chart,
  Geom,
  Coord,
  Guide,
  Tooltip,
  Shape,
} from 'bizcharts';

const { Html } = Guide;

export default class SlicePie extends React.PureComponent {
  render() {
    const sliceNumber = 0.01; // 自定义 other 的图形，增加两条线
    Shape.registerShape('interval', 'slicePie', {
      draw(cfg, container) {
        const points = cfg.points;
        let path = [];
        path.push(['M', points[0].x, points[0].y]);
        path.push(['L', points[1].x, points[1].y - sliceNumber]);
        path.push(['L', points[2].x, points[2].y - sliceNumber]);
        path.push(['L', points[3].x, points[3].y]);
        path.push('Z');
        path = this.parsePath(path);
        return container.addShape('path', {
          attrs: {
            fill: cfg.color,
            path,
          },
        });
      },
    });
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
        <Tooltip showTitle={false} />
        <Geom type="intervalStack" position="percent" color="type" shape="slicePie" />
      </Chart>
    );
  }
}
