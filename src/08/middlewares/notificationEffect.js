import { showMesaage } from '../actions/notificationActions';
import { KEY, LIFECYCLE } from 'redux-pack';

export default store => nextRunner => action => {
  const { meta } = action;
  if (meta && meta.notification) {
    console.log('meta.notification :>> ', meta.notification);
    const { success, error } = meta.notification;
    if (success && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
      store.dispatch(showMesaage(success));
    } else if (error && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
      store.dispatch(showMesaage(error));
    }
  }
  return nextRunner(action);
};
