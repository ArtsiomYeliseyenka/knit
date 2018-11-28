import * as classNames from 'classnames/bind';
import { StatelessComponent } from 'react';
import * as styles from './landing.scss';

const cx = classNames.bind(styles);

export const Landing: StatelessComponent = () => (
  <div className={cx('landing')}>Landing page...</div>
);
