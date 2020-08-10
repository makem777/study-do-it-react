import { connect } from 'react-redux';
import PresentationComponent from '../PresentationComponent';

// 데이터 컴포넌트에서 필요한 데이터를 스토어에서 추출하여 객체로 반환
const mapStateToProps = (state, props) => {
  return {
    userName: state.user.name,
    entity: state.collection.entities[props.id],
  };
};

export default connect(mapStateToProps)(PresentationComponent);
