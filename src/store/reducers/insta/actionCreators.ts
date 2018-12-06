import { Dispatch } from 'redux';
import { FETCH_INSTA_SUCCESS } from './constants';
import { IInsta } from './interface';

export const fetchInfoSuccess = (insta: IInsta) => ({
  payload: insta,
  type: FETCH_INSTA_SUCCESS,
});
export const fetchInstaAction = () => (dispatch: Dispatch) =>
  fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${INSTA_TOKEN}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      dispatch(
        fetchInfoSuccess({
          isFetched: true,
          posts: response.data.slice(0, 9).map((post: any) => ({
            comments: post.comments.count,
            id: post.id,
            image: post.images.standard_resolution.url,
            likes: post.likes.count,
            link: post.link,
          })),
        }),
      );
    });
