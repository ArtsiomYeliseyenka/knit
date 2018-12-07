import * as classNames from 'classnames/bind';
import { SFC } from 'react';
import * as styles from './modalContent.scss';

const cx = classNames.bind(styles);

export const ModalContent: SFC = ({ children }) => (
  <div className={cx('modalContent')}>{children}</div>
);
