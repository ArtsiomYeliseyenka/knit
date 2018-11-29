import * as classNames from 'classnames/bind';
import { StatelessComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';
import { INavItem } from './interface';
import * as styles from './navItem.scss';

const cx = classNames.bind(styles);

export const NavItem: StatelessComponent<INavItem & RouteComponentProps> = ({ data }) => {
  return (
    <NavLink className={cx('navItem')} activeClassName={cx('active')} to={data.url}>
      {data.icon({ className: cx('icon') })}
      <div className={cx('label')}> {data.label}</div>
    </NavLink>
  );
};
