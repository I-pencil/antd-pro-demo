import React, { Component } from 'react';
import {
  Row, Col, Tooltip, Icon,
} from 'antd';
import ChartCard from '@/components/Charts/ChartCard';
import Trend from '@/components/Trend';
import StatisticalCell from './StatisticalCell';
// import styles from './analysis.less';

const colResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {
    marginButtom: 24,
  },
};

class Statistical extends Component {
  state = {};

  render() {
    return (
      <div>
        <Row gutter={24}>
          <Col {...colResponsiveProps}>
            <ChartCard
              title={<StatisticalCell label="总销售额" value="￥126,560" />}
              extra={<Tooltip title="指标说明"><Icon type="info-circle" /></Tooltip>}
              actions={<div>122</div>}
              contentheight={46}
              bordered={false}
            >
              <Trend label="周同比" value="12%" flag="up" style={{ marginRight: 16 }} />
              <Trend label="日同比" value="11%" flag="down" />
            </ChartCard>
          </Col>
          <Col {...colResponsiveProps}><h1>Col 2</h1></Col>
          <Col {...colResponsiveProps}><h1>Col 3</h1></Col>
          <Col {...colResponsiveProps}><h1>Col 4</h1></Col>
        </Row>
      </div>
    );
  }
}

export default Statistical;
