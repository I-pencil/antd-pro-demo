import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistical-cell.less';

const StatisticalCell = ({
  label,
  value,
}) => (
  <div>
    <div className={styles.lable}>
      {label}
    </div>
    <div className={styles.value}>{value}</div>
  </div>
);

StatisticalCell.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default React.memo(StatisticalCell);
