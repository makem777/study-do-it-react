import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent01';

import { setAge } from '../actions/collectionActions';

// // 데이터 컴포넌트가 스토어의 데이터 변경
// const mapDispatchToProps = dispatch => {
//   return {
//     setAge: (id, age) => dispatch(setAge(id, age)),
//   };
// };

// 위와 같은 구조일 때 dispatch 인자 생략가능
const mapDispatchToProps = {
  setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);
