import { IInsta } from './reducers/insta/interface';

export interface IAction {
  type: string;
  payload?: any;
}

export interface IInitialState {
  insta: IInsta;
}
