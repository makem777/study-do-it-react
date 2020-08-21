import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import MainPage from './components/main/MainPage';
import NotFound from './components/NotFound';
import configureStore from './store/configureStore';
import NotificationContainer from './containers/NotificationContainer';
import ModalProvider from './ModalProvider';
import RouterStateContainer from './containers/RouterStateContainer';

class CoinApp extends PureComponent {
  store = configureStore();
  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <RouterStateContainer />
          <ModalProvider>
            <AppLayout>
              <Switch>
                <Route path="/" exact render={() => <MainPage />} />
                <Route path="*" component={NotFound} />
                {/*
                  Render 를 사용하는 경우
                  <Route path="*" render{({match}) => <NotFound match={match} />} />
                 */}
              </Switch>
              <NotificationContainer />
            </AppLayout>
          </ModalProvider>
        </Router>
      </Provider>
    );
  }
}

export default CoinApp;
