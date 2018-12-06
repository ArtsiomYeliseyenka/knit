import { IReduxState } from 'store';

const instaSelector = (state: IReduxState) => state.insta;

export const isFetchedSelector = (state: IReduxState) => instaSelector(state).isFetched;
export const postsSelector = (state: IReduxState) => instaSelector(state).posts;
