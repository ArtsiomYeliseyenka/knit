export interface IProps {
  id: number | string;
  title: string;
  description: string;
  price: number;
  images: {
    thumbnail: string;
    original: string;
  };
}
