import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export default initStates =>
  createStore(
    combineReducers(reducers), // 여러개의 리듀서 전달
    initStates,
    composeWithDevTools(),
  );
