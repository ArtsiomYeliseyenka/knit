import * as classNames from 'classnames/bind';
import { SpinningPreloader } from 'components/preloaders/spinningPreloader';
import { ILoadingProps } from 'components/renderProps';
import { Component } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { IProps, IReceivedProps } from './interface';
import * as styles from './product.scss';
import { PRODUCT_MODAL } from './productModal';

const cx = classNames.bind(styles);

export class Product extends Component<IProps & ILoadingProps & IReceivedProps> {
  public onLoad = () => {
    this.props.toggleLoading();
  };
  public showModal = () => {
    const { id, images, description, price, title } = this.props;
    this.props.showModal({
      id: PRODUCT_MODAL,
      data: { id, images, price, title, description },
    });
  };

  public render() {
    const { images, loading, price, title } = this.props;
    return (
      <div className={cx('product', { loaded: !loading })}>
        <div className={cx('imageWrapper')} onClick={this.showModal}>
          <img className={cx('image')} src={images[0].thumbnail} alt={title} onLoad={this.onLoad} />
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
