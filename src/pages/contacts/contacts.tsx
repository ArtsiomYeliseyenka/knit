import * as classNames from 'classnames/bind';
import { StatelessComponent } from 'react';
import * as styles from './contacts.scss';

const cx = classNames.bind(styles);

export const Contacts: StatelessComponent = () => (
  <div className={cx('contacts')}>Contacts page...</div>
);
