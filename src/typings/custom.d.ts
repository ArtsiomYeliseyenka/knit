declare module '*.svg' {
  const content: any;
  export default content;
}

declare module 'react-custom-scrollbars' {
  export interface IPositionValues {
    top: number;
    left: number;
    clientWidth: number;
    clientHeight: number;
    scrollWidth: number;
    scrollHeight: number;
    scrollLeft: number;
    scrollTop: number;
  }
  export interface IScrollbarProps extends React.HTMLProps<Scrollbars> {
    onScroll?: React.UIEventHandler<any>;
    onScrollFrame?: (values: IPositionValues) => void;
    onScrollStart?: () => void;
    onScrollStop?: () => void;
    onUpdate?: (values: IPositionValues) => void;
    renderView?: React.StatelessComponent<any>;
    renderTrackHorizontal?: React.StatelessComponent<any>;
    renderTrackVertical?: React.StatelessComponent<any>;
    renderThumbHorizontal?: React.StatelessComponent<any>;
    renderThumbVertical?: React.StatelessComponent<any>;
    autoHide?: boolean;
    autoHideTimeout?: number;
    autoHideDuration?: number;
    thumbSize?: number;
    thumbMinSize?: number;
    universal?: boolean;
  }

  export class Scrollbars extends React.Component<IScrollbarProps, {}> {
    public scrollTop(top: number): void;
    public scrollLeft(left: number): void;
    public scrollToTop(): void;
    public scrollToBottom(): void;
    public scrollToLeft(): void;
    public scrollToRight(): void;
    public getScrollLeft(): number;
    public getScrollTop(): number;
    public getScrollWidth(): number;
    public getScrollHeight(): number;
    public getWidth(): number;
    public getHeight(): number;
    public getValues(): IPositionValues;
  }
}
