import * as classNames from 'classnames/bind';
import { StatelessComponent } from 'react';
import * as styles from './header.scss';

const cx = classNames.bind(styles);

export const Header: StatelessComponent = () => {
  return <div className={cx('header')}>I'm header</div>;
};
