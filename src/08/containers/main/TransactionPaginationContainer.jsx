import { connect } from 'react-redux';
import TransactionPagination from '../../components/main/TransactionPagination';
import {
  requestTransactionList,
  FETCH_TRANSACTION_LIST,
} from '../../actions/transactionPackActions';
import { loadingStateSelector } from '../../selectors/transactionSelectors';

const mapStateToProps = state => {
  const { pagination, ids } = state.transactions;
  const { number, size } = pagination;
  return {
    searchParams: state.searchFilter.params,
    pageNumber: number || 1,
    hasNext: ids.length === size,
    loading: loadingStateSelector(state),
  };
};

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPagination);
