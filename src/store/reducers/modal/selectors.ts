import { IReduxState } from 'store';

const modalSelector = (state: IReduxState) => state.modal || {};
export const activeModalSelector = (state: IReduxState) => modalSelector(state).activeModal;
