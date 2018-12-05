import { IAction } from '../../interface';
import { FETCH_INSTA_SUCCESS } from './constants';
import { instaInitialState } from './initialState';

export const instaReducer = (state = instaInitialState, { type, payload }: IAction) => {
  switch (type) {
    case FETCH_INSTA_SUCCESS:
      return { state, ...payload };
    default:
      return state;
  }
};
