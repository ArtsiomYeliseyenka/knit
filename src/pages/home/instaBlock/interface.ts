export interface IProps {
  loading: boolean;
  toggleLoading: () => void;
}

export interface IReceivedProps {
  isFetched: boolean;
  posts: IPost[];
  fetchInsta: any;
}

export interface IPost {
  id: string;
  image: string;
  link: string;
  comments: number;
  likes: number;
}
