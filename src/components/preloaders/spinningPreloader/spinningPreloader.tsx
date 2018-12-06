import * as classNames from 'classnames/bind';
import { SFC } from 'react';
import { IProps } from './interface';
import * as styles from './spinningPreloader.scss';

const cx = classNames.bind(styles);

export const SpinningPreloader: SFC<IProps> = ({ className }) => (
  <div className={cx('spinningPreloader', className)}>
    <div className={cx('preloader')}>
      <div className={cx('preloaderPart')} />
      <div className={cx('preloaderPart')} />
      <div className={cx('preloaderPart')} />
    </div>
  </div>
);
