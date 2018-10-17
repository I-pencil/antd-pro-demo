import React from 'react';
import { Layout } from 'antd';
import styles from './dashboard.less';

import Sider from './common/layout/sider/sider';
const { Header, Content, Footer } = Layout;

export default class DashBoard extends React.Component {
  render() {
    return (
      <Layout className={styles.container}>
        <Sider></Sider>
        <Layout className={styles['dashboard-main']}>
          <Header className={styles.header}>
            头部
          </Header>
          <Content className={styles.content}>
            {this.props.children}
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    );
  }
}
