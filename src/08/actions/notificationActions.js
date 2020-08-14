export const SHOW_NOTIFICATION = 'notification/SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'notification/HIDE_NOTIFICATION';

export function showMesaage(message, warning = false) {
  return {
    type: SHOW_NOTIFICATION,
    payload: { message, warning },
  };
}

export function hideMessage() {
  return {
    type: HIDE_NOTIFICATION,
  };
}
