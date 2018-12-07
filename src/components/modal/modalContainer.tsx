import { Component, Fragment, ReactNode } from 'react';
import { connect } from 'react-redux';
import { activeModalSelector, IActiveModal, IModal } from 'reducers/modal';
import { IReduxState } from 'store';

const ModalRoot = document.getElementById('modal-root');
const modalsMap: { [key: string]: ReactNode } = {};

const addModal = (modalName: string, component: ReactNode) => {
  modalsMap[modalName] = component;
};
const getModal = (modal: IModal | null) => modal && modalsMap[modal.id];
export const withModal = (name: string) => (component: any) => {
  addModal(name, component);
  return component;
};

class ModalContainer extends Component<IActiveModal> {
  public render() {
    const { activeModal } = this.props;
    const ActiveModalComponent: any = getModal(activeModal);
    return ModalRoot ? (
      ReactDOM.createPortal(
        ActiveModalComponent && activeModal ? (
          <ActiveModalComponent data={activeModal.data} />
        ) : null,
        ModalRoot,
      )
    ) : (
      <Fragment>{this.props.children}</Fragment>
    );
  }
}

export const ModalContainerConnected = connect((state: IReduxState) => ({
  activeModal: activeModalSelector(state),
}))(ModalContainer);
