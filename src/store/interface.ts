import { IInsta } from 'reducers/insta';

export interface IReduxAction {
  type: string;
  payload?: any;
}

export interface IReduxState {
  insta: IInsta;
}
