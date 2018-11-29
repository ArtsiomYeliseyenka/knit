import * as classNames from 'classnames/bind';
import { StatelessComponent } from 'react';
import * as styles from './home.scss';

const cx = classNames.bind(styles);

export const Home: StatelessComponent = () => <div className={cx('home')}>Home page...</div>;
