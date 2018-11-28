import * as classNames from 'classnames/bind';
import { Component } from 'react';
import * as styles from './hello.scss';
import { IHello } from './interface';

const cx = classNames.bind(styles);

export class Hello extends Component<IHello, {}> {
    public render() {
    return (
      <h1 className={cx('hello', 'world')}>
        Hello from {this.props.compiler} and {this.props.framework}!
      </h1>
    );
  }
}
