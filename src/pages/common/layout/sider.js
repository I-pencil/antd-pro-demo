import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import isEqual from 'lodash/isEqual';
import pathToRegexp from 'path-to-regexp';
import menus from '@/routes/menu';
import styles from '../../dashboard.less';
import logo from '../../../assets/logo.svg';

const { Sider } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export default class SiderContainer extends Component {
  state = {
    openKeys: [],
    selectedKeys: [],
  };

  componentDidMount() {
    this.getCurrentItem(this.props.location);
  }

  getSnapshotBeforeUpdate(prevProps) {
    if (!isEqual(prevProps.location, this.props.location)) {
      return this.props.location;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) this.getCurrentItem(snapshot);
  }


  getCurrentItem = (location) => {
    const menuItems = menus.filter(item => item.rank === 2);
    let selectedItem;
    menuItems.forEach((menuItem) => {
      if (menuItem.path && pathToRegexp(menuItem.path).exec(location.pathname)) {
        selectedItem = menuItem;
      }
    });
    if (selectedItem) {
      const openKeys = menus.filter(item => item.id === selectedItem.pid).map(item => String(item.id));
      this.setState({
        openKeys,
        selectedKeys: [`${selectedItem.id}`],
      });
    }
  };

  handSubClick = (openKeys) => {
    this.setState({ openKeys });
  };

  render() {
    const { openKeys, selectedKeys } = this.state;
    const { collapsed } = this.props;

    const openMenuProps = collapsed ? {} : {
      openKeys,
      onOpenChange: this.handSubClick,
    };
    const menuProps = {
      inlineCollapsed: collapsed,
      mode: collapsed ? 'vertical' : 'inline',
      selectedKeys,
      ...openMenuProps,
    };

    const getMenus = () => {
      const subMenus = menus.filter(item => item.rank === 1);
      return subMenus.map((submenu) => {
        const menuItems = menus.filter(item => item.pid === submenu.id);
        const getMenuItems = () => menuItems.map(item => (
          <MenuItem key={item.id}>
            {item.icon && <Icon type={item.icon} />}
            <Link to={item.path}>{item.name}</Link>
          </MenuItem>
        ));
        const getSubTitle = () => (
          <span>
            {submenu.icon && <Icon type={submenu.icon} />}
            <span>{submenu.name}</span>
          </span>
        );
        return (
          <SubMenu key={submenu.id} title={getSubTitle()}>
            {getMenuItems()}
          </SubMenu>
        );
      });
    };

    return (
      <div>
        <Sider className={styles.container} breakpoint="xl" collapsed={collapsed} collapsible width="256">
          <div className={styles.logoContainer}>
            <img src={logo} alt="" className={styles.logo} />
            {!collapsed && <h1 className={styles.logoDesc}>Ant Design Pro</h1>}
          </div>
          <Menu
            theme="dark"
            {...menuProps}
          >
            {getMenus()}
          </Menu>
        </Sider>
      </div>
    );
  }
}

SiderContainer.propTypes = {
  location: PropTypes.object.isRequired,
  collapsed: PropTypes.bool.isRequired,
};
