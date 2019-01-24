import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import styles from './index.less';

class ChartCard extends PureComponent {
  renderContent = () => {
    const {
      title,
      extra,
      actions,
      children,
      contentheight,
    } = this.props;
    return (
      <div>
        <div className={styles.header}>
          {title && (
            <div className={styles.title}>
              {title}
            </div>
          )}
          {extra && (<div>{extra}</div>)}
        </div>
        {children && (
          <div className={styles.content} style={{ height: contentheight || 'auto' }}>
            <div className={styles.contentFix}>{children}</div>
          </div>
        )}
        <div className={styles.footer}>
          {actions && <div>{actions}</div>}
        </div>
      </div>
    );
  };

  render() {
    const {
      loading,
      title,
      extra,
      actions,
      ...rest
    } = this.props;
    return (
      <Card loading={loading} bodyStyle={{ padding: '20px 24px 8px 24px' }} {...rest}>
        {this.renderContent()}
      </Card>
    );
  }
}
ChartCard.defaultProps = {
  loading: false,
  title: '',
  extra: '',
  children: '',
  actions: '',
  contentheight: '',
};
ChartCard.propTypes = {
  loading: PropTypes.bool,
  title: PropTypes.node,
  extra: PropTypes.node,
  children: PropTypes.node,
  actions: PropTypes.node,
  contentheight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default ChartCard;
