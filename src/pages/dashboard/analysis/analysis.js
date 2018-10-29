import React from 'react';
import { connect } from 'react-redux';
import {
  Row, Col, Icon, Tooltip,
} from 'antd';

class Analysis extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={6}>
            <h1>Col 1</h1>
          </Col>
          <Col span={6}><h1>Col 2</h1></Col>
          <Col span={6}><h1>Col 3</h1></Col>
          <Col span={6}><h1>Col 4</h1></Col>
        </Row>
      </div>
    );
  }
}

export default connect()(Analysis);
