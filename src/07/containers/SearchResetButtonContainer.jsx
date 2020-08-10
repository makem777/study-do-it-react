import { connect } from 'react-redux';
import { resetFilter } from '../actions/searchFilterActions';
import Input from '../../04/InputWithStyle';

const mapStateToProps = state => {
  // 검색 입력값이 없는 경우 버튼의 disabled를 true로 설정함
  const disabled = Object.values(state.searchFilter).reduce(
    (result, value) => result && !value,
    true,
  );
  return {
    disabled,
  };
};

const mapDispatchToProps = {
  onChange: resetFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
