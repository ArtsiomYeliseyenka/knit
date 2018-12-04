import * as classNames from 'classnames/bind';
import { WithLoading } from 'components/wrappers';
import { SFC } from 'react';
import * as styles from './home.scss';
import { InstaBlock } from './instaBlock';

const cx = classNames.bind(styles);

export const Home: SFC = () => (
  <div className={cx('home')}>
    <h1>Home page...</h1>
    <WithLoading>
      {(receivedProps: { loading: boolean; toggleLoading: () => void }) => (
        <InstaBlock toggleLoading={receivedProps.toggleLoading} loading={receivedProps.loading} />
      )}
    </WithLoading>
  </div>
);
