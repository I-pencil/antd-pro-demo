import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import styles from './index.less';

const Trend = (props) => {
  const {
    label, value, flag, classnames, ...rest
  } = props;
  return (
    <div className={styles.wrapper} {...rest}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
      {flag && (<span className={styles[flag]}><Icon type={`caret-${flag}`} /></span>)}
    </div>
  );
};

Trend.defaultProps = {
  flag: 'up',
  classnames: '',
};

Trend.propTypes = {
  flag: PropTypes.oneOf(['up', 'down']),
  classnames: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};
export default React.memo(Trend);
