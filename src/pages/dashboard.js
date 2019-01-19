import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import styles from './dashboard.less';
import Sider from './common/layout/sider';
import Header from './common/layout/header';
import * as common from '@/store/actions/common';

const { Content, Footer } = Layout;

class DashBoard extends React.Component {
  state = {
    // collapsed: false,
  }

  toggleCollapsed = () => {
    const { dispatch, collapsed } = this.props;
    dispatch(common.createMenuCollapsed(!collapsed));
  };

  render() {
    const { children, collapsed } = this.props;
    return (
      <Layout className={styles.container}>
        <Sider {...this.props} collapsed={collapsed} />
        <Layout className={styles['dashboard-main']}>
          <Header handleClick={this.toggleCollapsed} collapsed={collapsed} />
          <Content className={styles.content}>
            { children }
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

DashBoard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
};

const mapStateToProps = ({ dashboardData }) => {
  const {
    collapsed = false,
  } = dashboardData;
  return {
    collapsed,
  };
};

export default connect(mapStateToProps)(DashBoard);
