import * as classNames from 'classnames/bind';
import { StatelessComponent } from 'react';
import * as styles from './about.scss';

const cx = classNames.bind(styles);

export const About: StatelessComponent = () => <div className={cx('about')}>About page...</div>;
