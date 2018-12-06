import * as classNames from 'classnames/bind';
import { Carousel } from 'components/carousel';
import { SpinningPreloader } from 'components/preloaders/spinningPreloader';
import { ILoadingProps } from 'components/wrappers';
import { Component } from 'react';
import * as styles from './instaBlock.scss';
import { InstaItem } from './instaItem';
import { IPost, IReceivedProps } from './interface';

const cx = classNames.bind(styles);
const carouselConfig = {
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  infinite: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  slidesToScroll: 1,
  slidesToShow: 6,
  speed: 500,
};

export class InstaBlock extends Component<ILoadingProps & IReceivedProps> {
  constructor(props: ILoadingProps & IReceivedProps) {
    super(props);
    props.isFetched && props.toggleLoading();
  }

  public componentDidMount(): void {
    if (!this.props.isFetched) {
      this.props.fetchInsta().then(() => {
        this.props.toggleLoading();
      });
    }
  }

  public render(): JSX.Element {
    const { posts } = this.props;
    return (
      <div className={cx('instaBlock')}>
        <div className={cx('heading')}>Follow us in instagram</div>
        <div className={cx('carouselWrapper')}>
          {this.props.loading ? (
            <SpinningPreloader />
          ) : (
            <Carousel {...carouselConfig}>
              {posts.map((post: IPost) => (
                <InstaItem key={post.id} data={post} />
              ))}
            </Carousel>
          )}
        </div>
      </div>
    );
  }
}
