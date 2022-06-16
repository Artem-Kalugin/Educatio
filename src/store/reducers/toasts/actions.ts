import { animateLayout } from '@utils/';
import { addToast, deleteToast, clearToasts } from './toast';

class ToastsActions {
  static addToast(text = 'Default toast text', type = 'success') {
    return async dispatch => {
      const alertId = new Date().getTime();
      animateLayout();
      dispatch(
        addToast({
          text,
          type,
          id: alertId,
        }),
      );
      setTimeout(() => {
        animateLayout();
        dispatch(deleteToast(alertId));
      }, 4000);
    };
  }

  static clearToasts() {
    return async dispatch => {
      dispatch(clearToasts());
    };
  }
}

export default ToastsActions;
