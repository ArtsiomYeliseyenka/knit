import * as classNames from 'classnames/bind';
import { StatelessComponent } from 'react';
import * as styles from './shop.scss';

const cx = classNames.bind(styles);

export const Shop: StatelessComponent = () => <div className={cx('shop')}>Shop page...</div>;
