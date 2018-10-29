import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Tooltip, Icon, Badge, Row, Col, Dropdown, Menu,
} from 'antd';
import { Link } from 'react-router-dom';
import avator from '@/assets/avator.png';

import styles from '../../dashboard.less';

const MenuItem = Menu.Item;
const MenuDivider = Menu.Divider;

const { Header } = Layout;

const HeaderContainer = ({
  handleClick,
  collapsed,
}) => {
  const getDropdown = () => (
    <Menu>
      <MenuItem key="1" className={styles['drop-item']}>
        <Link to="/table/lsit">
          <Icon type="user" className={styles['drop-icon']} />
个人中心
        </Link>
      </MenuItem>
      <MenuItem key="2" className={styles['drop-item']}>
        <Link to="/table/lsit">
          <Icon type="setting" className={styles['drop-icon']} />
个人设置
        </Link>
      </MenuItem>
      <MenuItem key="3" className={styles['drop-item']}>
        <Link to="/table/lsit">
          <Icon type="close-circle" className={styles['drop-icon']} />
            触发报错
        </Link>
      </MenuItem>
      <MenuDivider />
      <MenuItem key="4" className={styles['drop-item']}>
        <Link to="/table/lsit">
          <Icon type="logout" className={styles['drop-icon']} />
            退出登录
        </Link>
      </MenuItem>
    </Menu>
  );
  return (
    <Header className={styles.header}>
      <Row type="flex" justify="space-between">
        <Col>
          <div onClick={handleClick} className={styles['header-menu']}>
            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} className={styles['icon-menu']} />
          </div>
        </Col>
        <Col>
          <Tooltip title="使用文档">
            <a href="https://pro.ant.design/docs/getting-started" target="_blank" rel="noopener noreferrer" className={styles['header-question']}>
              <Icon type="question-circle" />
            </a>
          </Tooltip>
          <div className={styles['header-bell']}>
            <Badge count="12">
              <Icon type="bell" className={styles['icon-bell']} />
            </Badge>
          </div>
          <Dropdown overlay={getDropdown()}>
            <div className={styles['header-dropmenu']}>
              <img src={avator} alt="" className={styles['header-avator']} />
              <span className={styles['header-user-name']}>Serati Ma</span>
            </div>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

HeaderContainer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
};

export default HeaderContainer;
