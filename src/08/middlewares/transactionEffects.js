import { TRADE_COMPLETE, requestTransactionList } from '../actions/transactionActions';
import { showMesaage } from '../actions/notificationActions';

export default store => nextRunner => action => {
  const { type } = action;
  if (type === TRADE_COMPLETE) {
    const message = '거래 목록을 최신 정보로 업데이트하였습니다.';
    store.dispatch(showMesaage(message));
    store.dispatch(requestTransactionList());
  }
  return nextRunner(action);
};
