import * as classNames from 'classnames/bind';
import { SFC } from 'react';
import * as styles from './shop.scss';

const cx = classNames.bind(styles);

export const Shop: SFC = () => {
  return <div className={cx('shop')}>Shop page...</div>;
};
