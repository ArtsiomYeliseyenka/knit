import { AnyAction } from 'redux';
import { FETCH_INSTA_SUCCESS, initialState } from './constants';

export const instaReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case FETCH_INSTA_SUCCESS:
      return { state, ...payload };
    default:
      return state;
  }
};
