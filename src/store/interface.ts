import { IInsta } from 'reducers/insta';
import { IActiveModal } from 'reducers/modal';

export interface IReduxState {
  insta: IInsta;
  modal: IActiveModal;
}
