import React from 'react';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import withLoading from './withLoading.jsx';

function Page({ content }) {
  return (
    <div>
      페이지 로딩이 완료되었습니다.
      {content}
    </div>
  );
}

export const withLoadData = lifecycle({
  state: { isLoading: true, content: '' }, // 기존 컴포넌트에 프로퍼티로 전달됨 (withState와 동일하게 작동)
  componentDidMount: function() {
    if (this.props.loadData) {
      this.props.loadData().then(content =>
        this.setState({
          isLoading: false,
          content,
        }),
      );
    }
  },
});

export const PageWithLoadData = withLoadData(Page);
export const PageWithLoadDataAndLoading = compose(withLoadData, withLoading('서버 요청 중'))(Page);
