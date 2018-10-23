import React from 'react';
import { Layout, Button, Icon } from 'antd';

import styles from './header.less';

const { Header } = Layout;

const HeaderContainer = ({
  handleClick,
  collapsed,
}) => {
  return (
    <Header className={styles.header}>
      <Button onClick={handleClick} style={{ marginBottom: 16 }}>
        <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
      </Button>
    </Header>
  );
}

export default HeaderContainer;
