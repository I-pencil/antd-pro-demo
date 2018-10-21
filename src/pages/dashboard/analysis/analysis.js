import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Icon, Tooltip } from 'antd';

class Analysis extends React.Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={6}>
          </Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
        </Row>
      </div>
    );
  }
}

export default connect()(Analysis);
