import React from 'react';
const { Provider, Consumer } = React.createContext({}); // 공급자와 소비자 생성

export { Consumer }; //  소비자

export default class LoadingProvider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(key, value) {
    const newState = { [key]: value };
    this.setState(newState);
  }

  render() {
    const context = {
      ...this.state,
      setLoading: this.setLoading,
    };

    return <Provider value={context}>{this.props.children}</Provider>;
  }
}
