import * as classNames from 'classnames/bind';
import { ModalLayout } from 'components/modal';
import { SFC } from 'react';
import { GalleryBlock } from './galleryBlock';
import { InfoBlock } from './infoBlock';
import { IProps } from './interface';
import * as styles from './productModal.scss';

const cx = classNames.bind(styles);

export const ProductModal: SFC<IProps> = ({ data }) => {
  const { images, ...rest } = data;
  return (
    <ModalLayout>
      <div className={cx('productModal')}>
        <GalleryBlock images={images} />
        <InfoBlock {...rest} />
      </div>
    </ModalLayout>
  );
};
