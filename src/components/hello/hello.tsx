import { Component } from 'react';
import { HelloProps } from './interface';
import * as styles from './hello.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export class Hello extends Component<HelloProps, {}> {
    render() {
        return <h1 className={cx('hello', 'world')}>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
