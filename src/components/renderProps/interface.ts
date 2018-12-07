export interface IProps {
  children: ({  }: IProvidedProps) => JSX.Element;
}
export interface IState {
  loading: boolean;
}
export interface IProvidedProps {
  loading: boolean;
  toggleLoading: () => void;
}
