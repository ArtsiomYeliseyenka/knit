export interface IProps {
  loading: boolean;
  toggleLoading: () => void;
}
export interface IState {
  posts: IPost[] | [];
}
export interface IPost {
  id: string;
  image: string;
  link: string;
  comments: number;
  likes: number;
}
