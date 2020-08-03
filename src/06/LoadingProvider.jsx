import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class LoadingProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { loading: false };
    this.setLoading = this.setLoading.bind(this);
  }

  getChildContext() {
    return {
      loading: this.state.loading,
      setLoading: this.setLoading,
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
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default LoadingProvider;
