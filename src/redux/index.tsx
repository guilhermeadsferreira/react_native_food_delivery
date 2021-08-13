import React from 'react';
import {createStore, applyMiddleware, Store} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {ITabState} from './tab/types';

export interface ApplicationState {
  tab: ITabState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const ProviderRedux: React.FC = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderRedux;
