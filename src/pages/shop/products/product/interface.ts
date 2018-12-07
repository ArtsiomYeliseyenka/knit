export interface IProductImage {
  thumbnail: string;
  original: string;
}

export interface IProductInfo {
  id: number | string;
  title: string;
  description: string;
  price: number;
}

export interface IProps extends IProductInfo {
  images: IProductImage[];
}

export interface IReceivedProps {
  showModal: any;
}
