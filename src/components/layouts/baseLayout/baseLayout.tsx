import * as classNames from 'classnames/bind';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { StatelessComponent } from 'react';
import * as styles from './baseLayout.scss';

const cx = classNames.bind(styles);

export const BaseLayout: StatelessComponent = ({ children }) => {
  return (
    <div className={cx('base-layout')}>
      <Header />
      <div className={cx('content')}>{children}</div>
      <Footer />
    </div>
  );
};
