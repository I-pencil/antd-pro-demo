import React from 'react';
import { Layout } from 'antd';
import styles from './dashboard.less';

import Sider from './common/layout/sider/sider';
import Header from './common/layout/header/header';
const { Content, Footer } = Layout;

export default class DashBoard extends React.Component {
  state = {
    collapsed: true,
  }
  toggleCollapsed = () => {
    this.setState(pre => ({ collapsed: !pre.collapsed }));
  };
  render() {
    const { collapsed } = this.state;
    return (
      <Layout className={styles.container}>
        <Sider {...this.props} collapsed={collapsed}></Sider>
        <Layout className={styles['dashboard-main']}>
          <Header handleClick={this.toggleCollapsed} collapsed={collapsed} />
          <Content className={styles.content}>
            {this.props.children}
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    );
  }
}
