import * as classNames from 'classnames/bind';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { ScrollWrapper } from 'components/scrollWrapper';
import { StatelessComponent } from 'react';
import * as styles from './baseLayout.scss';

const cx = classNames.bind(styles);

export const BaseLayout: StatelessComponent = ({ children }) => {
  return (
    <div className={cx('baseLayout')}>
      <Header />
      <div className={cx('scrollingArea')}>
        <div className={cx('wrapperOuter')}>
          <ScrollWrapper>
            <div className={cx('wrapperInner')}>
              <div className={cx('content')}>{children}</div>
              <Footer />
            </div>
          </ScrollWrapper>
        </div>
      </div>
    </div>
  );
};
