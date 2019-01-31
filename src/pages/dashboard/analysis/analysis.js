import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';

const StatisticalRow = React.lazy(() => import('./StatisticalRow'));

class Analysis extends Component {
  state = {};

  render() {
    return (
      <Suspense fallback={<div>loading...</div>}>
        <StatisticalRow />
      </Suspense>
    );
  }
}

export default connect()(Analysis);
