import * as classNames from 'classnames/bind';
import { SpinningPreloader } from 'components/preloaders/spinningPreloader';
import { ILoadingProps } from 'components/wrappers';
import { Component } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { IProps } from './interface';
import * as styles from './product.scss';

const cx = classNames.bind(styles);

export class Product extends Component<IProps & ILoadingProps> {
  public onLoad = () => {
    this.props.toggleLoading();
  };

  public render() {
    const { images, loading, price, title } = this.props;
    return (
      <div className={cx('product', { loaded: !loading })}>
        <div className={cx('imageWrapper')}>
          <img className={cx('image')} src={images.thumbnail} alt={title} onLoad={this.onLoad} />
          <div className={cx('hint')}>
            <div className={cx('backdrop')} />
            <div className={cx('text')}>Quick view</div>
          </div>
        </div>
        <div className={cx('info')}>
          <div className={cx('title')}>{title}</div>
          <div className={cx('price')}>{`${price}$`}</div>
          <TiShoppingCart className={cx('cartIcon')} />
        </div>
        <SpinningPreloader className={cx('preloader')} />
      </div>
    );
  }
}
