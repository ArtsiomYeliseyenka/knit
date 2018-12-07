import { HIDE_MODAL, SHOW_MODAL } from './constants';
import { IModal } from './interface';

export const showModalAction = ({ id, data }: IModal) => ({
  type: SHOW_MODAL,
  payload: {
    activeModal: { id, data },
  },
});
export const hideModalAction = () => ({
  type: HIDE_MODAL,
});
