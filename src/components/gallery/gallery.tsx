import * as classNames from 'classnames/bind';
import { SFC } from 'react';
// tslint:disable-next-line
import ImageGallery, { ReactImageGalleryProps } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import * as styles from './gallery.scss';

const cx = classNames.bind(styles);

export const Gallery: SFC<ReactImageGalleryProps> = ({ items }) => {
  const config = items.map((item) => ({ ...item, thumbnailClass: cx('thumbnail') }));
  return (
    <div className={cx('gallery')}>
      <ImageGallery items={config} />
    </div>
  );
};
