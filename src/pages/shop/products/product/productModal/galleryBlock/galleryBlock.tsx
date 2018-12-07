import * as classNames from 'classnames/bind';
import { Gallery } from 'components/gallery';
import { SFC } from 'react';
import * as styles from './galleryBlock.scss';
import { IProps } from './interface';

const cx = classNames.bind(styles);

export const GalleryBlock: SFC<IProps> = ({ images }) => {
  return (
    <div className={cx('galleryBlock')}>
      <Gallery items={images} />
    </div>
  );
};
