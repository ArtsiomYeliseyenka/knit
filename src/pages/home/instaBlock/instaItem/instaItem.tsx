import * as classNames from 'classnames/bind';
import { SFC } from 'react';
import { FaComment, FaHeart } from 'react-icons/fa';
import * as styles from './instaItem.scss';
import { IProps } from './interface';

const cx = classNames.bind(styles);

export const InstaItem: SFC<IProps> = ({ data }): JSX.Element => {
  return (
    <a href={data.link} className={cx('instaItem')}>
      <div className={cx('photo')} style={{ backgroundImage: `url(${data.image})` }} />
      <div className={cx('overlay')}>
        <div className={cx('stats')}>
          <FaHeart className={cx('icon')} /> - {data.likes}
        </div>
        <div className={cx('stats')}>
          <FaComment className={cx('icon')} /> - {data.comments}
        </div>
        <div className={cx('backdrop')} />
      </div>
    </a>
  );
};
