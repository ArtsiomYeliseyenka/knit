import * as classNames from 'classnames/bind';
import { ILoadingProps, WithLoading } from 'components/renderProps';
import { SFC } from 'react';
import * as styles from './home.scss';
import { InstaBlock } from './instaBlock';

const cx = classNames.bind(styles);

export const Home: SFC = () => (
  <div className={cx('home')}>
    <WithLoading>
      {(receivedProps: ILoadingProps) => (
        <InstaBlock toggleLoading={receivedProps.toggleLoading} loading={receivedProps.loading} />
      )}
    </WithLoading>
  </div>
);
