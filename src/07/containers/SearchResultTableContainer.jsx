import { connect } from 'react-redux';
import SearchResultTable from '../SearchResultTable';

const mapStateToProps = state => {
  const { collection, searchFilter } = state;
  // 검색 항목 확인
  const hasFilter = Object.values(searchFilter).reduce(
    (result, value) => result || Boolean(value),
    false,
  );
  const { ids, entities } = collection;
  const items = ids
    .map(id => entities[id]) // 해시맵 형태로 되어 있는 그래프 DB를 객체 배열로 변환
    .filter(
      entity =>
        !hasFilter ||
        Object.entries(searchFilter).reduce(
          (result, [key, value]) => result && (!value || `${entity[key]}` === `${value}`),
          true,
        ),
    );

  return { items };
};

export default connect(mapStateToProps)(SearchResultTable);
