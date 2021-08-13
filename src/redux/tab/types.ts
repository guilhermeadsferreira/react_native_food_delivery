export enum TabTypes {
  SET_SELECTED_TAB = '@tab/SET_SELECTED_TAB',
}

export interface ITabState {
  readonly selectedTab: string;
}
