export interface IProps {
  children: ({  }: { loading: boolean; toggleLoading: () => void }) => JSX.Element;
}
export interface IState {
  loading: boolean;
}
