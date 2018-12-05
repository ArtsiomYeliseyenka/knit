import { IInsta } from 'reducers/insta';

export interface IAction {
  type: string;
  payload?: any;
}

export interface IInitialState {
  insta: IInsta;
}
