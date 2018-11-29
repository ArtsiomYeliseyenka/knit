import * as classNames from 'classnames/bind';
import { StatelessComponent } from 'react';
import { config } from './config';
import * as styles from './navBar.scss';
import { NavItem } from './NavItem';

const cx = classNames.bind(styles);

export const NavBar: StatelessComponent = () => {
  return (
    <div className={cx('navBar')}>
      {config.items.map((item) => (
        <NavItem key={item.id} data={item.data} />
      ))}
    </div>
  );
};
