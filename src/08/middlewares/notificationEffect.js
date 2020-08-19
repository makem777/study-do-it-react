import { showMesaage, hideMessage, SHOW_NOTIFICATION } from '../actions/notificationActions';
import { KEY, LIFECYCLE } from 'redux-pack';
import { debounce } from '../../02/debounce';

const debounceRunner = debounce(action => action(), 4000);

export default store => nextRunner => action => {
  const { type, meta } = action;
  if (meta && meta.notification) {
    const { success, error } = meta.notification;
    if (success && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
      store.dispatch(showMesaage(success));
    } else if (error && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
      store.dispatch(showMesaage(error));
    }
  } else if (type === SHOW_NOTIFICATION) {
    const hide = () => store.dispatch(hideMessage());
    debounceRunner(hide);
  }
  return nextRunner(action);
};
