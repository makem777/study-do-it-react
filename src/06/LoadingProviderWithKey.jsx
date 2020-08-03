import React from 'react';
import PropTypes from 'prop-types';

export const DEFAULT_KEY = 'defaultLoadingKey'; // 공급자의 기본 키값
// 공급자의 컨텍스트 데이터 자료형
export const contextPropTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

// contextKey = DEFAULT_KEY를 통해 컨텍스트 데이터의 기본 키값을 정함
export default (contextKey = DEFAULT_KEY) => {
  class LoadingProvider extends React.Component {
    constructor(props) {
      super(props);

      this.state = { loading: false };
      this.setLoading = this.setLoading.bind(this);
    }

    getChildContext() {
      return {
        // contextKey에 해당하는 로딩 상태 정보 객체(공급자의 컨텍스트 데이터) 반환
        [contextKey]: {
          loading: this.state.loading,
          setLoading: this.setLoading,
        },
      };
    }

    setLoading(loading) {
      this.setState({ loading });
    }

    render() {
      return this.props.children; // 자식 프로퍼티 노드를 출력
    }
  }
  LoadingProvider.childContextTypes = {
    [contextKey]: contextPropTypes,
  };

  return LoadingProvider;
};
