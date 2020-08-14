import createProvider from '../doit-ui/Modal/create';
import { TRADE_COIN_MODAL } from './containers/modals';
import TradeCoinPage from './containers/main/TradeCoinPageContainer';

export default createProvider({
  [TRADE_COIN_MODAL]: TradeCoinPage,
});
