import { connect } from 'react-redux';
import { fetchInstaAction, IInsta, isFetchedSelector, postsSelector } from 'reducers/insta';
import { compose } from 'redux';
import { InstaBlockPure } from './';

const enhance = compose(
  connect(
    (state: { insta: IInsta }) => ({
      isFetched: isFetchedSelector(state.insta),
      posts: postsSelector(state.insta),
    }),
    {
      fetchInsta: fetchInstaAction,
    },
  ),
);
export const InstaBlockEnhanced = enhance(InstaBlockPure);
