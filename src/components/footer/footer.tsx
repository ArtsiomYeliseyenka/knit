import * as classNames from 'classnames/bind';
import { StatelessComponent } from 'react';
import * as styles from './footer.scss';

const cx = classNames.bind(styles);

export const Footer: StatelessComponent = () => {
  return <div className={cx('footer')}>I'm footer</div>;
};
