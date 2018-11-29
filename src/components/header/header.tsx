import * as classNames from 'classnames/bind';
import { StatelessComponent } from 'react';
import * as styles from './header.scss';
import { NavBar } from './navBar';

const cx = classNames.bind(styles);

export const Header: StatelessComponent = () => {
  return (
    <div className={cx('header')}>
      <div className={cx('logo')} />
      <NavBar />
    </div>
  );
};
