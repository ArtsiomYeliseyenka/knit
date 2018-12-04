import * as classNames from 'classnames/bind';
import * as styles from './spinningPreloader.scss';

const cx = classNames.bind(styles);

export const SpinningPreloader = () => (
  <div className={cx('spinningPreloader')}>
    <div className={cx('preloader')}>
      <div className={cx('preloaderPart')} />
      <div className={cx('preloaderPart')} />
      <div className={cx('preloaderPart')} />
    </div>
  </div>
);
