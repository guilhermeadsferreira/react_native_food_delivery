import {Reducer, AnyAction} from 'redux';
import {TabTypes, ITabState} from './types';

const INITIAL_STATE: ITabState = {
  selectedTab: '',
};

interface ITabAction extends AnyAction {
  payload: ITabState;
}

const reducer: Reducer<ITabState, ITabAction> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case TabTypes.SET_SELECTED_TAB:
      return {...state, selectedTab: action.payload.selectedTab};
    default: {
      return state;
    }
  }
};

export default reducer;
