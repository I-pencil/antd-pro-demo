import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import isEqual from 'lodash/isEqual';
import pathToRegexp from 'path-to-regexp';
import styles from './sider.less';
import menus from '@/routes/menu';

const { Sider } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export default class SiderWrapper extends React.Component {
  state = {
    openKeys: [],
    inlineCollapsed: false,
    selectedKeys: [],
  };
  componentDidMount() {
    this.getCurrentItem(this.props.location);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.location, this.props.location)) {
      this.getCurrentItem(nextProps.location);
    }
  }

  getMenus = () => {
    const subMenus = menus.filter((item) => item.rank === 1);
    return subMenus.map((submenu) => {
      const menuItems = menus.filter((item) => item.pid === submenu.id);
      const getMenuItems = () => {
        return menuItems.map((item) => {
          return (
            <MenuItem key={item.id}>
              {item.icon && <Icon type={item.icon} />}
              <Link to={item.path}>{item.name}</Link>
            </MenuItem>
          );
        });
      }
      return <SubMenu key={submenu.id} title={submenu.name}>
        {getMenuItems()}
      </SubMenu>
    })
  };

  getCurrentItem = (location) => {
    const menuItems = menus.filter((item) => item.rank === 2);
    let selectedItem;
    menuItems.forEach(menuItem => {
      if (menuItem.path && pathToRegexp(menuItem.path).exec(location.pathname)) {
        selectedItem = menuItem;
      }
    });
    if (selectedItem) {
      const openKeys = menus.filter((item) => item.pid === selectedItem.pid).map(item => Object.prototype.toString(item.id));
      this.setState({
        openKeys,
        selectedKeys: [`${selectedItem.id}`]
      });
    }
  }

  render() {
    const { inlineCollapsed, openKeys, selectedKeys } = this.state;
    const menuProps = {
      openKeys,
      selectedKeys,
    }
    return (
      <div>
        <Sider className={styles.container}>
          <div className={styles.logo}><h1>Pro Demo</h1></div>
          <Menu
            mode="inline"
            theme="dark"
            inlineCollapsed={inlineCollapsed}
            {...menuProps}
          >
            {this.getMenus()}
          </Menu>
        </Sider>
      </div>
    )
  }
}
