import React from 'react';
import Bar from './Bar';
import Area from './Area';
import styles from './index.less';
import Pie from './Pie';
import SlicePie from './SlicePie';

export default () => (
  <div className={styles.flex}>
    <div className={styles['flex-full']}>
      <Bar />
    </div>
    <div className={styles['flex-full']}>
      <Area />
    </div>
    <div className={styles['flex-full']}>
      <Pie />
    </div>
    <div className={styles['flex-full']}>
      <SlicePie />
    </div>
  </div>
);
