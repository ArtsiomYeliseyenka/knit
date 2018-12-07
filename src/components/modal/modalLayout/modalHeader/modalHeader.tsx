import * as classNames from 'classnames/bind';
import { SFC } from 'react';
import { MdClose } from 'react-icons/md';
import { IProps } from './interface';
import * as styles from './modalHeader.scss';

const cx = classNames.bind(styles);

export const ModalHeader: SFC<IProps> = ({ closeModal }) => {
  return (
    <div className={cx('modalHeader')}>
      <MdClose className={cx('closeIcon')} onClick={closeModal} />
    </div>
  );
};
