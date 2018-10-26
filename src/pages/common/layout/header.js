import React from 'react';
import { Layout, Button, Icon } from 'antd';

import styles from '../../dashboard.less';

const { Header } = Layout;

const HeaderContainer = ({
  handleClick,
  collapsed,
}) => {
  return (
    <Header className={styles.header}>
      <div onClick={handleClick} className={styles['header-btn']}>
        <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} className={styles['header-icon']}/>
      </div>
    </Header>
  );
}

export default HeaderContainer;
