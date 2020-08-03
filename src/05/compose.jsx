import compose from 'recompose/compose';
import withLoading from './withLoading.jsx';
import withState from 'recompose/withState';
const withLoadData = withState('isLoading', 'setIsLoading', false); // 로딩 상태

function Component() {
  return '완료(컴포넌트 출력)';
}
const ComponentWithLoading = withLoading('로딩 중')(Component);
const ComponentWithData = withLoadData(ComponentWithLoading);

const withLoadDataAndLoading = compose(withLoadData, withLoading('로딩 중'));
const ComponentwithLoadData = withLoadDataAndLoading(ComponentWithLoading);
