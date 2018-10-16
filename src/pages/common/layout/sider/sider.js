import React from 'react';
import { Layout, Menu } from 'antd';
import styles from './sider.less';
const { Sider } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export default class SiderWrapper extends React.Component {
  render() {
    return (
      <div>
        <Sider className={styles.container}>
          <div className={styles.logo}><h1>Pro Demo</h1></div>
          <Menu
            mode="inline"
            theme="dark"
          >
            <SubMenu title="Dashboard">
              <MenuItem>分析页</MenuItem>
              <MenuItem>监控页</MenuItem>
              <MenuItem>工作台</MenuItem>
            </SubMenu>
            <SubMenu title="表单页">
              <MenuItem>基础表单</MenuItem>
              <MenuItem>分步表单</MenuItem>
              <MenuItem>高级表单</MenuItem>
            </SubMenu>
          </Menu>
        </Sider>
      </div>
    )
  }
}
