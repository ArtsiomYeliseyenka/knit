import * as classNames from 'classnames/bind';
import { SFC } from 'react';
import * as styles from './formField.scss';
import { IProps } from './interface';

const cx = classNames.bind(styles);

export const FormField: SFC<IProps> = ({ label, children }) => {
  return (
    <div className={cx('formField')}>
      {label && <div className={cx('label')}>{`${label}:`}</div>}
      <div className={cx('content')}>{children}</div>
    </div>
  );
};
