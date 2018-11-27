import { Component } from 'react';
import * as styles from './hello.scss';
import { HelloProps } from './interface';
import classNames from 'classnames';

let cx = classNames.bind(styles);


export class Hello extends Component<HelloProps, {}> {
    render() {
        return <h1 className={cx('hello')}>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
