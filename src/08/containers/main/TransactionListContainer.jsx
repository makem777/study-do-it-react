import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
// import { setTransactionList } from '../../actions/transactionActions';
// import { requestTransactionList } from '../../actions/transactionActions';
import {
  requestTransactionList,
  FETCH_TRANSACTION_LIST,
} from '../../actions/transactionPackActions';
import {
  transactionListSelector,
  loadingStateSelector,
} from '../../selectors/transactionSelectors';

const mapStateToProps = state => {
  return { transactions: transactionListSelector(state), loading: loadingStateSelector(state) };
};

const mapDispatchToProps = {
  // setTransactionList,
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
