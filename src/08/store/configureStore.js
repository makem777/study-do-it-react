import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { middleware as reduxPackMiddleware } from 'redux-pack';
// import { SET_TRANSACTION_LIST } from '../actions/transactionActions';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import notificationEffect from '../middlewares/notificationEffect';
import transactionEffects from '../middlewares/transactionEffects';
// const customMiddleware = store => nextRunner => action => {
//   console.log('액션 객체', action); // nextRunner() 함수 이전에 실행할 작업1
//   console.log('리듀서 실행 전', store.getState()); // nextRunner() 함수 이전에 실행할 작업2
//   const result = nextRunner(action);
//   console.log('리듀서 실행 후', store.getState()); // nextRunner() 함수 이후에 실행할 작업
//   return result;
// };

export default initState =>
  createStore(
    combineReducers(reducers),
    initState,
    composeWithDevTools(
      applyMiddleware(thunk, reduxPackMiddleware, notificationEffect, transactionEffects),
    ),
  );
