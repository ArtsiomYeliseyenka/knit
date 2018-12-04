import * as classNames from 'classnames/bind';
import { SFC } from 'react';
import * as styles from './carousel.scss';
// tslint:disable-next-line
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const cx = classNames.bind(styles);

export const Carousel: SFC<Settings> = ({ children, ...rest }) => (
  <div className={cx('carousel')}>
    <Slider {...rest}>{children}</Slider>
  </div>
);
