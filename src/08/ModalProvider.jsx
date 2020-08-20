import createProvider from '../doit-ui/Modal/create';
import { TRADE_COIN_MODAL, REGISTER_USER_MODAL } from './containers/modals';
import TradeCoinPage from './containers/main/TradeCoinPageContainer';
import ResgisterPage from './containers/signup/ResgisterPageContainer';

export default createProvider({
  [TRADE_COIN_MODAL]: TradeCoinPage,
  [REGISTER_USER_MODAL]: ResgisterPage,
});
