import * as classNames from 'classnames/bind';
import { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { IProps, IReceivedProps, IState } from './interface';
import { ModalContent } from './modalContent';
import { ModalHeader } from './modalHeader';
import * as styles from './modalLayout.scss';

const cx = classNames.bind(styles);

export class ModalLayout extends Component<IProps & IReceivedProps, IState> {
  private modal: React.RefObject<HTMLDivElement>;

  constructor(props: IProps & IReceivedProps) {
    super(props);
    this.modal = React.createRef();
    this.state = {
      shown: false,
    };
  }

  public componentDidMount() {
    document.addEventListener('keydown', this.onKeydown, false);
    this.onMount();
  }
  public componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown, false);
  }
  public onMount() {
    this.setState({ shown: true });
  }
  public onKeydown = (e: any) => {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  };
  public onClickModal = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    this.modal.current && !this.modal.current.contains(target) && this.closeModal();
  };
  public closeModal = () => {
    this.setState({ shown: false });
  };
  public render() {
    const { children, className, hideModal } = this.props;

    return (
      <div className={cx('modalLayout')}>
        <div className={cx('scrollingContent')} onClick={this.onClickModal}>
          <CSSTransition
            timeout={300}
            in={this.state.shown}
            classNames={cx('modalWindowAnimation')}
            onExited={hideModal}
          >
            {(status) => (
              <div ref={this.modal} className={cx('modalWindow', className)}>
                <ModalHeader closeModal={this.closeModal} />
                <ModalContent>{status !== 'exited' ? children : null}</ModalContent>
              </div>
            )}
          </CSSTransition>
        </div>
        <CSSTransition
          timeout={300}
          in={this.state.shown}
          classNames={cx('modalBackdropAnimation')}
        >
          <div className={cx('backdrop')} />
        </CSSTransition>
      </div>
    );
  }
}
