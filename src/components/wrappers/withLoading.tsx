import { Component } from 'react';
import { IProps, IState } from './interface';

export class WithLoading extends Component<IProps, IState> {
  public state = {
    loading: true,
  };

  public toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  public render() {
    return this.props.children({ loading: this.state.loading, toggleLoading: this.toggleLoading });
  }
}
