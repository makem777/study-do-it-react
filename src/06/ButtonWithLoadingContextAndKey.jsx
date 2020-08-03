import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';

import withLoadingContextAndKey, { loadingPropTypes } from './withLoadingContextAndKey';

function ButtonWithLoadingContext({ children, loading, setLoading }) {
  return <Button onPress={() => setLoading(!loading)}>{loading ? '로딩중' : children}</Button>;
}

ButtonWithLoadingContext.propTypes = {
  ...loadingPropTypes, // 하이어오더 컴포넌트에서 새롭게 추가된 프로퍼티를 함께 할당
  children: PropTypes.string,
};

export const ButtonWithDefaultLoadingContext = withLoadingContextAndKey('defaultLoadingKey')(
  ButtonWithLoadingContext,
);
export const ButtonWithLoading2Context = withLoadingContextAndKey('loading2')(
  ButtonWithLoadingContext,
);
