import { IInsta } from './interface';

export const isFetchedSelector = (state: IInsta) => state.isFetched;
export const postsSelector = (state: IInsta) => state.posts;
