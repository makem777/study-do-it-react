import createSelectors from '../../11/api-redux-pack/createSelectors';

export const {
  resourceSelector: transactionSelector,
  collectionSelector: transactionListSelector,
  collectionnLoadingStateSelector: transactionListLoadingStateSelector,
  createLoadingStateSelector: transactionCreateLoadingStateSelector,
  paginationSelector,
} = createSelectors('transactions');

// import { FETCH_TRANSACTION_LIST, CREATE_TRANSACTION } from '../actions/transactionPackActions';
// import { createSelector } from 'reselect';

// // 스토어 데이터에서 거래 정보를 추출하는 셀렉터
// export const transactionSelector = state => state.transactions;
// // 그래프의 DB 구조의 거래 목록 자료를 원본 배열로 변환하는 셀렉터
// // export const transactionListSelector = state => {
// // const { ids, entites } = transactionSelector(state);
// // return ids.map(id => entites[id]);
// // };
// // reselect를 이용하여 캐시에 저장
// export const transactionListSelector = createSelector(
//   [transactionSelector], // 셀렉터 배열
//   transactions => {
//     const { ids, entites } = transactions;
//     return ids.map(id => entites[id]);
//   },
// );

// // 거래 정보의 전체 로딩 정보 객체를 추출하는 셀렉터
// export const loadingStateSelector = state => transactionSelector(state).loadingState;
// // 전체 거래 목록 요청의 로딩 상태만을 추출하는 셀렉터
// export const transactionListLoadingStateSelector = state =>
//   loadingStateSelector(state)[FETCH_TRANSACTION_LIST];
// // 거래 생성 요청의 로딩 상태만을 추출하는 셀렉터
// export const transactionCreateLoadingStateSelector = state =>
//   loadingStateSelector(state)[CREATE_TRANSACTION];
