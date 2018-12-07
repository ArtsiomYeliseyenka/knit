import { connect } from 'react-redux';
import { fetchInstaAction, isFetchedSelector, postsSelector } from 'reducers/insta';
import { compose } from 'redux';
import { IReduxState } from 'store';
import { InstaBlockPure } from './';

const enhance = compose(
  connect(
    (state: IReduxState) => ({
      isFetched: isFetchedSelector(state),
      posts: postsSelector(state),
    }),
    {
      fetchInsta: fetchInstaAction,
    },
  ),
);
export const InstaBlockEnhanced = enhance(InstaBlockPure);
