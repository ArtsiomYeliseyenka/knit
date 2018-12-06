import * as classNames from 'classnames/bind';
import { ILoadingProps, WithLoading } from 'components/wrappers';
import { SFC } from 'react';
import { mockData } from './mockData';
import { Product } from './product';
import * as styles from './products.scss';

const cx = classNames.bind(styles);

export const Products: SFC = () => {
  return (
    <div className={cx('products')}>
      <div className={cx('heading')}>Our products</div>
      <div className={cx('content')}>
        {mockData.map((props) => (
          <WithLoading key={props.id}>
            {(receivedProps: ILoadingProps) => (
              <Product
                {...props}
                toggleLoading={receivedProps.toggleLoading}
                loading={receivedProps.loading}
              />
            )}
          </WithLoading>
        ))}
      </div>
    </div>
  );
};
