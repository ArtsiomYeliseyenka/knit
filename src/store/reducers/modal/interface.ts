export interface IModal {
  id: string;
  data: any;
}

export interface IActiveModal {
  activeModal: IModal | null;
}
