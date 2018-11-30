import * as classNames from 'classnames/bind';
import { Component } from 'react';
import { IScrollbarProps, Scrollbars } from 'react-custom-scrollbars';
import * as styles from './scrollWrapper.scss';

const cx = classNames.bind(styles);
const initialState = { scrolling: false };
type State = Readonly<typeof initialState>;

export class ScrollWrapper extends Component<IScrollbarProps, State> {
  public readonly state: State = initialState;
  public renderTrackHorizontal = (props: any) => (
    <div {...props} className={cx('trackHorizontal')} />
  );
  public renderTrackVertical = (props: any) => <div {...props} className={cx('trackVertical')} />;
  public renderThumbHorizontal = (props: any) => (
    <div {...props} className={cx('thumbHorizontal')} />
  );
  public renderThumbVertical = (props: any) => <div {...props} className={cx('thumbVertical')} />;
  public toggleScrolling = () => {
    this.setState({
      scrolling: !this.state.scrolling,
    });
  };

  public render() {
    const { children, ...rest } = this.props;
    return (
      <Scrollbars
        className={cx('scrollWrapper', { scrolling: this.state.scrolling })}
        renderTrackHorizontal={this.renderTrackHorizontal}
        renderTrackVertical={this.renderTrackVertical}
        renderThumbHorizontal={this.renderThumbHorizontal}
        renderThumbVertical={this.renderThumbVertical}
        onScrollStart={this.toggleScrolling}
        onScrollStop={this.toggleScrolling}
        {...rest}
      >
        {children}
      </Scrollbars>
    );
  }
}
