import { AnyAction } from 'redux';
import { HIDE_MODAL, INITIAL_STATE, SHOW_MODAL } from './constants';

export const modalReducer = (state = INITIAL_STATE, { type, payload }: AnyAction) => {
  switch (type) {
    case SHOW_MODAL:
      return { ...state, activeModal: payload.activeModal };
    case HIDE_MODAL:
      return { ...state, activeModal: null };
    default:
      return state;
  }
};
