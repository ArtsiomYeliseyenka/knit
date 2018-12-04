import * as classNames from 'classnames/bind';
import { Carousel } from 'components/carousel';
import { SpinningPreloader } from 'components/preloaders/spinningPreloader';
import { Component } from 'react';
import * as styles from './instaBlock.scss';
import { InstaItem } from './instaItem';
import { IPost, IProps, IState } from './interface';

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

export class InstaBlock extends Component<IProps, IState> {
  public state = {
    posts: [],
  };
  public componentDidMount(): void {
    fetch(
      'https://api.instagram.com/v1/users/self/media/recent/?access_token=4071267231.5cfdc59.daad985bd4a94656aa8b7fab3acf1bfa',
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState(
          {
            posts: response.data.slice(9).map((post: any) => ({
              comments: post.comments.count,
              id: post.id,
              image: post.images.standard_resolution.url,
              likes: post.likes.count,
              link: post.link,
            })),
          },
          () => {
            this.props.toggleLoading();
          },
        );
      });
  }

  public render(): JSX.Element {
    return (
      <div className={cx('instaBlock')}>
        <div className={cx('heading')}>Follow us in instagram</div>
        <div className={cx('carouselWrapper')}>
          {this.props.loading ? (
            <SpinningPreloader />
          ) : (
            <Carousel {...carouselConfig}>
              {this.state.posts.map((post: IPost) => (
                <InstaItem key={post.id} data={post} />
              ))}
            </Carousel>
          )}
        </div>
      </div>
    );
  }
}
