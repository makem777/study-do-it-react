import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import PresentationComponent from './PresentationComponent';
import ContainerComponent from './containers/ContainerComponent';
import DispatcherContainer from './containers/DispatcherContainer03';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  render() {
    return (
      <Provider store={this.store}>
        화면 컴포넌트: <PresentationComponent userName="화면 컴포넌트" />
        <br />
        데이터 컴포넌트: <ContainerComponent id={2} />
        <br />
        최종액션 데이터 컴포넌트: <DispatcherContainer />
      </Provider>
    );
  }
}

export default AdvReduxApp;
