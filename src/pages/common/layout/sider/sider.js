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
            <SubMenu title="Dashboard">
              <MenuItem><Link to='/dashboard/analysis'>分析页</Link></MenuItem>
              <MenuItem><Link to='/dashboard/monitor'>监控页</Link></MenuItem>
              <MenuItem><Link to='/dashboard/workplace'>工作台</Link></MenuItem>
            </SubMenu>
            <SubMenu title="表单页">
              <MenuItem><Link to=''>基础表单</Link></MenuItem>
              <MenuItem><Link to=''>分步表单</Link></MenuItem>
              <MenuItem><Link to=''>高级表单</Link></MenuItem>
            </SubMenu>
            <SubMenu title="列表页">
              <MenuItem><Link to=''>查询表格</Link></MenuItem>
              <MenuItem><Link to=''>标准列表</Link></MenuItem>
              <MenuItem><Link to=''>卡片列表</Link></MenuItem>
              <MenuItem><Link to=''>搜索列表</Link></MenuItem>
            </SubMenu>
            <SubMenu title="详情页">
              <MenuItem><Link to=''>基础详情页</Link></MenuItem>
              <MenuItem><Link to=''>高级详情页</Link></MenuItem>
            </SubMenu>
            <SubMenu title="结果页">
              <MenuItem><Link to=''>成功页</Link></MenuItem>
              <MenuItem><Link to=''>失败页</Link></MenuItem>
            </SubMenu>
            <SubMenu title="个人页">
              <MenuItem><Link to=''>个人中心</Link></MenuItem>
              <MenuItem><Link to=''>个人设置</Link></MenuItem>
            </SubMenu>
          </Menu>
        </Sider>
      </div>
    )
  }
}
