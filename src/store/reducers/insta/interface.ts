export interface IInstaPost {
  id: string;
  image: string;
  link: string;
  comments: number;
  likes: number;
}

export interface IInsta {
  isFetched: boolean;
  posts: IInstaPost[] | [];
}
