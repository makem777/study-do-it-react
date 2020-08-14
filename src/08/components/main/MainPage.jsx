import React, { PureComponent } from 'react';
import CoinOverview from './CoinOverview';
import TransactionListContainer from '../../containers/main/TransactionListContainer';
import NotificationContainer from '../../containers/main/NotificationContainer';

class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CoinOverview />
        <TransactionListContainer />
        <NotificationContainer />
      </React.Fragment>
    );
  }
}

export default MainPage;
