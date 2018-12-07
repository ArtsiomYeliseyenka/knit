import * as classNames from 'classnames/bind';
import { FormField } from 'components/fields';
import { SFC } from 'react';
import * as styles from './infoBlock.scss';
import { IProps } from './interface';

const cx = classNames.bind(styles);

export const InfoBlock: SFC<IProps> = ({ id, title, description, price }) => {
  return (
    <div className={cx('infoBlock')}>
      <FormField>
        <div className={cx('title')}>{title}</div>
        <div className={cx('id')}>{`#${id}`}</div>
      </FormField>
      <FormField label="price">
        <div className={cx('price')}>{`${price}$`}</div>
      </FormField>
      <FormField label="description">
        <div className={cx('description')}>{description}</div>
      </FormField>
    </div>
  );
};
