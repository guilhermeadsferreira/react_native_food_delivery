import {TabTypes} from './types';

export const setSelectedTabSuccess = (selectedTab: string) => ({
  type: TabTypes.SET_SELECTED_TAB,
  payload: {
    selectedTab,
  },
});
