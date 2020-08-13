import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { SET_TRANSACTION_LIST } from '../actions/transactionActions';
import reducers from '../reducers';

// const customMiddleware = store => nextRunner => action => {
//   console.log('액션 객체', action); // nextRunner() 함수 이전에 실행할 작업1
//   console.log('리듀서 실행 전', store.getState()); // nextRunner() 함수 이전에 실행할 작업2
//   const result = nextRunner(action);
//   console.log('리듀서 실행 후', store.getState()); // nextRunner() 함수 이후에 실행할 작업
//   return result;
// };

// // 미들웨어로 액션 변형하기
// const customMiddleware = store => nextRunner => action => {
//   if (action.type === SET_TRANSACTION_LIST) {
//     return nextRunner({
//       ...action,
//       payload: [
//         {
//           id: 0,
//           code: 'DOIT',
//           name: '두잇코인(DOIT)',
//           totalPrice: 1000000000,
//           currentPrice: 25000,
//           datetime: '현재시간',
//         },
//       ],
//     });
//   }
//   return nextRunner(action);
// };

// 다중 미들웨어
const customMiddleware = store => nextRunner => action => {
  console.log('액션 객체', action);
  console.log('리듀서 실행 전', store.getState());
  const result = nextRunner(action);
  console.log('리듀서 실행 후', store.getState());
  return result;
};
const customMiddleware2 = store => nextRunner => action => {
  console.log('미들웨어2 전달된 액션 객체', action);
  console.log('미들웨어2 실행 전', store.getState());
  const result = nextRunner(action);
  console.log('미들웨어2 실행 후', store.getState());
  return result;
};

export default initState =>
  createStore(
    combineReducers(reducers),
    initState,
    applyMiddleware(composeWithDevTools, customMiddleware, customMiddleware2),
  );
